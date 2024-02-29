import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src="assets/images/icons/icon.ico" width={50} alt="Icon2" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mynavbar"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav me-auto ms-5">
                            <li className="nav-item">
                                <Link to="/"><h6 className="text-dark mr-5">Home</h6></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/shop"><h6 className="text-dark mr-5">Shop</h6></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/aboutus"><h6 className="text-dark mr-5">About us</h6></Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input
                                className="form-control me-2"
                                type="text"
                                placeholder="Search"
                            />
                            <button className="btn btn-primary" type="button">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}