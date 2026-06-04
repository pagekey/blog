import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Home'
import PhotosPage from './pages/Photos'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/photos" element={<PhotosPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
