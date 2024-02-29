import ListCategory from "./ListCategory";
import ListProduct from "./ListProduct";

export default function Shop() {
    return (
        <div className="row">
            <div className="col-md-3">
                <ListCategory />
            </div>
            <div className="col-md-8">
                <ListProduct />
            </div>
        </div>
    )
}