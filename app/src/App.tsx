import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './sites/home/Home'
import Portfolio from './sites/portfolio/Portfolio'
import Saas from './sites/saas/Saas'
import WildeWesten from './sites/wilde-westen/WildeWesten'
import WildeWestenDetail from './sites/wilde-westen/WildeWestenDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/saas" element={<Saas />} />
      <Route path="/wilde-westen" element={<WildeWesten />} />
      <Route path="/wilde-westen/event/:id" element={<WildeWestenDetail />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
