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
          <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

      {/* Conteúdo sobre a imagem */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
            <nav className="Nav absolute top-0 left-0 w-full flex items-center justify-between p-4 text-white">
              <img src='https://avatars.githubusercontent.com/u/204507479?s=200&v=4'
              alt='logo-melodia'/>
              <ul className="flex gap-6">
                <li><a href='#' className='transition ease-out duration-700 hover:text-green-500'>Benefícios</a></li>
                <li><a href='#' className='transition ease-out duration-700 hover:text-green-500'>Depoimentos</a></li>
                <li><a href='#' className='transition ease-out duration-700 hover:text-green-500'>Contato</a></li>
                <li><a href='#' className='bg-green-600 btn-perso rounded transition ease-out duration-700 hover:bg-green-800'>Planos</a></li>
              </ul>
            </nav>

          <h1 className="text-5xl font-bold mb-4">Melodia</h1>
          <p className="text-xl mb-6">Sua Música, Sua Forma</p>
          <button className="btn-perso bg-green-600 hover:bg-green-700 text-white font-bold rounded">
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

        
        {/*TAILWIND/sessão contato:
        fazer um formulário para coletar emails via Tailwind*/}
      </main>
    
    
    </>
  )
}

export default Home
