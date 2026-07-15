import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Home'
import PhotosPage from './pages/Photos'
import NotFoundPage from './pages/NotFoundPage'
import HelpPage from './pages/Help'
import HexBoxPage from './pages/HexBox'
import VPNPage from './pages/VPN'
import KitsPage from './pages/Kits'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/help" element={<HelpPage />} />
      <Route path="/hexbox" element={<HexBoxPage />} />
      <Route path="/photos" element={<PhotosPage />} />
      <Route path="/vpn" element={<VPNPage />} />
      <Route path="/kits" element={<KitsPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
