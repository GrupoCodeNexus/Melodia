import React from 'react'

const Footer = () => {
  return (
    <>
    <div class="c-rodape"> {/*container rodape*/}
      <img src='#' alt='logo-melodia'/>
      <div class="section-contato">
        <h3>Contato</h3>
        <a href='#'><p>Envie-nos um e-mail</p></a>
      </div>
      <div class="section-links-uteis">
        <h3>Links Úteis</h3>
        <a href='#'><p>Home</p></a>
        <a href='#'><p>Planos</p></a>
        <a href='#'><p>Player da Web</p></a>
      </div>
      <div class="section-planos">
        <h3>Planos do Melodia</h3>
        <a href='#'><p>Melô Individual</p></a>
        <a href='#'><p>Melô Duo</p></a>
        <a href='#'><p>Melô Família</p></a>
        <a href='#'><p>Melô Universitário</p></a>
        <a href='#'><p>Melodia Gratuito</p></a>
      </div>
    </div>
    <div class="icons-socials">
      <img src="#" alt='logo-instagram'/>
      <img src="#" alt='logo-facebook'/>
      <img src="#" alt='logo-x'/>
    </div>
    <div class="section-pdp"> {/*section política de privacidade*/}
        <a href='#'>Política de privacidade</a>
        <a href='#'>Segurança e Centro de Privacidade</a>
        <a href='#'>Legal</a>
      </div>
    </>
  )
}

export default Footer
