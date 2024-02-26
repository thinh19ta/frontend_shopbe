import { useEffect, useState } from "react"
import CategoryService from "../../services/CategoryService"

export default function () {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        CategoryService.getAllCategories().then(
            res => {
                setCategories(res.data)
            }
        )
    }, [])

    return (
        <div>
            <h1>Categories</h1>
            <ul>
            {
                categories.map(
                    category => (
                        <li key={category.id}>
                            {category.name}
                        </li>
                    )
                )
            }
            </ul>

        </div>
    )
}