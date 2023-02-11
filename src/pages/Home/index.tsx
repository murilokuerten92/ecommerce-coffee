import * as S from './styles'

import { Presentation } from '@/components/Presentation'
import { CardCoffee } from './components/CardCoffee'

import { CoffeeType } from '@/@types/mockes'
import { useCoffee } from '@/providers/CoffeeContext'
import { SkeletonCards } from '@/components/SkeletonCard'
import { Helmet } from 'react-helmet'

export function Home() {
  const { coffees, isLoading } = useCoffee()

  return (
    <S.Container>
      <Helmet>
        <meta
          charSet="utf-8"
          name="description"
          content="Here you check all coffees availables in our site, Enjoy the experience"
        />
        <title>Home</title>
        <link
          rel="canonical"
          href="https://coffee-ecommerce-prime.netlify.app/"
        />
      </Helmet>
      <Presentation />
      <h1 className="CoffeeTitle">Our Coffees</h1>
      <S.SectionCards>
        {isLoading && <SkeletonCards coffees={14} />}
        {coffees?.map((coffee: CoffeeType) => (
          <CardCoffee key={coffee.id} {...coffee} />
        ))}
      </S.SectionCards>
    </S.Container>
  )
}
