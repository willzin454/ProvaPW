import logo from './logo.svg';
import './App.css';
import Home from './components/pages/home/Home';
import { Route, BrowserRouter, Routes} from 'react-router-dom';
import Formulario from './components/pages/formulario/Formulario';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/formulario" Component={Formulario}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
