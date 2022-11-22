
import * as S from './styles';
import { Presentation } from '@/components/Presentation';
import { CardCoffee } from './components/CardCoffee';

import { CoffeeType } from '@/@types/mockes';
import { useCoffee } from '@/providers/CoffeeContext'

export function Home() {

  const { coffees } = useCoffee()

  return (
    <S.Container>
      <Presentation />
      <h1 className='CoffeeTitle'>Nossos cafés</h1>
      <S.SectionCards>
        {coffees?.map((coffee: CoffeeType) => (
          <CardCoffee key={coffee.id} {...coffee} />
        ))}
      </S.SectionCards>
    </S.Container>
  )
}
