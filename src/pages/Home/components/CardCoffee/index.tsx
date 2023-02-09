import * as S from './styles'
import { CoffeeType } from '@/@types/mockes'
import { useCoffee } from '@/providers/CoffeeContext'
import { useCart } from '@/providers/CartContext'
import { Badge } from '@/components/Badge'

export function CardCoffee({ ...coffee }: CoffeeType) {
  const { updateCoffeeAmount } = useCoffee()
  const { addToCart, items } = useCart()

  function handleUpdateAmount(type: 'remove' | 'add', coffeeId: number) {
    updateCoffeeAmount(type, coffeeId)
  }

  function handleCreateNewItem(cartItem: CoffeeType) {
    addToCart(cartItem)
  }
  const accumulatorTotalItem = coffee?.total || coffee?.price

  return (
    <S.Card key={coffee.id}>
      <S.CardContent>
        <S.CoffeeImage
          width="120px"
          height="120px"
          src={coffee.img}
          alt={coffee.name}
        />
        <S.Tags>
          {coffee.types.map((type) => (
            <S.TagsCoffeeType key={type.id}>
              <span className="coffee_type">{type.name}</span>
            </S.TagsCoffeeType>
          ))}
        </S.Tags>
        <S.Title>{coffee.name}</S.Title>
        <S.SubTitle>{coffee.description}</S.SubTitle>
        <S.Footer>
          <section>
            <strong className="currencyValue">
              {accumulatorTotalItem?.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
            </strong>
          </section>
          <section className="countSum">
            <S.CountBox>
              <a
                className="count"
                type="submit"
                onClick={() =>
                  coffee.amount > 1 && handleUpdateAmount('remove', coffee.id)
                }
              >
                <S.RemoveIcon />
              </a>
              <span className="countText">{coffee.amount}</span>
              <a
                className="count"
                type="submit"
                onClick={() => handleUpdateAmount('add', coffee.id)}
              >
                <S.AddIcon />
              </a>
            </S.CountBox>

            <S.CartBox
              type="submit"
              id={coffee.name}
              name="add product"
              value={coffee.name}
              aria-label={coffee.name}
              onClick={() => handleCreateNewItem(coffee)}
            >
              {items?.map(
                (item) =>
                  item.id === coffee.id && (
                    <Badge key={item.id}>{item.amount}</Badge>
                  ),
              )}
              <S.CartIcon icon={'cartHome'} />
            </S.CartBox>
          </section>
        </S.Footer>
      </S.CardContent>
    </S.Card>
  )
}
