import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProductService from "../../services/ProductService"

export default function ProductDetail() {
    const { id } = useParams()
    const [product, setProduct] = useState('')

    useEffect(() => {
        ProductService.getProductById(id).then(
            res => {
                setProduct(res.data)
                console.log(res.data)
            }
        )
    }, [id])

    return (
        <div>
            <h3>{product.name}</h3>
            <h4>{product.price}$</h4>
            <h5>{product.description}</h5>
        </div>
    )
}