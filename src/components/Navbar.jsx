import logo2 from '../assets/2.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
const Navbar = () => {
  return (
    <nav className="mb-20 flex item-center justify-between py-6">
        <div className="flex flex-shrink-0 item-center">
            <img className="mx-2" src={logo2} alt="logo" height="150px" width="150px"/>
        </div>
        <div className="m-8 flex item-center justify-center gap-4 text-2xl">
          <a href="https:www.linkedin.com/in/nithika-perera-519197254" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className=" hover:text-blue-800"/>
          </a>
          <a href="https://github.com/NIKKAvRULZ" target="_blank" rel="noopener noreferrer">
              <FaGithub className=" hover:text-gray-500"/>
          </a>

          <a href="https://twitter.com/NithikaPerera" target="_blank" rel="noopener noreferrer">
              <FaTwitterSquare className=" hover:text-blue-400"/>
          </a>
          <a href="https://www.instagram.com/nikka_rulz/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className=" hover:text-red-500"/>
          </a>  
          <a href="https://www.facebook.com/nithika.perera.9/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className=" hover:text-blue-600"/>
          </a>


        </div>
    </nav>
  )
}

export default Navbar
