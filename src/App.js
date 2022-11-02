import logo from './logo.svg';
import './App.css';
import Lista from './components/ListaDeEmpregadosComponente';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import Criar from './components/CriarEmpregadoComponent';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
         <Header />
            <div className="container">
              <Routes> 
                 <Route path="/" exact element={<Lista/>} />
                 <Route path="/Cadastro" element={<Criar/>} />
                 <Route path="/Atualizar/:id" element={<Criar/>} />
              </Routes>
            </div>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
