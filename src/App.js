
import Login from './components/LogIn';
import Home from './components/Home';
import Intro from './components/Intro';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/login" element={<Login />} />
        <Route path='/home' element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
