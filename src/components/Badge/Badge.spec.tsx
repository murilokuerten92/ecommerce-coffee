import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Badge } from '.'

describe('Badge component', () => {
  it('should render when has value in component', () => {
    render(<Badge>2</Badge>, { wrapper: BrowserRouter })

    expect(screen.queryByTestId('badgeId')).toBeInTheDocument()
  })
})
