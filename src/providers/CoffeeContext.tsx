import { createContext, ReactNode, useState, useEffect, useContext } from 'react'
import { CoffeeType } from '@/@types/mockes'
import { coffeesApi } from '@/constants/datas'

interface CoffeeContextType {
    coffees: CoffeeType[];
    handleUpdateCoffeeAmount: (type: 'add' | 'remove', coffeeId: number) => void;
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

    function handleUpdateCoffeeAmount(type: 'add' | 'remove', coffeeId: number) {

        coffees?.map(coffeItem => {
            if (coffeeId === coffeItem.id) {
                const AddRemoveItemAmount = type === 'add' ? coffeItem.amount + 1 : coffeItem.amount - 1;
                const item = { ...coffeItem, amount: AddRemoveItemAmount, total: coffeItem.price * AddRemoveItemAmount }
                const coffeeParsed = coffees[coffees.findIndex(coffeeItem => coffeeItem.id === item.id)] = item;
                return setCoffees(coffees => [...coffees, coffeeParsed])
            }
        })
        const allCoffees = [...new Set(coffees.map((coffeeItem: CoffeeType) => coffeeItem))]
        return setCoffees([...allCoffees])
    }

    return (
        <CoffeeContext.Provider value={{ coffees, handleUpdateCoffeeAmount }}>
            {children}
        </CoffeeContext.Provider>
    )
}

export function useCoffee() {
    const context = useContext(CoffeeContext);

    return context
}