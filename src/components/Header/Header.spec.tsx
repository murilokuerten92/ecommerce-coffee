import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Header } from '.'

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
})

