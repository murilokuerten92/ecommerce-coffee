import * as S from './styles';
import { Icon } from '@/icon/icon'
import { useTheme } from 'styled-components';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import zod from 'zod'

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

    const theme = useTheme();

    const { register } = useForm({
        resolver: zodResolver(newAddressFormValidationSchema)
    });

    return (
        <S.Container>
            <S.Address>
                <S.Title>Complete seu pedido</S.Title>
                <S.AddressContent>
                    <S.AddressHeader>
                        <Icon icon='pin' color={theme.primary} />
                        <S.AddressTitle>
                            <S.TitleAddress>
                                Endereço de Entrega
                            </S.TitleAddress>
                            <S.ResumeInfo>
                                Informe o endereço onde deseja receber seu pedido
                            </S.ResumeInfo>
                        </S.AddressTitle>
                    </S.AddressHeader>
                    <S.AddressForm>
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
                        <S.AddressRow>
                            <S.AddressInputPattern placeholder='Número' {...register('number', { valueAsNumber: true })} />
                            <S.AddressStreet placeholder='Complemento' />
                        </S.AddressRow>
                        <S.AddressRow>
                            <S.AddressInputPattern placeholder='Bairro' />
                            <S.AddressCity placeholder='Cidade' />
                            <S.AddressState placeholder='UF' />
                        </S.AddressRow>
                    </S.AddressForm>
                </S.AddressContent>
            </S.Address>
            <S.Resume>
                <S.Title>Cafés selecionados</S.Title>
                <S.ResumeContent>

                </S.ResumeContent>
            </S.Resume>
        </S.Container>
    )
}