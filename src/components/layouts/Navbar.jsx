function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="javascript:void(0)">
                        Logo
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
                                <a className="nav-link text-light" href="/">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="">
                                    Shop
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="">
                                    About us
                                </a>
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

export default Navbar