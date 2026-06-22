import "./Header.css";
import logo from "../../assets/Group 6.png";
function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="logo" className="logo-img" />


                <nav className="nav-links">
                    <a href="#">Home</a>
                    <a href="#">Services</a>
                    <a href="#">About us</a>
                    <a href="#">Extra Salespage</a>
                </nav>
            </div>

            <button className="header-btn">
                Get your free guide now
            </button>
        </header>
    );
}

export default Header;