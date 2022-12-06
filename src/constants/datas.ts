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
  description: 'Simple purchase and safe.',
  color: '#C47F17'
}, {
  id: 2,
  icon: 'time',
  description: 'Fast delivery and tracked.',
  color: '#DBAC2C'
}, {
  id: 3,
  icon: 'box',
  description: 'Keep packing and intact coffee.',
  color: '#574F4D'
}, {
  id: 4,
  icon: 'coffee',
  description: 'The coffee arrive fresh until you.',
  color: '#8047F8'
}];

export const coffeesApi = [{
  id: 1,
  types: [{
    id: 1,
    name: 'Traditional'
  }],
  name: 'Traditional Express',
  description: 'The coffee traditional done with hot water and ground grains',
  price: 9.90,
  img: normalCoffee,
  amount: 1,
  total: 0
}, {
  id: 2,
  types: [{
    id: 1,
    name: 'Traditional'
  }],
  name: 'American express',
  description: 'Diluted express, less intensive than traditional',
  price: 15.90,
  img: americanCoffee,
  amount: 1,
  total: 0
}, {
  id: 3,
  types: [{
    id: 1,
    name: 'Traditional'
  }],
  name: 'Cream express',
  description: 'Traditional cream coffee with cream foan',
  price: 9.90,
  img: creamCoffee,
  amount: 1,
  total: 0
}, {
  id: 4,
  types: [{
    id: 1,
    name: 'Traditional'
  }, {
    id: 2,
    name: 'Cold'
  }],
  name: 'Cold express',
  description: ' Drink prepared with express coffee and ice of cubes',
  price: 9.90,
  img: gelateCoffee,
  amount: 1,
  total: 0
}, {
  id: 5,
  types: [{
    id: 1,
    name: 'Traditional'
  }, {
    id: 2,
    name: 'With Milk'
  }],
  name: 'Coffee with milk',
  description: 'Half to half traditional express with vaporized milk',
  price: 9.90,
  img: latteeWcoffee,
  amount: 1,
  total: 0
}, {
  id: 6,
  types: [{
    id: 1,
    name: 'Traditional'
  }, {
    id: 2,
    name: 'With milk'
  }],
  name: 'Latte',
  description: 'One dose of coffee express with the double milk de leite and cream foan',
  price: 9.90,
  img: lateCoffee,
  amount: 1,
  total: 0
}, {
  id: 7,
  types: [{
    id: 1,
    name: 'Traditional'
  }, {
    id: 2,
    name: 'With milk'
  }],
  name: 'Capuccino',
  description: 'Drink made with canela of doses like coffee, milk and foam',
  price: 9.90,
  img: capuccino,
  amount: 1,
  total: 0
}, {
  id: 8,
  types: [{
    id: 1,
    name: 'Traditional'
  }, {
    id: 2,
    name: 'With milk'
  }],
  name: 'Macchiato',
  description: 'Express coffee mixed with a little of hot milk and foam',
  price: 9.90,
  img: macchiato,
  amount: 1,
  total: 0
}, {
  id: 9,
  types: [{
    id: 1,
    name: 'Traditional'
  }, {
    id: 2,
    name: 'With milk'
  }],
  name: 'Mocaccino',
  description: 'Express coffee with chocolate syrup, a litle milk and foam',
  price: 9.90,
  img: mocacchino,
  amount: 1,
  total: 0
}, {
  id: 10,
  types: [{
    id: 1,
    name: 'Special'
  }, {
    id: 2,
    name: 'With milk'
  }],
  name: 'Hot chocolate',
  description: 'Drink made with dissolve chocolate in the milk and coffee',
  price: 9.90,
  img: chocolate,
  amount: 1,
  total: 0
}, {
  id: 11,
  types: [{
    id: 1,
    name: 'Special'
  }, {
    id: 2,
    name: 'Alcoholic'
  }, {
    id: 3,
    name: 'Cold'
  }],
  name: 'Cuban',
  description: 'Cold drink of express coffee with rum, milk cream and hortela',
  price: 9.90,
  img: cuban,
  amount: 1,
  total: 0
}, {
  id: 12,
  types: [{
    id: 1,
    name: 'special'
  }],
  name: 'Havaian',
  description: 'Sweetened drink prepared with coffee and coconut milk',
  price: 9.90,
  img: havawain,
  amount: 1,
  total: 0
}, {
  id: 13,
  types: [{
    id: 1,
    name: 'Special'
  }],
  name: 'Arabic',
  description: 'Drink prepared with grains of arabic coffee and spices',
  price: 9.90,
  img: arabe,
  amount: 1,
  total: 0
}, {
  id: 14,
  types: [{
    id: 1,
    name: 'Special'
  }, {
    id: 2,
    name: 'Alcholic'
  }],
  name: 'Irish',
  description: 'Coffee based drink, irish whiskey, sugar and whipped cream',
  price: 9.90,
  img: irlandes,
  amount: 1,
  total: 0
}];

export const paymentMethods = [{
  id: 1,
  description: 'CRÉDIT CARD',
  icon: 'creditCard'
}, {
  id: 2,
  description: 'DEBIT CARD',
  icon: 'debitCard'
}, {
  id: 3,
  description: 'MONEY',
  icon: 'money'
}];
