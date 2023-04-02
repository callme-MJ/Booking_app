import "./naavbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faBus, faCar, faPlane, faTrain } from "@fortawesome/free-solid-svg-icons";

const Navbar=()=>{
    return(
        <div className="navbar">
            <div className="navContainer">
                <div className="navLogo">
                    OYO
                </div>
                <div className="headerList">
                <div className="headerListItem active">
                <FontAwesomeIcon icon={faBed} />
                <span className="icon">Rooms</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faPlane} />
                <span className="icon">Flights</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faCar} />
                <span className="icon">Car Rentals</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faTrain} />
                <span className="icon">Trains</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faBus} />
                <span className="icon">Bus</span>
                </div>
            </div>

                <div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>
            </div>
        </div>
    )
}
export default Navbar;