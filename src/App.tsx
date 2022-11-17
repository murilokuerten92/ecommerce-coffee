import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './global';
import { defaultTheme } from './styles';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes';
import { CoffeeContextProvider } from '@/providers/CoffeeContext'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeeContextProvider>
          <Router />
        </CoffeeContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
