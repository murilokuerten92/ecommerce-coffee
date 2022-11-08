import * as S from './styles'
import Delivery from '@/assets/images/delivery.png'
import { useTheme } from 'styled-components'

export function Success() {

    const theme = useTheme();

    return (
        <S.Container>
            <S.Box>
                <S.Title>
                    Uhu! Pedido confirmado
                </S.Title>
                <S.SubTitle>
                    Agora é só aguardar que logo o café chegará até você
                </S.SubTitle>
                <S.Card>
                    <S.CardContent>

                        <S.Item>
                            <S.BoxItem color={theme.secondary_dark}>
                                <S.FaqIcon icon='dollar' color={theme.shape} />
                            </S.BoxItem>
                        </S.Item>
                        <S.Item>
                            <S.BoxItem color={theme.primary}>
                                <S.FaqIcon icon='dollar' color={theme.shape} />
                            </S.BoxItem>
                        </S.Item>
                        <S.Item>
                            <S.BoxItem color={theme.primary_dark}>
                                <S.FaqIcon icon='dollar' color={theme.shape} />
                            </S.BoxItem>
                        </S.Item>
                    </S.CardContent>
                </S.Card>
            </S.Box>
            <S.Box>
                <img src={Delivery} alt='moto do delivery' />
            </S.Box>
        </S.Container>
    )
}