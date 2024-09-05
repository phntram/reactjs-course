import ProductItem from "./components/product-item";
import "./style.css";


function ProductList(props) {
    const listOfProducts = props.listOfProducts;
    console.log(props);
    return (
        <div>
            <h3 className="title">ECommerce Project</h3>
            {/* <ProductItem /> */}

            <ul>
                {
                    // dummyProductData.map((item, index) => <li key={index}>{item}</li>)
                    listOfProducts.map((item, index) => (
                        <ProductItem singleProductItem={item} key={index} />
                    ))
                }
            </ul>
        </div >
    );
}

export default ProductList;