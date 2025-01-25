import logo from '../assets/kevinRushLogo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
const Navbar = () => {
  return (
    <nav className="bg-red-900 mb-20 flex item-center justify-between py-6">
        <div className="flex flex-shrink-0 item-center">
            <img src={logo} alt="logo" />
        </div>
    </nav>
  )
}

export default Navbar
