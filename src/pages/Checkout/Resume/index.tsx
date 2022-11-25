import { useState } from 'react'
import * as S from './styles';
import { Icon } from '@/icon/icon'
import { useTheme } from 'styled-components';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import zod from 'zod'
import { paymentMethods } from '@/constants/datas'
import { Cart, PaymentMethods } from '@/@types/mockes'
import arabe from '@/assets/images/arabe.png';
import { maskCep } from '@/helpers/masks'
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/providers/CartContext';

const newAddressFormValidationSchema = zod.object({
  cep: zod.string().min(7, 'Informe o cep'),
  street: zod.string().min(5, 'Informe o nome da rua'),
  number: zod.string().min(1, 'Informe o número'),
  complement: zod.string().min(1, 'Informe um complemento'),
  district: zod.string().min(2, 'Informe o bairro'),
  city: zod.string().min(5, 'Informe a cidade'),
  uf: zod.string().min(2, 'Informe o estado')
})

type NewAddressFormData = zod.infer<typeof newAddressFormValidationSchema>

const FREIGHT_VALUE = 3.50;

export function Resume() {

  const [paymentMethodSelected, setPaymentMethodSelected] = useState('');

  const navigate = useNavigate();

  const theme = useTheme();

  const { items, deleteItem } = useCart();

  const { register, handleSubmit, formState: { errors } } = useForm<NewAddressFormData>({
    resolver: zodResolver(newAddressFormValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      district: '',
      city: '',
      uf: ''
    }
  });

  function handleChangePaymentMethods(selectedPaymentMethod: string) {
    setPaymentMethodSelected(selectedPaymentMethod)
  }

  function handleCreateNewAddress(data: NewAddressFormData) {
    console.log(data)
  }

  function handleItemDelete(data: Cart) {
    deleteItem(data)
  }

  const cartSubTotal = items.reduce((accumulator, sum) => accumulator + (sum.total || sum.price), 0)

  const cartTotal = cartSubTotal + FREIGHT_VALUE;

  return (
    <S.Container onSubmit={handleSubmit(handleCreateNewAddress)}>
      <S.PersonalDatas>
        <S.Title>Complete seu pedido</S.Title>
        <S.Card>
          <S.Content>
            <S.Header>
              <Icon icon='pinOutline' color={theme.primary} />
              <S.HeaderColumn>
                <S.HeaderTitle>
                  Endereço de Entrega
                </S.HeaderTitle>
                <S.ResumeInfo>
                  Informe o endereço onde deseja receber seu pedido
                </S.ResumeInfo>
              </S.HeaderColumn>
            </S.Header>
            <S.Form>
              <S.AddressInputPattern placeholder='CEP' {...register('cep', {
                pattern: {
                  value: /^[0-9]{5}-[0-9]{3}$/i,
                  message: 'cep é obrigatório'
                },

              })}
                maxLength={8}
                onChange={(event) => {
                  const { value } = event.target;
                  event.target.value = maskCep(value)
                }}
              />
              <S.AddressStreet {...register('street', {
                required: true
              })} placeholder='Rua' />
              <S.Row>
                <S.AddressInputPattern placeholder='Número' {...register('number', { required: true })} />
                <S.AddressStreet {...register('complement', {
                  required: true
                })} placeholder='Complemento' />
              </S.Row>
              <S.Row>
                <S.AddressInputPattern {...register('district', {
                  required: true
                })} placeholder='Bairro' />
                <S.AddressCity {...register('city', {
                  required: true
                })} placeholder='Cidade' />
                <S.AddressState {...register('uf', {
                  required: true
                })} maxLength={2} placeholder='UF' />
              </S.Row>
            </S.Form>
          </S.Content>
        </S.Card>
        <S.Card>
          <S.Content>
            <S.Header>
              <Icon icon='dollar' color={theme.secondary} />
              <S.HeaderColumn>
                <S.HeaderTitle>
                  Pagamento
                </S.HeaderTitle>
                <S.ResumeInfo>
                  O pagamento é feito na entrega. Escolha a forma que deseja pagar
                </S.ResumeInfo>
              </S.HeaderColumn>
            </S.Header>
            <S.RowPaymentMethods>
              {paymentMethods.map((paymentMethod: PaymentMethods) => (
                <S.PaymentMethodCard active={paymentMethod.description === paymentMethodSelected} key={paymentMethod.id} onClick={() => handleChangePaymentMethods(paymentMethod.description)}>
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
        <S.Title>Cafés selecionados</S.Title>
        <S.ResumeContent>

          {items?.map(product => (
            <S.ProductsRow key={product.id}>
              <S.ProductsInfoRow>
                <S.CoffeeImage src={product.img} />
                <S.ProductsColumn>
                  <S.HeaderTitle>
                    {product.title}
                  </S.HeaderTitle>
                  <S.ProductsRow>
                    <S.CountBox>
                      <button className='count'>
                        <S.RemoveIcon />
                      </button>
                      <span className='countText'>
                        {product.amount}
                      </span>
                      <button className='count'>
                        <S.AddIcon />
                      </button>
                    </S.CountBox>
                    <S.CountBox>
                      <button onClick={() => handleItemDelete(product)}>
                        <Icon icon='trash' />
                        <S.PaymentMethodTitle>
                          REMOVER
                        </S.PaymentMethodTitle>
                      </button>
                    </S.CountBox>
                  </S.ProductsRow>
                </S.ProductsColumn>
              </S.ProductsInfoRow>
              <S.ProductPrice>

                {product.price > product?.total ? product.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) : product.total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
              </S.ProductPrice>
            </S.ProductsRow>
          ))}
          <S.Border />
          <S.ResumeRow>
            <S.ResumeColumn>
              <S.ResumeInfo>
                Total de itens
              </S.ResumeInfo>
              <S.ResumeInfo>
                Entrega
              </S.ResumeInfo>
              <S.ProductTotal>
                Total
              </S.ProductTotal>
            </S.ResumeColumn>
            <S.ResumeColumnPrice>
              <S.ResumeInfo>
                {cartSubTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
              </S.ResumeInfo>
              <S.ResumeInfo>
                R$ 3,50
              </S.ResumeInfo>
              <S.ProductTotal>
                {cartTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
              </S.ProductTotal>
            </S.ResumeColumnPrice>
          </S.ResumeRow>
          <S.ConfirmButton onClick={() => navigate('/success')} disabled={paymentMethodSelected === ''} type='submit'>
            CONFIRMAR PEDIDO
          </S.ConfirmButton>
        </S.ResumeContent>
      </S.Resume>
    </S.Container>
  )
}
