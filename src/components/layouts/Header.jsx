import { Link } from "react-router-dom/dist";

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <div className="">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/shop">Shop</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="about">About us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}