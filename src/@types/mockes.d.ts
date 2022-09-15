type type = {
    id: number;
    name: string;
}

export type coffeeType = {
    id: number;
    types: type[];
    name: string;
    description: string;
    price: number;
    img: any;
}

export interface coffeeAll {
    coffees: coffeeType[];
}