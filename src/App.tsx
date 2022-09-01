import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './global';
import { defaultTheme } from './styles';


function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
