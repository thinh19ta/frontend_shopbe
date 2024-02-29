import { useEffect } from "react"
import { useState } from "react"
import ProductService from "../../services/ProductService"

function ListProduct() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        ProductService.getAllProducts().then(
            res => {
                setProducts(res.data)
            }
        )
    }, [])

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(
                            product => (<tr className="table-primary" key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td><button>Details</button><button>Add</button></td>
                            </tr>)
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListProduct