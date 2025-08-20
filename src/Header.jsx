import logo from './assets/react.svg'
import './header.css'
const Header = () => {
  return (
    <header>
      <img src={logo} alt="Logo" className='logo' />
      <div>
        Lean React
      </div>
    </header>
  )
}

export default Header