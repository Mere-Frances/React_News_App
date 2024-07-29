import {useState} from 'react'
import MobileMenu from './MobileMenu'
import { Link } from 'react-router-dom'
import { List } from 'react-bootstrap-icons'

const Header = () => {
  const [menuIsOpen, openMenu] = useState(false)

  const toggleMobileMenu = () => {
    openMenu(!menuIsOpen)
    document.body.classList.toggle('no-scroll')
  }

  return (
    <>
      <div id='topnav'>
        <div id='logo'>
          <Link to="/">NewsApi</Link>
        </div>

        {/* Desktop Menu */}
        <ul id='menu'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>

        {/* Hamburger icon */}
        <div id='menu-container'>
          <button id='menu-button' className='show-mobile-menu-button' onClick={toggleMobileMenu}>
            <List id='hamburger-icon'/>
          </button>
        </div>
      </div>

      {menuIsOpen && <MobileMenu closeMethod={toggleMobileMenu}/>}
    </>
  )
}

export default Header
