import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Home'
import PhotosPage from './pages/Photos'
import NotFoundPage from './pages/NotFoundPage'
import HelpPage from './pages/Help'
import HexBoxPage from './pages/HexBox'
import VPNPage from './pages/VPN'
import KitsPage from './pages/Kits'
import BlogPost from './pages/BlogPost'
import BlogIndex from './pages/BlogIndex'
import TagsIndex from './pages/TagsIndex'
import TagPosts from './pages/TagPosts'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/help" element={<HelpPage />} />
      <Route path="/hexbox" element={<HexBoxPage />} />
      <Route path="/unit" element={<Navigate to="/hexbox" replace />} />
      <Route path="/photos" element={<PhotosPage />} />
      <Route path="/vpn" element={<VPNPage />} />
      <Route path="/kits" element={<KitsPage />} />
      <Route path="/blog" element={<BlogIndex />} />
      <Route path="/blog/tags" element={<TagsIndex />} />
      <Route path="/blog/tags/:tag" element={<TagPosts />} />
      <Route path="/blog/:year/:month/:slug" element={<BlogPost />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
