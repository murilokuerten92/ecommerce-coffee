import { useState } from 'react'
import * as S from './styles';
import { Icon } from '@/icon/icon'
import { useTheme } from 'styled-components';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import zod from 'zod'
import { paymentMethods } from '@/constants/datas'
import { PaymentMethods } from '@/@types/mockes'

const newAddressFormValidationSchema = zod.object({
    cep: zod.string().min(8, 'Informe o cep'),
    street: zod.string().min(5, 'Informe o nome da rua'),
    number: zod.number().min(1, 'Informe o número'),
    complement: zod.string().min(1, 'Informe um complemento'),
    district: zod.string().min(2, 'Informe o bairro'),
    city: zod.string().min(5, 'Informe a cidade'),
    uf: zod.string().min(2, 'Informe o estado')
})

const maskCep = (value: string) => value.replace(/\D/g, "").replace(/^(\d{5})(\d{3})+?$/, "$1-$2")

export function Resume() {

    const [paymentMethodSelected, setPaymentMethodSelected] = useState('');

    const theme = useTheme();

    const { register } = useForm({
        resolver: zodResolver(newAddressFormValidationSchema)
    });

    function handleChangePaymentMethods(selectedPaymentMethod: string) {
        setPaymentMethodSelected(selectedPaymentMethod)
    }

    return (
        <S.Container>
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
                            <S.AddressStreet placeholder='Rua' />
                            <S.Row>
                                <S.AddressInputPattern placeholder='Número' {...register('number', { valueAsNumber: true })} />
                                <S.AddressStreet placeholder='Complemento' />
                            </S.Row>
                            <S.Row>
                                <S.AddressInputPattern placeholder='Bairro' />
                                <S.AddressCity placeholder='Cidade' />
                                <S.AddressState placeholder='UF' />
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

                </S.ResumeContent>
            </S.Resume>
        </S.Container>
    )
}