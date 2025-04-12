import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/style.css'

const Nav = () => {
  return (
    <>
    <Link to="/" className="nav-link">Home</Link>
    <Link to="#" className="nav-link">Planos</Link>
    <Link to="#" className="nav-link">Depoimentos</Link>
    <Link to="#" className="nav-link">Contato</Link>
    </>
  )
}

export default Nav
