import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Footer from './layouts/components/Footer/Footer';
import Navbar from './layouts/components/Navbar/Navbar';
import Menu from './layouts/components/Menu/Menu';
import Anketa from './pages/anketa/Anketa';
import History from './pages/history/History';
import Managment from './pages/managment/Managment';
import Regulatorydoc from './pages/regulatorydoc/Regulatorydoc';
function App() {
  return (
    <div>  
      <BrowserRouter>
        <Navbar/>
        <Menu/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/anketa' element={<Anketa/>}/>
          <Route path='/history' element={<History/>}/>
          <Route path='/managment' element={<Managment/>}/>
          <Route path='/regulatory' element={<Regulatorydoc/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
