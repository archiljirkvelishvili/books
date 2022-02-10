import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { About } from './about'
import { Blog } from './blog'
import { Home } from './home'

export function Pages() {
  return (
    <div>
      <nav>
        <Link to="/"> Home</Link>
        <Link to="/blog"> Blog </Link>
        <Link to="/about"> About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}
