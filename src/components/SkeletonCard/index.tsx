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
              <S.CoffeeImage>
                <Skeleton circle width={100} height={100} />
              </S.CoffeeImage>
              <S.Car>
                <Skeleton count={1} />
              </S.Car>

              <S.Tags>
                <Skeleton count={1} />
              </S.Tags>
              <S.Title>
                <Skeleton count={1} />
              </S.Title>
              <S.SubTitle>
                <Skeleton count={1} />
              </S.SubTitle>
              <S.Footer>
                <S.Title>
                  <Skeleton count={1} />
                </S.Title>
                <S.Title>
                  <Skeleton count={1} />
                </S.Title>
              </S.Footer>
            </S.CardContent>
          </S.Card>
        ))}
    </>
  )
}
