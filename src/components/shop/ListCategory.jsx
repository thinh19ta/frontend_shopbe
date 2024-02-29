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
            <div class="list-group">
                {categories.map(
                    category =>
                    (
                        <a href="#" class="list-group-item list-group-item-action list-group-item-success" key={category.id}>{category.name}</a>
                    )
                )}
            </div>
        </div>
    )
}