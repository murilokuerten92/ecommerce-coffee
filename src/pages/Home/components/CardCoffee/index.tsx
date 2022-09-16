import { useState } from 'react';
import * as S from './styles';
import normalCoffee from '@/assets/images/normalCoffee.png';
import { coffeeType } from '@/@types/mockes';

export function CardCoffee({ ...coffee }: coffeeType) {

    return (
        <S.Card>
            <S.CardContent key={coffee.id}>
                <S.CoffeeImage src={coffee.img} alt='name coffee' />
                <S.Tags>
                    {coffee.types.map(type => (
                        <S.TagsCoffeeType key={type.id} >
                            <span className='coffee_type'>
                                {type.name}
                            </span>
                        </S.TagsCoffeeType>
                    ))}
                </S.Tags>
                <S.Title>
                    {coffee.name}
                </S.Title>
                <S.SubTitle>
                    {coffee.description}
                </S.SubTitle>
                <S.Footer>
                    <section>
                        <strong className='currencyValue'>
                            {coffee.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                        </strong>
                    </section>
                    <section className='countSum'>
                        <S.CountBox>
                            <button className='count'>
                                <S.RemoveIcon />
                            </button>
                            <span className='countText'>
                                1
                            </span>
                            <button className='count'>
                                <S.AddIcon />
                            </button>
                        </S.CountBox>

                        <S.CartBox>
                            <S.CartIcon icon='cartHome' />
                        </S.CartBox>
                    </section>
                </S.Footer>
            </S.CardContent>
        </S.Card>
    )
}