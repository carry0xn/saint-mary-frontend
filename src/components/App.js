import Login from './LogIn'
import Home from './Home'
import Intro from './Intro'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter basename="/saint-mary-frontend">
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/login" element={<Login />} />
        <Route path='/home' element={<Home />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
