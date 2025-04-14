import React from 'react'

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
            <nav className="Nav absolute top-0 left-0 w-full flex items-center justify-between p-4 text-white">
              <img src='../src/assets/logoMelo.png'
              alt='logo-melodia'/>
              <ul className="flex gap-6 items-center">
                <li><a href='#' className='transition ease-out duration-700 hover:text-green-500'>Benefícios</a></li>
                <li><a href='#' className='transition ease-out duration-700 hover:text-green-500'>Depoimentos</a></li>
                <li><a href='#' className='transition ease-out duration-700 hover:text-green-500'>Contato</a></li>
                <li><a href='#' className='btn-nav inline-block bg-gradient-to-r from-green-800 to-lime-500 rounded px-5 py-2 transition transform duration-300 hover:scale-105 drop-shadow-lg'>Planos</a></li>
              </ul>
            </nav>

          <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-lime-500 drop-shadow-lg animate-pulse">Melodia</h1>
          <p className="text-xl mb-6">Sua Música, Sua Forma</p>
          <button className="btn-perso bg-green-600 bg-gradient-to-r from-green-900 to-lime-500 drop-shadow-lg hover:cursor-pointer text-white rounded">
            Ouvir Agora
          </button>
        </div>
      </div>
    </div>

        {/*TAILWIND/sessão apresentação:
        uma sessão com 3 cards falando sobre os benefícios do App
        obs: devemos utilizar icones + tailwind aqui*/}


        {/*TAILWIND/sessão funcionalidades*/}


        {/*TAILWIND/sessão planos:
        colocar um container, e 5 cards para 
        mostrar os planos disponíveis:
        Melô Individual, duo, família, universitário e gratuito*/}


        {/*TAILWIND/sessão depoimentos:
        podemos colocar cards em algum tipo de carrossel manual
        onde voce clica e o depoimento passa para o prox*/}
        <div className='c-depoimento flex justify-center bg-gray-800'>
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
