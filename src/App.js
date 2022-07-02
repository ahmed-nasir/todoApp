import logo from './logo.svg';
import './App.css';
import Navbar from './component/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Calendar from './component/Calendar/Calendar';
import Footer from './component/Shared/Footer';

function App() {
  return (
    <div className="">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='calendar' element={<Calendar/>} />
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
