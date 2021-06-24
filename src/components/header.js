import { Link } from 'react-router-dom'
import './header.scss'

const Navbar = () => {
  return (
    <nav id="navbar">
      <span className="header_logo">logo</span>
      <button type="button" className="button_teal">
        Book Free Valuation
      </button>
      <Link to="#" className="nav_link">
        Browse Listings
      </Link>
      <Link to="#" className="nav_link">
        Our Fees
      </Link>
      <Link to="#" className="nav_link">
        Selling
      </Link>
      <Link to="#" className="nav_link">
        More
      </Link>
      <Link to="#" className="nav_link">
        01 5169999
      </Link>
      <button type="button" id="button_login" className="button_teal">
        Login
      </button>
    </nav>
  );
}

export default Navbar
