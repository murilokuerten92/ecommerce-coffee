import Skeleton from 'react-loading-skeleton'
import * as S from './styles'
import 'react-loading-skeleton/dist/skeleton.css'

type Props = {
  coffees: number
}

export function SkeletonCards({ coffees }: Props) {
  return (
    <>
      {Array(coffees)
        .fill(0)
        .map((_, i) => (
          <S.Card key={i}>
            <S.CardContent>
              <Skeleton circle width={40} height={40} />
              <Skeleton circle width={40} height={40} />
              <Skeleton circle width={40} height={40} />
              <S.Car>
                <Skeleton count={4} />
              </S.Car>

              <S.Tags></S.Tags>
              <S.Title></S.Title>
              <S.SubTitle></S.SubTitle>
              <S.Footer>
                <section>
                  <strong className="currencyValue"></strong>
                </section>
                <section className="countSum">
                  <S.CountBox>
                    <a className="count" type="submit"></a>
                    <span className="countText"></span>
                    <a className="count" type="submit"></a>
                  </S.CountBox>

                  <S.CartBox type="submit"></S.CartBox>
                </section>
              </S.Footer>
            </S.CardContent>
          </S.Card>
        ))}
    </>
  )
}
