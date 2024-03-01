import { useState } from "react";
import ListCategory from "./ListCategory";
import ListProduct from "./ListProduct";
import ShopBanner from "../layouts/ShopBanner";

export default function Shop() {

    const [categoryId, setCategoryId] = useState()

    const handleIdSelect = (id) => {
        setCategoryId(id)
    }

    return (
        <>
            <ShopBanner />



            <div className="row">
                <div className="col-md-3">
                    <ListCategory onIdSelect={handleIdSelect} />
                </div>
                <div className="col-md-8">
                    <ListProduct categoryId={categoryId} />
                </div>
            </div>
        </>

    )
}