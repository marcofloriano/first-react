// O React, para funcionar, precisa controlar o DOM, para isso ele precisa de um ponto de entrada
// Esse ponto de entrada é a raiz da aplicação React, chamada root
// createRoot cria a raiz da aplicação React para um elemento específico do DOM
import { createRoot } from 'react-dom/client'
import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'

// Busca no DOM o elemento html com id root que será o containêr da aplicação React
const domElement = document.getElementById('root')
// Cria o objeto responsável por renderizar a aplicação React no elemento html do DOM
const root = createRoot(domElement)

// Componente responsável por definir a estrutura JSX (que será transformada em HTML pelo React) a ser renderizada pelo React no DOM
function Page() {
  return (
    // Abreviatura do <React.Fragment>, que permite agrupar vários elementos sem a necessidade de adicionar um wrapper extra no DOM
    <>
      <Header />
      <MainContent />
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