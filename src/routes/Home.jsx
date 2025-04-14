import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <>
      <main>
        <div class="banner-home"> {/*banner de fundo e o h1, p e button por cima dele*/}
          <div className="relative w-full h-screen">
      {/* Imagem de fundo */}
      <img
            src="https://images.ctfassets.net/lnhrh9gqejzl/6vov4kWwAmveWlYDV3uUas/5b4d16adbebe2b41148b84d5bb3da6a9/S4A_MV_blog-2_stroke__1_.gif?w=1600"
            alt="Festival"
            className="w-full h-full object-cover"
            />

      {/* Overlay para o conteúdo */}
          <div className="absolute bg-black/50 backdrop-blur-sm inset-0 bg-opacity-30 z-10" />

      {/* Conteúdo sobre a imagem */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
            <nav className="Nav absolute top-0 left-0 w-full flex items-center justify-between text-white">
              <img src='../src/assets/logoMelo.png'
              alt='logo-melodia'/>
              <ul className="flex gap-6 items-center">
                <li><a href='#' className='transition ease-out duration-700 hover:text-green-500'>Benefícios</a></li>
                <li><a href='#' className='transition ease-out duration-700 hover:text-green-500'>Depoimentos</a></li>
                <li><a href='#' className='transition ease-out duration-700 hover:text-green-500'>Contato</a></li>
                <li><a href='#' className='btn-nav inline-block bg-gradient-to-r p-4 from-green-800 to-lime-500 rounded px-5 py-2 transition transform duration-300 hover:scale-105 drop-shadow-lg'>Planos</a></li>
              </ul>
            </nav>

          <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-lime-500 drop-shadow-lg animate-pulse">Melodia</h1>
          <p className="text-xl mb-6">Sua Música, Sua Forma</p>
          <button className="rounded bg-gradient-to-r from-green-700 to-lime-700 btn-nav btn-perso hover:cursor-pointer">
            Ouvir Agora
          </button>
        </div>
      </div>
    </div>

        {/*TAILWIND/sessão apresentação:
        uma sessão com 3 cards falando sobre os benefícios do App
        obs: devemos utilizar icones + tailwind aqui*/}


        {/*sessão funcionalidade>*/}
      <div className='funcionalidades-container flex items-center bg-black justify-center gap-20'>
      <div className='shadow-[0_0_5px_#98FB98,0_0_10px_#98FB98,0_0_15px_#98FB98,0_0_20px_#98FB98] funcionalidade-card text-white bg-transparent rounded text-center transition-all duration-300 ease-in-out hover-text-reveal'>
        <FontAwesomeIcon icon={faMusic} size='lg' />
        <h2 className='funcionalidades2'>Gratuito</h2>
        <div className='hover-text-container'>
          <p className='hover-text'>
             <li>Criar playlists personalizadas</li>
             <li>Reprodução de músicas</li>
              <li>Descoberta de conteúdos</li>
              <li>Uso de playlists</li>
          </p>
        </div>
      </div>

      <div className='shadow-[0_0_5px_#98FB98,0_0_10px_#98FB98,0_0_15px_#98FB98,0_0_20px_#98FB98] funcionalidade-card text-white bg-transparent rounded text-center transition-all duration-300 ease-in-out hover-text-reveal'>
        <FontAwesomeIcon icon={faMusic} size='lg' />
        <h2 className='funcionalidades2'>Assinantes</h2>
        <div className='hover-text-container'>
          <p className='hover-text'>
          <li>Criar playlists personalizadas</li>
          <li>Reprodução de músicas</li>
          <li>Descoberta de conteúdos</li>
          <li>Uso de playlists</li>
          <li>Músicas sem anúncios</li>
          <li>Áudio de alta qualidade</li>
          </p>
        </div>
      </div>
    </div>


        {/*sessão planos:*/}
        <div className='m-4 pad20 flex items-center bg-black justify-center gap-20'>

          <div className='pad20 text-white border-2 border-green-500 rounded text-center transition-transform duration-500 ease hover:scale-105'>
            <FontAwesomeIcon icon={faUser} size='lg'/>
            <h3 className='padm5'>Melô Individual</h3>
            <p>Desfrute de acesso ilimitado a todo o catálogo musical do Melô no seu próprio ritmo. Crie playlists personalizadas, ouça offline e descubra novos artistas e músicas. Uma experiência musical completa para um único usuário.</p>
            <button className='btn-perso depoimento bg-green-600 rounded hover:bg-green-700 cursor-pointer'>Assinar</button>
          </div>

          <div className='pad20 text-white border-4 border-green-500 rounded text-center transition-transform duration-500 ease hover:scale-105'>
            <FontAwesomeIcon icon={faUser} size='lg'/>
            <FontAwesomeIcon icon={faUser} size='lg'/>
            <h3 className='padm5'>Melô Duo</h3>
            <p>Perfeito para casais, amigos ou familiares que moram juntos. Dois perfis individuais com todos os benefícios do Melô Individual, permitindo que cada um explore suas preferências musicais sem interferir no outro. Uma forma econômica de compartilhar a paixão pela música.</p>
            <button className='btn-perso depoimento bg-green-600 rounded hover:bg-green-700 cursor-pointer'>Assinar</button>
          </div>

          <div className='pad20 text-white border-2 border-green-500 rounded text-center transition-transform duration-500 ease hover:scale-105'>
            <FontAwesomeIcon icon={faUsers} size='lg'/>
            <h3 className='padm5'>Melô Família</h3>
            <p>Reúna toda a família com até seis contas individuais sob uma única assinatura. Cada membro terá seu próprio perfil, playlists e recomendações personalizadas. Uma solução acessível para que todos em casa aproveitem milhões de músicas.</p>
            <button className='btn-perso depoimento bg-green-600 rounded hover:bg-green-700 cursor-pointer'>Assinar</button>
          </div>
        </div>



        {/*TAILWIND/sessão depoimentos:
        podemos colocar cards em algum tipo de carrossel manual
        onde voce clica e o depoimento passa para o prox*/}
        <div className='c-depoimento flex justify-center bg-black'>
          <div className='ring-gradient-verde depoimento border-3 rounded text-white'>
              <h3>Nome da pessoa</h3>
              <p>depoimento da pessoa</p>
              <small>CEO de tal empresa</small>
          </div>
          <div className='ring-gradient-verde depoimento border-4 rounded text-white'>
              <h3>Nome da pessoa</h3>
              <p>depoimento da pessoa</p>
              <small>CEO de tal empresa</small>
          </div>
          <div className='ring-gradient-verde depoimento border-3 rounded text-white'>
              <h3>Nome da pessoa</h3>
              <p>depoimento da pessoa</p>
              <small>CEO de tal empresa</small>
          </div>
        </div>

        
        {/*TAILWIND/sessão contato:
        fazer um formulário para coletar emails via Tailwind*/}
      </main>
    
    
    </>
  )
}

export default Home
