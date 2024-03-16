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
        <div className="container">
            <div className="row">
                {
                    products.map(
                        product => (
                            <div className="col-md-3 product-wrapper" key={product.id} >
                                <div className="product-section" onClick={() => handleProductDetail(product.id)}>
                                    <h4>{product.name}</h4>
                                    <h5>{product.price} VND</h5>
                                </div>
                                <div className="action-section">
                                    <button>Buy</button>
                                    <button>Add to collection</button>
                                </div>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default ListProduct