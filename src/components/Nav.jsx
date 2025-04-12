import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/style.css'

const Nav = () => {
  return (
    <>
    <section className="c-nav"> {/*container nav*/}
      <img src='#' alt='logo-melodia'/>
      <Link to="/" className="nav-link">Home</Link>
      <Link to="#" className="nav-link">Planos</Link>
      <Link to="#" className="nav-link">Depoimentos</Link>
      <Link to="#" className="nav-link">Contato</Link>
    </section>
    </>
  )
}

export default Nav
