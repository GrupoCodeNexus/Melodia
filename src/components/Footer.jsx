import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
      <div className="text-sm c-rodape flex justify-center bg-gray-900 text-gray-500"> {/*container rodape*/}
        <div className="section-contato">
          <h3 className='text-lg'>Contato</h3>
          <a href='#' className='transition ease-out duration-700 hover:text-green-500'><p>Envie-nos um e-mail</p></a>
        </div>
        <div className="section-links-uteis">
          <h3 className='text-lg'>Links Úteis</h3>
          <a href='#' className='transition ease-out duration-700 hover:text-green-500'><p>Home</p></a>
          <a href='#' className='transition ease-out duration-700 hover:text-green-500'><p>Planos</p></a>
          <a href='#' className='transition ease-out duration-700 hover:text-green-500'><p>Player da Web</p></a>
        </div>
        <div className="section-planos">
          <h3 className='text-lg'>Planos do Melodia</h3>
          <a href='#' className='transition ease-out duration-700 hover:text-green-500'><p>Melô Individual</p></a>
          <a href='#' className='transition ease-out duration-700 hover:text-green-500'><p>Melô Duo</p></a>
          <a href='#' className='transition ease-out duration-700 hover:text-green-500'><p>Melô Família</p></a>
          <a href='#' className='transition ease-out duration-700 hover:text-green-500'><p>Melô Universitário</p></a>
          <a href='#' className='transition ease-out duration-700 hover:text-green-500'><p>Melodia Gratuito</p></a>
        </div>
      </div>
      <div className="icons-socials bg-gray-900 text-gray-500 text-center space-x-4">
        <a href='#' className='transition ease-out duration-700 hover:text-green-500'><FontAwesomeIcon icon={faInstagram} spin /></a>
        <a href='#' className='transition ease-out duration-700 hover:text-green-500'><FontAwesomeIcon icon={faXTwitter} /></a>
        <a href='#' className='transition ease-out duration-700 hover:text-green-500'><FontAwesomeIcon icon={faFacebook} /></a>
      </div>
      <div className="section-pdp bg-gray-900 text-gray-500 text-center text-xs space-x-4"> {/*section política de privacidade*/}
        <a href='#' className='transition ease-out duration-700 hover:text-green-500'>Política de privacidade</a>
        <a href='#' id='seg' className='transition ease-out duration-700 hover:text-green-500'>Segurança e Centro de Privacidade</a>
        <a href='#' className='transition ease-out duration-700 hover:text-green-500'>Legal</a>
      </div>
    </>
  );
}

export default Footer;