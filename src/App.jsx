import './App.css'
import DetailPortofolio from './pages/DetailPortofolio'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portofolio/:id' element={<DetailPortofolio />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App