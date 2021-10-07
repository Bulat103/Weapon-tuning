import { NavLink } from "react-router-dom"
function Header() {
    return (
        <div className="header-container">
            <div className="nav-container">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">ShareNote</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item"><NavLink exact className="nav-link" to="/">Home</NavLink></li>
                                <li className="nav-item"><NavLink exact className="nav-link" to="/goods">Goods</NavLink></li>
                                <li className="nav-item "><a className="nav-link " href="#services">Services</a></li>
                                <li className="nav-item "><a className="nav-link " href="#about">About</a></li>
                                <li className="nav-item "> <a className="nav-link " href="#footer">Contacts</a></li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Header;