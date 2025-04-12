import React from 'react'

const Home = () => {
  return (
    <>
    <body class="body-home">
      <main>
        <div class="banner-home"> {/*banner de fundo e o h1, p e button por cima dele*/}
          <img src='#' alt='banner-melodia'/>
          <h1>Melodia</h1>
          <p>Sua Música, Sua Forma</p>
          <button class="#">Ouvir Agora</button>
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
    </body>
    
    </>
  )
}

export default Home
