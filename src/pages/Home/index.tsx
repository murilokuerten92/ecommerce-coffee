import { useState } from 'react';
import * as S from './styles';
import { Presentation } from '@/components/Presentation';
import { CardCoffee } from './components/CardCoffee';
import { coffees } from '@/constants/datas';
import { coffeeType } from '@/@types/mockes';

export function Home() {

    return (
        <S.Container>
            <Presentation />
            <h1 className='CoffeeTitle'>Nossos cafés</h1>
            <S.SectionCards>
                {coffees?.map((coffee: coffeeType) => (
                    <CardCoffee {...coffee} />
                ))}
            </S.SectionCards>
        </S.Container>
    )
}