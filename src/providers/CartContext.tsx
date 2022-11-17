import { createContext, ReactNode, useState } from 'react'
import { Cart } from '@/@types/mockes'

interface CartContextType {
    cart: Cart[];
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProvidersProps {
    children: ReactNode
}

export function CartContextProvider({
    children
}: CartContextProvidersProps) {

    const [cart, setCart] = useState<Cart[]>([])



    return (
        <CartContext.Provider value={cart}>
            {children}
        </CartContext.Provider>
    )
}