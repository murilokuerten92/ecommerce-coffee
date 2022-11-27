import { Cart } from '@/@types/mockes'
import { CartContextDefaultValues } from '@/providers/CartContext'
import { ActionTypes } from '@/reducers/carts/actions'
import { cartReducer } from '@/reducers/carts/reducers'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Header } from '.'
import items from './mock'


describe('Header component', () => {
  it('should be render location text', () => {
    render(<Header />, { wrapper: BrowserRouter })

    expect(screen.getByText('Porto Alegre, RS')).toBeInTheDocument();
  })

  it('should redirect when click cart button', () => {

    render(
      <Header />, { wrapper: BrowserRouter }
    );

    const cartButton = screen.getByTestId('cartButton')

    fireEvent.click(cartButton)

    expect(window.location.pathname).toBe('/checkout');
  })

  it('should not render when cart does not value', () => {
    render(<Header />, { wrapper: BrowserRouter })

    expect(screen.queryByTestId('cartItems')).not.toBeInTheDocument();
  })
  it('should render when cart has value', async () => {
    const cartState = {
      items: []
    }

    const action = {
      type: ActionTypes.ADD_NEW_ITEM,
      payload: {
        newItem: {
          id: 1,
          title: 'test',
          amount: 2,
          price: 5,
          img: '',
          total: 10
        }
      }
    }

    const ret = cartReducer(cartState, action)



    render(<Header />, { ret, wrapper: BrowserRouter } as any)

    // const t = screen.getByLabelText('Cart Items')
    // expect(t).toBeInTheDocument()
    expect(screen.getByText(/1/)).toBeInTheDocument()
  })
})

