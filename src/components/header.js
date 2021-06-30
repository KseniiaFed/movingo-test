import { Link } from 'react-router-dom'
import { ReactComponent as MoovingoIcon } from '../assets/MoovingoHeader.svg'
import { ReactComponent as MoovingoIconCircle } from "../assets/Moovingo-circle.svg";
import { ReactComponent as MenuIcon } from "../assets/burgerIcon.svg";
import { ReactComponent as Arrow } from "../assets/arrow-white.svg"

const Navbar = () => {
  return (
    <nav>
      <div className="hidden sm:flex flex-row text-white text-opacity-80 w-full items-center justify-center text-xs xl:text-sm 2xl:text-base space-x-2 md:space-x-4 lg:space-x-6 pt-1">
        <span className="mr-24 hidden lg:block">
          <MoovingoIcon />
        </span>
        <button type="button" className="btn btn-teal">
          Book Free Valuation
        </button>
        <Link to="#">Browse Listings</Link>
        <Link to="#">Our Fees</Link>
        <div className="flex flex-row items-center space-x-2">
          <Link to="#">Selling</Link>
          <Arrow className="fill-current text-white h-2 w-2 mt-2" />
        </div>
        <div className="flex flex-row items-center space-x-2">
          <Link to="#">More</Link>
          <Arrow className="fill-current text-white h-2 w-2 mt-2" />
        </div>
        <Link to="#">01 5169999</Link>
        <button type="button" className="btn btn-teal w-28">
          Login
        </button>
      </div>
      <div className="flex flex-row sm:hidden w-full items-center px-5 justify-between text-sm pt-3">
        <MoovingoIconCircle />
        <div className="flex flex-row space-x-5 items-center">
          <button type="button" className="border rounded py-3 px-5 text-white font-semibold hover:bg-white hover:text-gray-600">
            Browse Listings
          </button>
          <MenuIcon />
        </div>
      </div>
    </nav>
  );
}

export default Navbar
