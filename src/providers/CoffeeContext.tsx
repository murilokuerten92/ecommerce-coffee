import { createContext, ReactNode, useState, useEffect, useContext } from 'react'
import { CoffeeType } from '@/@types/mockes'
import { coffeesApi } from '@/constants/datas'

interface CoffeeContextType {
  coffees: CoffeeType[];
  updateCoffeeAmount: (type: 'add' | 'remove', coffeeId: number) => void;
}

export const CoffeeContext = createContext({} as CoffeeContextType);

interface CoffeeContextProvidersProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children
}: CoffeeContextProvidersProps) {

  const [coffees, setCoffees] = useState<CoffeeType[]>([])

  useEffect(() => {
    setTimeout(() => {
      setCoffees(coffeesApi)
    }, 1000)
  }, [])

  function updateCoffeeAmount(type: 'add' | 'remove', coffeeId: number) {

    const coffeesParsed = coffees?.map(coffeItem => {
      if (coffeeId === coffeItem.id) {
        const AddRemoveItemAmount = type === 'add' ? coffeItem.amount + 1 : coffeItem.amount - 1;
        const updatedItem = { ...coffeItem, amount: AddRemoveItemAmount, total: coffeItem.price * AddRemoveItemAmount }
        return { ...updatedItem }
      }
      return coffeItem
    })


    return setCoffees(coffeesParsed)
  }

  return (
    <CoffeeContext.Provider value={{ coffees, updateCoffeeAmount }}>
      {children}
    </CoffeeContext.Provider>
  )
}

export function useCoffee() {
  const context = useContext(CoffeeContext);

  return context
}
