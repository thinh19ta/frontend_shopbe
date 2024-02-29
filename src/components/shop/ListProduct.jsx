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
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(
                            product => (<tr className="table-primary" key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td><button onClick={() => handleProductDetail(product.id)}>Details</button><button>Add</button></td>
                            </tr>)
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListProduct