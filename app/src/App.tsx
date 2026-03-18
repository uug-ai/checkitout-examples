import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './sites/home/Home'
import Portfolio from './sites/portfolio/Portfolio'
import Saas from './sites/saas/Saas'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/saas" element={<Saas />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
