// O React, para funcionar, precisa controlar o DOM, para isso ele precisa de um ponto de entrada
// Esse ponto de entrada é a raiz da aplicação React, chamada root
// createRoot cria a raiz da aplicação React para um elemento específico do DOM
import { createRoot } from 'react-dom/client'

// Busca no DOM o elemento html com id root que será o containêr da aplicação React
const domElement = document.getElementById('root')
// Cria o objeto responsável por renderizar a aplicação React no elemento html do DOM
const root = createRoot(domElement)

function Header() {
  return (
      <header>
        <img className='header-logo' src='/src/assets/react-logo.png' alt='Logo' width="50px"/>
        <span><b>React Facts 2025</b></span>
      </header>
  )
}

function Main() {
  return (
    <main className="page-content">
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first release in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 200k stars on GitHub</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousand of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  )
}

function Footer() {
  return (
    <footer>
      <small>
        Desenvolvido Por Marco Floriano
      </small>
    </footer>
  )
}

// Componente responsável por definir a estrutura JSX (que será transformada em HTML pelo React) a ser renderizada pelo React no DOM
function Page() {
  return (
    // Abreviatura do <React.Fragment>, que permite agrupar vários elementos sem a necessidade de adicionar um wrapper extra no DOM
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

// Renderizamos nossa árvore de componentes dentro do DOM a partir do objeto root criado
root.render(
  <section>
    <Page />
  </section>
)