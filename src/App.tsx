import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './global';
import { defaultTheme } from './styles';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes';

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
