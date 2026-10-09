import { BrowserRouter, Navigate, Route, Routes, useParams } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Knowledge from './pages/Knowledge'
import Article from './pages/Article'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

// Chuyển hướng đường dẫn của website cũ (Haravan) sang đường dẫn mới để giữ liên kết & SEO
const oldPages = { 'about-us': '/gioi-thieu', 'dich-vu': '/dich-vu', 'lien-he': '/lien-he' }

function OldPageRedirect() {
  const { slug } = useParams()
  return <Navigate to={oldPages[slug] ?? `/dich-vu/${slug}`} replace />
}

function OldPostRedirect() {
  const { slug } = useParams()
  return <Navigate to={`/kien-thuc/${slug}`} replace />
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="gioi-thieu" element={<About />} />
          <Route path="dich-vu" element={<Services />} />
          <Route path="dich-vu/:slug" element={<ServiceDetail />} />
          <Route path="kien-thuc" element={<Knowledge />} />
          <Route path="kien-thuc/:slug" element={<Article />} />
          <Route path="lien-he" element={<Contact />} />

          <Route path="pages/:slug" element={<OldPageRedirect />} />
          <Route path="blogs/news" element={<Navigate to="/kien-thuc" replace />} />
          <Route path="blogs/news/:slug" element={<OldPostRedirect />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
