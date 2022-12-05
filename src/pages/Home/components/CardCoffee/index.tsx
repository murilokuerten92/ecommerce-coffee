import * as S from './styles';
import { CoffeeType } from '@/@types/mockes';
import { useCoffee } from '@/providers/CoffeeContext'
import { useCart } from '@/providers/CartContext';

export function CardCoffee({ ...coffee }: CoffeeType) {

  const { updateCoffeeAmount, coffees } = useCoffee()
  const { addToCart, items } = useCart();

  function handleUpdateAmount(type: 'remove' | 'add', coffeeId: number) {
    updateCoffeeAmount(type, coffeeId)
  }

  function handleCreateNewItem(cartItem: CoffeeType) {
    addToCart(cartItem)
  }
  const accumulatorTotalItem = coffee?.total || coffee?.price;

  return (
    <S.Card>
      <S.CardContent key={coffee.id}>
        <S.CoffeeImage src={coffee.img} alt={coffee.name} />
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
              {accumulatorTotalItem?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
            </strong>
          </section>
          <section className='countSum'>
            <S.CountBox>
              <a className='count' type='submit' onClick={() => coffee.amount > 1 && handleUpdateAmount('remove', coffee.id)}>
                <S.RemoveIcon />
              </a>
              <span className='countText'>
                {coffee.amount}
              </span>
              <a className='count' type='submit' onClick={() => handleUpdateAmount('add', coffee.id)}>
                <S.AddIcon />
              </a>
            </S.CountBox>

            <S.CartBox type='submit' onClick={() => handleCreateNewItem(coffee)}>
              <S.CartIcon icon={items?.some(item => item.id === coffee.id) ? 'cartEmpty' : 'cartHome'} />
            </S.CartBox>
          </section>
        </S.Footer>
      </S.CardContent>
    </S.Card>
  )
}
