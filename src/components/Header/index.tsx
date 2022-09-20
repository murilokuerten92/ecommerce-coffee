import * as S from './styles';
import { useNavigate } from 'react-router-dom';

export function Header() {

    const navigate = useNavigate();

    return (
        <S.Container>
            <S.CoffeeLogo />
            <S.UserSection>
                <S.Location>
                    <S.PinLogo />
                    <S.LocationText>
                        Porto Alegre, RS
                    </S.LocationText>
                </S.Location>
                <S.Cart onClick={() => navigate('/checkout')}>
                    <S.CartLogo />
                </S.Cart>
            </S.UserSection>
        </S.Container>
    )
}