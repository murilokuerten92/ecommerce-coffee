import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './global'
import { defaultTheme } from './styles'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes'
import { CoffeeContextProvider } from '@/providers/CoffeeContext'
import { CartContextProvider } from '@/providers/CartContext'
import { ToastContainer } from 'react-toastify'
import { SkeletonTheme } from 'react-loading-skeleton'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <BrowserRouter>
          <CoffeeContextProvider>
            <CartContextProvider>
              <Router />
              <ToastContainer toastClassName="foo" autoClose={3000} />
            </CartContextProvider>
          </CoffeeContextProvider>
        </BrowserRouter>
      </SkeletonTheme>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
