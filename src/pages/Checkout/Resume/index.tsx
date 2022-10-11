import * as S from './styles';
import { Icon } from '@/icon/icon'
import { useTheme } from 'styled-components';

export function Resume() {

    const theme = useTheme();

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
                        <S.AddressInputPattern placeholder='CEP' />
                        <S.AddressStreet placeholder='Rua' />
                        <S.AddressRow>
                            <S.AddressInputPattern placeholder='Número' />
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