export default function Header() {
  return (
      <header className='header'>
        <img className='header-logo' src='/src/assets/react-logo.png' alt='Logo'/>
        <span><b>React Facts 2025</b></span>
        <nav>
          <ul className='nav-list'>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
  )
}