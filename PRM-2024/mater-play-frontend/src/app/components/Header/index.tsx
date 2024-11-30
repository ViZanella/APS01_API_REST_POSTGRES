//Importando componentes do Material-UI
import { AppBar, Box, Button, Container, styled, Toolbar, Typography } from "@mui/material";

//Definindo o estilo personalizado para o MenuButton usando a função `styled` do Material-UI
const MenuButton = styled(Button)({
    color:'white', // Cor do texto do botão (branco)
    fontWeight:'400rem' // tamanho da fonte '400' ou 'bold')
})
// escopo para a parte do cabeçalho da pagina
function Header() {
    return (
// AppBar: componente que cria uma barra de navegação fixa no topo
        <AppBar>
{/*Container para centralizar e controlar o layout responsivo*/ }
            <Container>
 {/* Toolbar: componente para organizar itens dentro da barra */}
                <Toolbar>
 {/* Typography: componente para texto, aqui usado para o nome/branding do site */}
                    <Typography 
//Define o tamanho da fonte da letra
                        variant="h6"
                    >
                        Mater Play
                    </Typography>
 {/* Box: usado para criar uma caixa com espaçamento (padding) */}
                    <Box
                    sx={{
                        paddingLeft :'1rem' // coloca um espaçamento à esquerda entre o logo e o menu, usando
                    }}
                    >
{/* Button: é o contêiner que envolve os botões de menu */}
                        <Button>
                            <MenuButton variant="text">Todos</MenuButton>
                            <MenuButton variant="text">Series</MenuButton>
                            <MenuButton variant="text">Filmes</MenuButton>
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>

    )
}

export default Header; 
