import { useEffect, useState } from 'react'
import * as S from './styles'
import { Icon } from '@/icon/icon'
import { useTheme } from 'styled-components'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import zod from 'zod'
import { paymentMethods } from '@/constants/datas'
import { Cart, PaymentMethods } from '@/@types/mockes'

import { maskCep } from '@/helpers/masks'
import { useNavigate } from 'react-router-dom'
import { useCart } from '@/providers/CartContext'

const newAddressFormValidationSchema = zod.object({
  zipCode: zod.string().min(7, 'zip-code-required'),
  street: zod.string().min(5, 'strict required'),
  number: zod.string(),
  complement: zod.string(),
  district: zod.string().min(2, 'District required'),
  city: zod.string().min(5, 'City required'),
  uf: zod.string().min(2, 'State required'),
})

type NewAddressFormData = zod.infer<typeof newAddressFormValidationSchema>

export function Resume() {
  const [paymentMethodId, setPaymentMethodId] = useState('')

  const navigate = useNavigate()

  const theme = useTheme()

  const {
    items,
    removeFromCart,
    updateCoffeeAmountFromCart,
    cartSubTotal,
    cartTotal,
    freight,
    clearCart,
  } = useCart()

  const { register, handleSubmit, setValue, watch } =
    useForm<NewAddressFormData>({
      resolver: zodResolver(newAddressFormValidationSchema),
      defaultValues: {
        zipCode: '',
        street: '',
        number: '',
        complement: '',
        district: '',
        city: '',
        uf: '',
      },
    })

  const watchFields = watch(['zipCode', 'street', 'district', 'city', 'uf'])

  useEffect(() => {
    const zipCodeParsed = watch('zipCode').replace('-', '')

    if (zipCodeParsed.length >= 8) {
      fetch(`https://viacep.com.br/ws/${Number(zipCodeParsed)}/json/`)
        .then((response) => response.json())
        .then((response) => {
          setValue('street', response.logradouro)
          setValue('complement', response.complemento)
          setValue('district', response.bairro)
          setValue('city', response.localidade)
          setValue('uf', response.uf)
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch('zipCode')])

  function handleChangePaymentMethods(selectedPaymentMethod: string) {
    setPaymentMethodId(selectedPaymentMethod)
  }

  function handleCreateNewAddress(data: NewAddressFormData) {
    clearCart()
    navigate('/success', { state: { data, paymentMethodId } })
  }

  function handleUpdateCoffeeAmount(type: 'add' | 'remove', coffeeId: number) {
    updateCoffeeAmountFromCart(type, coffeeId)
  }

  function handleItemDelete(data: Cart) {
    removeFromCart(data)
  }

  function isValidFields() {
    return (
      paymentMethodId === '' ||
      watchFields.some((item) => item === '') ||
      items.length === 0
    )
  }

  return (
    <S.Container onSubmit={handleSubmit(handleCreateNewAddress)}>
      <S.PersonalDatas>
        <S.Title>Complet your order</S.Title>
        <S.Card>
          <S.Content>
            <S.Header>
              <Icon icon="pinOutline" color={theme.primary} />
              <S.HeaderColumn>
                <S.HeaderTitle>Delivery Address</S.HeaderTitle>
                <S.ResumeInfo>
                  Put the address where wish receive your order
                </S.ResumeInfo>
              </S.HeaderColumn>
            </S.Header>
            <S.Form>
              <S.AddressInputPattern
                placeholder="Zip-code"
                {...register('zipCode', {
                  required: true,
                })}
                maxLength={8}
                onChange={(event) => {
                  const { value } = event.target
                  event.target.value = maskCep(value)
                  setValue('zipCode', event.target.value)
                }}
              />
              <S.AddressStreet
                {...register('street', {
                  required: true,
                })}
                placeholder="Street"
              />
              <S.Row>
                <S.AddressInputPattern
                  placeholder="Number"
                  {...register('number', { required: true })}
                />
                <S.AddressStreet
                  {...register('complement', {
                    required: true,
                  })}
                  placeholder="Complement"
                />
              </S.Row>
              <S.Row>
                <S.AddressInputPattern
                  {...register('district', {
                    required: true,
                  })}
                  placeholder="District"
                />
                <S.AddressCity
                  {...register('city', {
                    required: true,
                  })}
                  placeholder="City"
                />
                <S.AddressState
                  {...register('uf', {
                    required: true,
                  })}
                  maxLength={2}
                  placeholder="UF"
                />
              </S.Row>
            </S.Form>
          </S.Content>
        </S.Card>
        <S.Card>
          <S.Content>
            <S.Header>
              <Icon icon="dollar" color={theme.secondary} />
              <S.HeaderColumn>
                <S.HeaderTitle>Payment</S.HeaderTitle>
                <S.ResumeInfo>
                  The payment is done on delivery. Choice the from that wish to
                  pay
                </S.ResumeInfo>
              </S.HeaderColumn>
            </S.Header>
            <S.RowPaymentMethods>
              {paymentMethods.map((paymentMethod: PaymentMethods) => (
                <S.PaymentMethodCard
                  active={paymentMethod.description === paymentMethodId}
                  key={paymentMethod.id}
                  onClick={() =>
                    handleChangePaymentMethods(paymentMethod.description)
                  }
                >
                  <Icon icon={paymentMethod.icon} color={theme.secondary} />
                  <S.PaymentMethodTitle>
                    {paymentMethod.description}
                  </S.PaymentMethodTitle>
                </S.PaymentMethodCard>
              ))}
            </S.RowPaymentMethods>
          </S.Content>
        </S.Card>
      </S.PersonalDatas>
      <S.Resume>
        <S.Title>Selected Coffees</S.Title>
        <S.ResumeContent>
          {items?.map((product) => (
            <S.ProductsRow key={product.id}>
              <S.ProductsInfoRow>
                <S.CoffeeImage src={product.img} alt={product.title} />
                <S.ProductsColumn>
                  <S.HeaderTitle>{product.title}</S.HeaderTitle>
                  <S.ProductsRow>
                    <S.CountBox>
                      <button
                        type="button"
                        className="count"
                        onClick={() =>
                          product.amount > 1 &&
                          handleUpdateCoffeeAmount('remove', product.id)
                        }
                      >
                        <S.RemoveIcon />
                      </button>
                      <span className="countText">{product.amount}</span>
                      <button
                        type="button"
                        className="count"
                        onClick={() =>
                          handleUpdateCoffeeAmount('add', product.id)
                        }
                      >
                        <S.AddIcon />
                      </button>
                    </S.CountBox>
                    <S.CountBox>
                      <button
                        type="button"
                        onClick={() => handleItemDelete(product)}
                      >
                        <Icon icon="trash" />
                        <S.PaymentMethodTitle>REMOVE</S.PaymentMethodTitle>
                      </button>
                    </S.CountBox>
                  </S.ProductsRow>
                </S.ProductsColumn>
              </S.ProductsInfoRow>
              <S.ProductPrice>
                {product.price > product?.total
                  ? product.price.toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    })
                  : product.total.toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    })}
              </S.ProductPrice>
            </S.ProductsRow>
          ))}
          <S.Border />
          <S.ResumeRow>
            <S.ResumeColumn>
              <S.ResumeInfo>Items total</S.ResumeInfo>
              <S.ResumeInfo>Delivery</S.ResumeInfo>
              <S.ProductTotal>Total</S.ProductTotal>
            </S.ResumeColumn>
            <S.ResumeColumnPrice>
              <S.ResumeInfo>
                {cartSubTotal.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
              </S.ResumeInfo>
              <S.ResumeInfo>
                {freight.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
              </S.ResumeInfo>
              <S.ProductTotal>
                {cartTotal.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
              </S.ProductTotal>
            </S.ResumeColumnPrice>
          </S.ResumeRow>
          <S.ConfirmButton disabled={isValidFields()} type="submit">
            ORDER CONFIRM
          </S.ConfirmButton>
        </S.ResumeContent>
      </S.Resume>
    </S.Container>
  )
}
