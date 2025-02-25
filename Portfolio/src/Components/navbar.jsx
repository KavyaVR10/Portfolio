import {Link} from 'react-router-dom'
import '../Components/css/navbar.css'
const Nav=()=>
{
  return(
    <header>
      <nav>
        <li><Link className='li' to="/">Home</Link></li>
        <li><Link className='li' to="/about">About</Link></li>
        <li><Link className='li' to="/skills">Skills</Link></li>
        <li><Link className='li' to="/projects">Projects</Link></li>
        <li><Link className='li' to="/contact">Contact</Link></li>
        </nav>
    </header>
  )
}
export default Nav