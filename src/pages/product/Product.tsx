import Single from "../../components/single/Single"
import { singleProduct } from "../../../data.ts";
import "./product.scss"

const Product = () => {

    //Fetch data and send to Single Component
    return (
        <div className="product">
            <Single {...singleProduct} />
        </div>
    )
}

export default Product