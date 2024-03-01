export default function Banner() {
    return (
        <div className="banner-section section pt-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12 mb-30">
                        <div className="single-banner">
                            <img src="assets/img/banner/1.jpg" alt="banner" />
                            <div className="banner-content right">
                                <h1 className="white">
                                    <span>Gifts</span>Christmas
                                </h1>
                                <a href="#" className="button">
                                    Shop Now
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 mb-30">
                        <div className="single-banner">
                            <img src="assets/img/banner/2.jpg" alt="banner" />
                            <div className="banner-content left">
                                <h2 className="black">
                                    <span className="small">
                                        Save <span className="red">25%</span>
                                    </span>
                                    <span className="red">Offer</span> Christmas
                                </h2>
                                <a href="#" className="link">
                                    Shop Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}