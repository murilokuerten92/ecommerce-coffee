import { useState } from 'react';
import * as S from './styles';
import normalCoffee from '@/assets/images/normalCoffee.png';

export function CardCoffee() {


    return (
        <>
            <S.Card>

                <S.CardContent>
                    <S.CoffeeImage src={normalCoffee} alt='name coffee' />
                    <S.TagsCoffeeType>
                        <span className='coffee_type'>

                        </span>
                    </S.TagsCoffeeType>
                    <S.Title>
                        Expresso Tradicional
                    </S.Title>
                    <S.SubTitle>
                        O tradicional café feito com água quente e grãos moídos
                    </S.SubTitle>
                    <S.Footer>
                        <span className='currecySymbol'>

                        </span>
                        <strong className='currencyValue'>

                        </strong>
                        <S.CountBox>
                            <button className='count'>

                            </button>
                            <span className='countText'>

                            </span>
                            <button className='count'>

                            </button>
                        </S.CountBox>
                        <S.CartBox>
                            <S.CartIcon icon='cartHome' />
                        </S.CartBox>
                    </S.Footer>
                </S.CardContent>
            </S.Card>
            <S.Card>
                <S.CardContent>
                    <S.CoffeeImage src={normalCoffee} alt='name coffee' />
                    <S.TagsCoffeeType>
                        <span className='coffee_type'>

                        </span>
                    </S.TagsCoffeeType>
                    <S.Title>

                    </S.Title>
                    <S.SubTitle>

                    </S.SubTitle>
                    <S.Footer>
                        <span className='currecySymbol'>

                        </span>
                        <strong className='currencyValue'>

                        </strong>
                        <S.CountBox>
                            <button className='count'>

                            </button>
                            <span className='countText'>

                            </span>
                            <button className='count'>

                            </button>
                        </S.CountBox>
                        <S.CartBox>
                            <S.CartIcon icon='cartHome' />
                        </S.CartBox>
                    </S.Footer>
                </S.CardContent>
            </S.Card>
        </>
    )
}