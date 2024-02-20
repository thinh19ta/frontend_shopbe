import { useEffect } from "react"
import { useState } from "react"
import ProductService from "../services/ProductService"

function ListProduct() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        ProductService.getProduct().then(
            res => {
                setProducts(res.data)
            }
        )
    }, [])

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListProduct