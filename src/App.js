
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar1';
import Navbar2 from './components/navbar/navbar2';
import Home from './pages/Home';


function App() {
  return (
    
    <>
    <Navbar />
      
      <Navbar2 />
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Home' element={<Home/>} />
      </Routes>
    
     </>
    
  );
}

export default App;
