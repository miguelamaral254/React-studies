import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Contato from './Pages/Contato';
import Empresa from './Pages/Empresa';
import NavBar from './components/Layout/NavBar';
import Footer from './components/Layout/Footer';


function App() {

    return (

        <div className='App'>
            <Router>
           <NavBar/>
            <Routes>
              <Route path='/' exact='true' element={<Home/>}></Route>
              <Route path='/empresa' element={<Empresa/>}></Route>
              <Route path='/contato' element={<Contato/>}></Route>
            </Routes>
                <Footer/>
                  </Router>
        </div>

    
  
);
}
export default App