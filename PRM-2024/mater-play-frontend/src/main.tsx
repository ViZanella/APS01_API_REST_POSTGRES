import { StrictMode } from 'react' // StrictMode é usado para destacar problemas potenciais no aplicativo durante o desenvolvimento
import { createRoot } from 'react-dom/client' // Função para renderizar a aplicação na raiz do DOM
import App from './App.tsx' // Importa o componente principal da aplicação, `App`
import '@fontsource/roboto/300.css'; // Importa a fonte Roboto, utilizada pelo Material-UI
import '@fontsource/roboto/400.css'; // Variantes da fonte Roboto, cada uma com um peso diferente
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'; // Importa ferramentas do Material-UI para tema e estilos globais
import { BrowserRouter } from 'react-router-dom';
//import { dark } from '@mui/material/styles/createPalette'; // Importa o estilo de paleta "dark" do Material-UI

// Cria um tema personalizado usando o Material-UI
const darkTheme = createTheme({
  palette:{
    mode: 'dark', // Define o modo como "dark", aplicando um tema escuro à interface
    primary:{// Pode ser usado para definir a cor primária do tema, mas aqui está vazio
    main : '#fff' // Define a cor principal como branco, aplicável ao texto e ícones
  }}
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <ThemeProvider theme={darkTheme}>

      <CssBaseline/>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
    
  </StrictMode>,
)

