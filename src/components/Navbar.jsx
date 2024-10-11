import '../css/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    return (
        <nav className="nav">
            <FontAwesomeIcon icon={faEarthAmericas} style={{color: "#ffffff",}} className='earth-icon'/>
            <p>my travel journal.</p>
        </nav>
    )
}

export default Navbar