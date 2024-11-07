import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import DetailPortofolio from './pages/DetailPortofolio'
import PageNotFound from './pages/PageNotFound'
import Experiance from './pages/Experiance'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portofolio/:id' element={<DetailPortofolio />} />
        <Route path='/page-not-found' element={<PageNotFound />} />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/experiance' element={<Experiance />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App