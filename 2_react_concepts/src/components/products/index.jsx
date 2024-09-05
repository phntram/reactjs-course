import { useEffect, useState } from "react";
import ProductItem from "./components/product-item";
import "./style.css";


function ProductList(props) {
    // manage/track the local state within the component
    const [flag, setFlag] = useState(true);
    const [count, setCount] = useState(0);
    const [changeStyle, setChangeStyle] = useState(false);

    // const listOfProducts = props.listOfProducts;
    console.log(props);
    const { listOfProducts, name, city } = props;

    function handleToggleText() {
        setFlag(!flag);
    }

    function handleIncreaseCount() {
        setCount(count + 1);
    }

    // Handle side effects like data fetching or subscription. It also behaves similar way like componentDidMount from class component.
    // It have a dependency array ,[]. If the dependency is present this useEffect will only activate if the dependency is changed.
    // If you'll keep this dependency is empty then this useEffect will only run on page load once.
    useEffect(() => {
        console.log("run only once page load");
        setFlag(!flag);

        return () => {
            console.log("component is unmounted -> side effect here");
        };
    }, []);

    useEffect(() => {
        console.log("count changes");

        if (count == 10) {
            setChangeStyle(true);
        }
    }, [count]);

    return (
        <div>
            <h3 className="title">ECommerce Project</h3>
            {/* <ProductItem /> */}

            <button onClick={handleToggleText}>Toggle Text</button>

            {flag ? <h4>{name} in {city}</h4> : <h4>Hello World!!!</h4>}

            <div>
                <button onClick={handleIncreaseCount} style={{ backgroundColor: changeStyle ? "red" : "white", color: changeStyle ? "white" : "black" }}>Increase count</button>
                <p>Count is {count}</p>
            </div>

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