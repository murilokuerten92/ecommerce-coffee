import { useState } from 'react';
import * as S from './styles';
import { Presentation } from '@/components/Presentation';
import { CardCoffee } from './components/CardCoffee';
import { coffees } from '@/constants/datas';
import { coffeeType, coffeeAll } from '@/@types/mockes';

export function Home() {

    const [coffeesAll, setCoffeesAll] = useState<coffeeType[]>(coffees);

    return (
        <S.Container>
            <Presentation />
            <h1 className='CoffeeTitle'>Nossos cafés</h1>
            <S.SectionCards>
                {coffeesAll?.map((coffee) => (
                    <CardCoffee {...coffee} />
                ))}
            </S.SectionCards>
        </S.Container>
    )
}