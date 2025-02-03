import logo2 from '../assets/2.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
const Navbar = () => {
  return (
    <nav className="mb-20 flex item-center justify-between py-6">
        <div className="flex flex-shrink-0 item-center">
            <img className="mx-2" src={logo2} alt="logo" height="150px" width="150px"/>
        </div>
        <div className="m-8 flex item-center justify-center gap-4 text-2xl">
          <FaLinkedin />
          <FaGithub />
          <FaTwitterSquare />
          <FaInstagram />

        </div>
    </nav>
  )
}

export default Navbar
