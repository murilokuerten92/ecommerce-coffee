import { render } from '@testing-library/react'
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
    const { getByText } = render(<Header />)

    expect(getByText('Porto Alegre, RS')).toBeInTheDocument();
  })
})

