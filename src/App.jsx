import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import ConciergeChat from './components/ConciergeChat.jsx'
import Home from './pages/Home.jsx'

// Home loads eagerly (it's the landing page); the rest are code-split
// so the first paint doesn't ship every page's JS.
const About = lazy(() => import('./pages/About.jsx'))
const Services = lazy(() => import('./pages/Services.jsx'))
const Gallery = lazy(() => import('./pages/Gallery.jsx'))
const Products = lazy(() => import('./pages/Products.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Suspense fallback={<div className="min-h-screen" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <Footer />
      <ConciergeChat />
    </>
  )
}
