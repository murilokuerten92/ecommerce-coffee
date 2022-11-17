type type = {
    id: number;
    name: string;
}

export type CoffeeType = {
    id: number;
    types: type[];
    name: string;
    description: string;
    price: number;
    img: any;
    amount: number
    total?: number | undefined
}

export interface coffeeAll {
    coffees: coffeeType[];
}

export interface PaymentMethods {
    id: number;
    description: string;
    icon: string
}

export interface Cart {
    id: number;
    title: string;
    amount: number;
    price: number;
    img: any;
}