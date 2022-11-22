import normalCoffee from '@/assets/images/normalCoffee.png';
import americanCoffee from '@/assets/images/americanCoffee.png';
import creamCoffee from '@/assets/images/creamCoffee.png';
import gelateCoffee from '@/assets/images/gelatteCoffee.png';
import latteeWcoffee from '@/assets/images/latteeWcoffee.png';
import lateCoffee from '@/assets/images/lateCoffee.png';
import capuccino from '@/assets/images/capuccino.png';
import macchiato from '@/assets/images/macchiato.png';
import mocacchino from '@/assets/images/mocacchino.png';
import chocolate from '@/assets/images/chocolate.png';
import cuban from '@/assets/images/cuban.png';
import havawain from '@/assets/images/havawain.png';
import arabe from '@/assets/images/arabe.png';
import irlandes from '@/assets/images/irlandes.png';

export const faqs = [{
    id: 1,
    icon: 'cartHome',
    description: 'Compra simples e segura.',
    color: '#C47F17'
}, {
    id: 2,
    icon: 'time',
    description: 'Entrega rápida e rastreada.',
    color: '#DBAC2C'
}, {
    id: 3,
    icon: 'box',
    description: 'Embalagem mantém o café intacto.',
    color: '#574F4D'
}, {
    id: 4,
    icon: 'coffee',
    description: 'O café chega fresquinho até você.',
    color: '#8047F8'
}];

export const coffeesApi = [{
    id: 1,
    types: [{
        id: 1,
        name: 'Tradicional'
    }],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.90,
    img: normalCoffee,
    amount: 1,
    total: 0
}, {
    id: 2,
    types: [{
        id: 1,
        name: 'Tradicional'
    }],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 15.90,
    img: americanCoffee,
    amount: 1,
    total: 0
}, {
    id: 3,
    types: [{
        id: 1,
        name: 'Tradicional'
    }],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.90,
    img: creamCoffee,
    amount: 1,
    total: 0
}, {
    id: 4,
    types: [{
        id: 1,
        name: 'Tradicional'
    }, {
        id: 2,
        name: 'Gelado'
    }],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.90,
    img: gelateCoffee,
    amount: 1,
    total: 0
}, {
    id: 5,
    types: [{
        id: 1,
        name: 'Tradicional'
    }, {
        id: 2,
        name: 'Com Leite'
    }],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.90,
    img: latteeWcoffee,
    amount: 1,
    total: 0
}, {
    id: 6,
    types: [{
        id: 1,
        name: 'Tradicional'
    }, {
        id: 2,
        name: 'Com leite'
    }],
    name: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.90,
    img: lateCoffee,
    amount: 1,
    total: 0
}, {
    id: 7,
    types: [{
        id: 1,
        name: 'Tradicional'
    }, {
        id: 2,
        name: 'Com leite'
    }],
    name: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.90,
    img: capuccino,
    amount: 1,
    total: 0
}, {
    id: 8,
    types: [{
        id: 1,
        name: 'Tradicional'
    }, {
        id: 2,
        name: 'Com leite'
    }],
    name: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.90,
    img: macchiato,
    amount: 1,
    total: 0
}, {
    id: 9,
    types: [{
        id: 1,
        name: 'Tradicional'
    }, {
        id: 2,
        name: 'Com leite'
    }],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.90,
    img: mocacchino,
    amount: 1,
    total: 0
}, {
    id: 10,
    types: [{
        id: 1,
        name: 'Especial'
    }, {
        id: 2,
        name: 'Com leite'
    }],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.90,
    img: chocolate,
    amount: 1,
    total: 0
}, {
    id: 11,
    types: [{
        id: 1,
        name: 'Especial'
    }, {
        id: 2,
        name: 'Alcoólico'
    }, {
        id: 3,
        name: 'Gelado'
    }],
    name: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.90,
    img: cuban,
    amount: 1,
    total: 0
}, {
    id: 12,
    types: [{
        id: 1,
        name: 'especial'
    }],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.90,
    img: havawain,
    amount: 1,
    total: 0
}, {
    id: 13,
    types: [{
        id: 1,
        name: 'Especial'
    }],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.90,
    img: arabe,
    amount: 1,
    total: 0
}, {
    id: 14,
    types: [{
        id: 1,
        name: 'Especial'
    }, {
        id: 2,
        name: 'alcoólico'
    }],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.90,
    img: irlandes,
    amount: 1,
    total: 0
}];

export const paymentMethods = [{
    id: 1,
    description: 'CARTÃO DE CRÉDITO',
    icon: 'creditCard'
}, {
    id: 2,
    description: 'CARTÃO DE DÉBITO',
    icon: 'debitCard'
}, {
    id: 3,
    description: 'DINHEIRO',
    icon: 'money'
}];