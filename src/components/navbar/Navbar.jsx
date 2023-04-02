import "./naavbar.css"

const Navbar=()=>{
    return(
        <div className="navbar">
            <div className="navContainer">
                <div className="navLogo">
                    OYO
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