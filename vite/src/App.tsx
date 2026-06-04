import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Home'
import PhotosPage from './pages/Photos'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/" element={<PhotosPage />} />
    </Routes>
  )
}

export default App
