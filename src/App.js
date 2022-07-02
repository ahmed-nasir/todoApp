import logo from './logo.svg';
import './App.css';
import Navbar from './component/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Calendar from './component/Calendar/Calendar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='calendar' element={<Calendar/>} />
      </Routes>
      
    </div>
  );
}

export default App;
