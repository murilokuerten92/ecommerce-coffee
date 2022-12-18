import * as S from './styles'
import Delivery from '@/assets/images/delivery.png'
import { useTheme } from 'styled-components'

export function Success() {
  const theme = useTheme()

  return (
    <S.Container>
      <S.Title>Uhu! Confirmed Order</S.Title>
      <S.SubTitle>
        Now is wants only wait the soon the coffee will arrive until you
      </S.SubTitle>
      <S.Box>
        <S.Card>
          <S.CardContent>
            <S.Item>
              <S.BoxItem color={theme.secondary_dark}>
                <S.FaqIcon
                  icon="pin"
                  color={theme.shape}
                  width="32"
                  height="16"
                />
              </S.BoxItem>
              <S.ItemInfo>
                <span>Delivery on</span>
                <strong>
                  Rua João Daniel Martinelli, 102 Farrapos - Porto Alegre, RS
                </strong>
              </S.ItemInfo>
            </S.Item>
            <S.Item>
              <S.BoxItem color={theme.primary}>
                <S.FaqIcon icon="time" color={theme.shape} />
              </S.BoxItem>
              <S.ItemInfo>
                <span>Delivery prevision</span>
                <strong>20 min - 30 min</strong>
              </S.ItemInfo>
            </S.Item>
            <S.Item>
              <S.BoxItem color={theme.primary_dark}>
                <S.FaqIcon icon="dollar" color={theme.shape} />
              </S.BoxItem>
              <S.ItemInfo>
                <span>Payment on delivery</span>
                <strong>Credit Card</strong>
              </S.ItemInfo>
            </S.Item>
          </S.CardContent>
        </S.Card>

        <img src={Delivery} alt="motorcycle from delivery" />
      </S.Box>
    </S.Container>
  )
}
