import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/providers/CartContext';
import { useLocation } from '@/hooks/useLocation';

export function Header() {

  const navigate = useNavigate();

  const { items } = useCart()

  const { currentLocation } = useLocation();

  return (
    <S.Container>
      <S.CoffeeLogo />
      <S.UserSection>
        <S.Location>
          <S.PinLogo />
          <S.LocationText>
            {currentLocation ?? 'Location'}
          </S.LocationText>
        </S.Location>

        <S.Cart data-testid='cartButton' onClick={() => navigate('/checkout')}>
          {items?.length > 0 && <S.BoxCartLength data-testid='cartItems' aria-label="Cart Items">
            {items?.length}
          </S.BoxCartLength>}
          <S.CartLogo aria-label="Shopping Cart" />
        </S.Cart>
      </S.UserSection>
    </S.Container>
  )
}
