import { createRoot } from 'react-dom/client'

const domElement = document.getElementById('root')
const root = createRoot(domElement)

function PageHeader(){
  return (
    <div className='page-header'>
      <img className='header-logo' src='/src/assets/react-logo.png' alt='Logo' width="50px"/>
      <span><b>React Facts 2025</b></span>
    </div>
  )
}

function PageContent() {
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

function PageFooter() {
  return (
    <footer>Desenvolvido Por Marco Floriano</footer>
  )
}

root.render(
  <section>
    <PageHeader />
    <PageContent />
    <PageFooter />
  </section>
)