import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useContext,
} from 'react'
import { CoffeeType } from '@/@types/mockes'
import { coffeesApi } from '@/constants/datas'

interface CoffeeContextType {
  coffees: CoffeeType[]
  updateCoffeeAmount: (type: 'add' | 'remove', coffeeId: number) => void
  isLoading: boolean
}

export const CoffeeContext = createContext({} as CoffeeContextType)

interface CoffeeContextProvidersProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProvidersProps) {
  const [coffees, setCoffees] = useState<CoffeeType[]>([])

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setCoffees(coffeesApi)
      setIsLoading(false)
    }, 3000)
  }, [])

  function updateCoffeeAmount(type: 'add' | 'remove', coffeeId: number) {
    const coffeesParsed = coffees?.map((coffeItem) => {
      if (coffeeId === coffeItem.id) {
        const AddRemoveItemAmount =
          type === 'add' ? coffeItem.amount + 1 : coffeItem.amount - 1
        const updatedItem = {
          ...coffeItem,
          amount: AddRemoveItemAmount,
          total: coffeItem.price * AddRemoveItemAmount,
        }
        return { ...updatedItem }
      }
      return coffeItem
    })

    return setCoffees(coffeesParsed)
  }

  return (
    <CoffeeContext.Provider value={{ coffees, updateCoffeeAmount, isLoading }}>
      {children}
    </CoffeeContext.Provider>
  )
}

export function useCoffee() {
  const context = useContext(CoffeeContext)

  return context
}
