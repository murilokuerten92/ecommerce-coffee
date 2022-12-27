import Skeleton from 'react-loading-skeleton'
import * as S from './styles'

type Props = {
  coffees: number
}

export function SkeletonCards({ coffees }: Props) {
  return Array(coffees)
    .fill(0)
    .map((_, i) => (
      <S.Container key={i}>
        <Skeleton circle />
      </S.Container>
    ))
}
