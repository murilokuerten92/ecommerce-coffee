import * as S from './styles'

import { Presentation } from '@/components/Presentation'
import { CardCoffee } from './components/CardCoffee'

import { CoffeeType } from '@/@types/mockes'
import { useCoffee } from '@/providers/CoffeeContext'
import { SkeletonCards } from '@/components/SkeletonCard'

export function Home() {
  const { coffees, isLoading } = useCoffee()

  return (
    <S.Container>
      <Presentation />
      <h1 className="CoffeeTitle">Our Coffees</h1>
      <S.SectionCards>
        {isLoading && <SkeletonCards coffees={12} />}
        {coffees?.map((coffee: CoffeeType) => (
          <CardCoffee key={coffee.id} {...coffee} />
        ))}
      </S.SectionCards>
    </S.Container>
  )
}
