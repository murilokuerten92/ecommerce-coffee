import * as S from './styles'
import { useNavigate, useLocation as useLoc } from 'react-router-dom'
import { useCart } from '@/providers/CartContext'
import { useLocation } from '@/hooks/useLocation'

import { Badge } from '../Badge'

export function Header() {
  const navigate = useNavigate()

  const { items } = useCart()

  const { currentLocation } = useLocation()

  const location = useLoc()

  const hasItemsOnCart = items?.length > 0

  return (
    <S.Container>
      <S.HomelInkNavigate
        accessKey="navigate to home"
        onClick={() => navigate('/')}
      >
        <S.CoffeeLogo />
      </S.HomelInkNavigate>
      <S.UserSection>
        {currentLocation && (
          <S.Location>
            <S.PinLogo />
            <S.LocationText data-testid="location">
              {currentLocation ?? 'Location'}
            </S.LocationText>
          </S.Location>
        )}
        {location.pathname !== '/success' && (
          <S.Cart
            data-testid="cartButton"
            name="accessCheckout"
            id="accessCheckout"
            aria-label="accessCheckout"
            onClick={() => hasItemsOnCart && navigate('/checkout')}
          >
            {hasItemsOnCart && (
              <Badge data-testid="cartItems" aria-label="Cart Items">
                {items?.length}
              </Badge>
            )}
            <S.CartLogo aria-label="Shopping Cart" />
          </S.Cart>
        )}
      </S.UserSection>
    </S.Container>
  )
}
