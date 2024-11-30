// Importando componentes de Material-UI
import {Container, IconButton, Stack, Typography } from "@mui/material"
// Importando ícones de redes sociais de Material-UI
import {Instagram,Facebook,YouTube}from '@mui/icons-material';

// Definição do componente Footer(rodapé)
//É um componente de função React que retorna uma estrutura de rodapé.
function Footer (){
    return(
        <footer>
{/* Container principal que envolve o conteúdo do rodapé,é usado para encapsular e centralizar o conteúdo, facilitando o layout responsivo*/}
            <Container   
//SX - que é uma abordagem de Material-UI para estilização inline
                sx ={{
//m padding de 3rem, garantindo espaçamento em torno do conteúdo
                    padding: '3rem',
                    paddingRight: '1rem'
                }}
                >
{/* // Typography - é utilizado para definir diferentes estilos tipográficos.*/}
                <Typography
//define o estilo da formatação do texto
                    variant="overline"
// alinha o texto ao centro
                    textAlign="center">
                    Mater play
                </Typography>
{/* //Stack organiza os elementos em pilhas horizontais ou verticais(neste caso é configurado para organizar os botões).*/}
                <Stack
//Direciona o elemento (botoes)orizontalmente
                direction='row'
//centraliza os itens (botoes)
                justifyContent= 'center'
                > 
{/* // IconButton cria botões que podem conter ícones, com efeitos de clique*/}
                    <IconButton>    
                        <Instagram>
                        </Instagram>
                    </IconButton>
                    <IconButton>
                        <Facebook>
                        </Facebook>
                    </IconButton>
                    <IconButton>
                        <YouTube>
                        </YouTube>
                    </IconButton>
                </Stack>

            </Container>
        </footer>
    )
}
export default Footer