import './App.css';
import Login from './login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import HomePage from './homePage';
import InfoPage from './infoPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/users' element={<InfoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
