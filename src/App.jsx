import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import DetailPortofolio from './pages/DetailPortofolio'
import PageNotFound from './pages/PageNotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portofolio/:id' element={<DetailPortofolio />} />
        <Route path='/page-not-found' element={<PageNotFound />} />
        <Route path='*' element={<PageNotFound />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App