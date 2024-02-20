import axios from "axios";

const URL = "http://localhost:8080/shopbe/products"

class ProductService {
    getProduct() {
        return axios.get(URL)
    }
}

export default new ProductService()