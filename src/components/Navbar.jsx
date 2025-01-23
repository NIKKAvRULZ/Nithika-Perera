import logo from '../assets/kevinRushLogo.png'
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
