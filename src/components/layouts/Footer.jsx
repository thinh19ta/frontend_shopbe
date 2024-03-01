export default function Footer() {
    return (
        <div
            className="footer-section section bg-dark"
            style={{ backgroundImage: "url(img/bg/footer-bg.png)" }}
        >
            <div className="container">
                <div className="row">
                    <div className="col">
                        {/* Footer Top Start */}
                        <div className="footer-top section pt-80 pb-50">
                            <div className="row">
                                {/* Footer Widget */}
                                <div className="footer-widget col-lg-4 col-md-6 col-12 mb-40">
                                    <img
                                        className="footer-logo"
                                        src="assets/img/footer-logo.png"
                                        alt="logo"
                                    />
                                    <p>
                                        Contrary to popular belief, Lorem Ipsum is nosimply random
                                        text. It has roots in a piece of classical Latin literature
                                        from 45 BC, making it over Lorem Ipsum is nosimply random
                                        text.
                                    </p>
                                </div>
                                {/* Footer Widget */}
                                <div className="footer-widget col-lg-2 col-md-3 col-12 mb-40">
                                    <h4 className="widget-title">Information</h4>
                                    <ul>
                                        <li>
                                            <a href="#">About us</a>
                                        </li>
                                        <li>
                                            <a href="#">Services</a>
                                        </li>
                                        <li>
                                            <a href="#">Team member</a>
                                        </li>
                                        <li>
                                            <a href="#">Clinet</a>
                                        </li>
                                        <li>
                                            <a href="#">Portfolio</a>
                                        </li>
                                        <li>
                                            <a href="#">Contact us</a>
                                        </li>
                                    </ul>
                                </div>
                                {/* Footer Widget */}
                                <div className="footer-widget col-lg-2 col-md-3 col-12 mb-40">
                                    <h4 className="widget-title">Categories</h4>
                                    <ul>
                                        <li>
                                            <a href="#">Costumes</a>
                                        </li>
                                        <li>
                                            <a href="#">Lights</a>
                                        </li>
                                        <li>
                                            <a href="#">Lights</a>
                                        </li>
                                        <li>
                                            <a href="#">Christmas Trees</a>
                                        </li>
                                        <li>
                                            <a href="#">Decorations</a>
                                        </li>
                                    </ul>
                                </div>
                                {/* Footer Widget */}
                                <div className="footer-widget col-lg-4 col-md-6 col-12 mb-40">
                                    <h4 className="widget-title">Contact Us</h4>
                                    <ul>
                                        <li>
                                            <span>Address:</span> ur address goes here,street Crossroad
                                            123
                                        </li>
                                        <li>
                                            <span>Phone:</span> +99 859 658 589 . +69 587 456 25
                                        </li>
                                        <li>
                                            <span>Eax:</span> +55 784 7585 . + 985 698 586
                                        </li>
                                        <li>
                                            <span>Email:</span> christ@email.com
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Footer Top End */}
                    </div>
                </div>
            </div>
        </div>
    )
}