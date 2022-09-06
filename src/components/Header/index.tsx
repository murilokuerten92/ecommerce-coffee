import * as S from './styles'

export function Header() {

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
                <S.Cart>
                    <S.CartLogo />
                </S.Cart>
            </S.UserSection>
        </S.Container>
    )
}