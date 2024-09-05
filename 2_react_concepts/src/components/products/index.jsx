import ProductItem from "./components/product-item";


function ProductList(props) {
    const listOfProducts = props.listOfProducts;
    console.log(props);
    return (
        <div>
            <h3>ECommerce Project</h3>
            {/* <ProductItem /> */}

            <ul>
                {
                    // dummyProductData.map((item, index) => <li key={index}>{item}</li>)
                    listOfProducts.map((item) => <li>{item}</li>)
                }
            </ul>
        </div>
    );
}

export default ProductList;