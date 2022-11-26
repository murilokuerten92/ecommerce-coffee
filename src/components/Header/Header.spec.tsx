import { render, screen } from '@testing-library/react'
import { Header } from '.'

jest.mock('react-router-dom', () => {
  return {
    useNavigate() {
      return {
        navigate: '/checkout'
      }
    }
  }
})

describe('Header component', () => {
  it('should be render location text', () => {
    render(<Header />)

    expect(screen.getByText('Porto Alegre, RS')).toBeInTheDocument();
  })
})

