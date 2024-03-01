import { useEffect } from "react"
import { useState } from "react"
import ProductService from "../../services/ProductService"
import { useNavigate } from "react-router-dom"

function ListProduct({ categoryId }) {
    const [products, setProducts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        if (categoryId) {
            ProductService.getAllProductsByCategory(categoryId).then(
                res => {
                    setProducts(res.data)
                }
            )
        }
        else {
            ProductService.getAllProducts().then(
                res => {
                    setProducts(res.data)
                }
            )
        }
    }, [categoryId])

    const handleProductDetail = (id) => {
        navigate(`/shop/product/${id}`)
    }

    return (
        <div className="product-section section pt-120 pb-120">
            <div className="container">
                <div className="row">
                    {
                        products.map(
                            product => (
                                <div className="col-lg-4 col-md-6 col-12 mb-60" key={product.id}>
                                    <div className="product">
                                        {/* Image Wrapper */}
                                        <div className="image">
                                            {/* Image */}
                                            <a href="product-details.html" className="img">
                                                <img src="assets/img/product/1.jpg" alt="Product" />
                                            </a>
                                            {/* Wishlist */}
                                            <a href="#" className="wishlist">
                                                <i className="fa fa-heart-o" />
                                            </a>
                                            {/* Label */}
                                            <span className="label">New</span>
                                        </div>
                                        {/* Content */}
                                        <div className="content">
                                            {/* Head Content */}
                                            <div className="head fix">
                                                {/* Title & Category */}
                                                <div className="title-category float-left">
                                                    <h5 className="title">
                                                        <a href="product-details.html">{product.name}</a>
                                                    </h5>
                                                    <a href="shop.html" className="category">
                                                        Catalog
                                                    </a>
                                                </div>
                                                {/* Price */}
                                                <div className="price float-right">
                                                    <span className="new">{product.price} VND</span>
                                                    {/* Old Price Mockup If Need */}
                                                    {/* <span class="old">$46</span> */}
                                                </div>
                                            </div>
                                            {/* Action Button */}
                                            <div className="action-button fix">
                                                <a href="#">add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        )
                    }


                </div>
            </div>
        </div>
        // <div>
        //     <table className="table">
        //         <thead>
        //             <tr>
        //                 <th>Name</th>
        //                 <th>Price</th>
        //                 <th>action</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {
        //                 products.map(
        //                     product => (<tr className="table-primary" key={product.id}>
        //                         <td>{product.name}</td>
        //                         <td>{product.price}</td>
        //                         <td><button onClick={() => handleProductDetail(product.id)}>Details</button><button>Add</button></td>
        //                     </tr>)
        //                 )
        //             }
        //         </tbody>
        //     </table>
        // </div>
    )
}

export default ListProduct