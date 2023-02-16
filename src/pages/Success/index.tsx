import * as S from './styles'
import Delivery from '@/assets/images/delivery.webp'
import { useTheme } from 'styled-components'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export default function Success() {
  const theme = useTheme()

  const location = useLocation()
  const { data } = location.state

  return (
    <S.Container>
      <Helmet>
        <meta
          charSet="utf-8"
          name="description"
          content="A collection of positve thinking, how to change                 life-guides, life changing solutions by free thinking and a positive apprauch. Tested self motivation techniques. "
        />
        <title>Home</title>
        <link
          rel="canonical"
          href="https://coffee-ecommerce-prime.netlify.app/success"
        />
      </Helmet>
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
                  Rua {data?.street}, {data?.number} {data?.district} -{' '}
                  {data?.city}, {data?.uf}
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
                <strong>{location?.state?.paymentMethodId}</strong>
              </S.ItemInfo>
            </S.Item>
          </S.CardContent>
        </S.Card>

        <img src={Delivery} alt="motorcycle from delivery" />
      </S.Box>
    </S.Container>
  )
}
