
import { Router } from "@mui/icons-material";
import Footer from "./app/components/Footer" // Importa o componente de rodapé
import Header from "./app/components/Header" // Importa o componente de cabeçalho
import HomePage from "./app/pages/home";

function App() {


  return (
    <div className="wrapper">
      <Header />
    <Router>
      <Router path="/:id?" element ={<HomePage/>}
    </Router>
      <Footer />
    </div>
  )
}

  

export default App;