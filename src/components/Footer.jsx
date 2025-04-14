import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
<div className='c-rdp'>
<div class="min-h-screen bg-gray-900 flex items-center justify-center py-8 px-2 sm:px-6 lg:px-8">
  <div class="bg-gray-600 shadow-md rounded-lg px-4 pt-2 pb-4 mb-2 w-full max-w-md">
    <h2 class="block text-gray-100 text-2xl font-bold mb-6 text-center">
      Entre em Contato
    </h2>
    <form>
      <div class="mb-4">
        <label class="block text-white text-sm font-bold mb-2" for="nome">
          Nome
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline" id="nome" type="text" placeholder="Digite seu nome"/>
      </div>
      <div class="mb-4">
        <label class="block text-white text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Digite seu email"/>
      </div>
      <div class="mb-4">
        <label class="block text-white text-sm font-bold mb-2" for="mensagem">
          Mensagem
        </label>
        <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline" id="mensagem" rows="5" placeholder="Digite sua mensagem"></textarea>
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Enviar Mensagem
        </button>
      </div>
    </form>
  </div>
</div>
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