import{useState,useEffect} from "react";
import { Link } from "react-router-dom";
function Products()
{
    //to store the data --use useState hook
    const [products,setProducts] = useState([]);
    //products -- like a variable to store data
    //setProducts -- a function to update products
    //[] -- initial state

    //use the useEffect hook to auto update component
    useEffect(
        ()=>{fetch("./products.json")
        .then((response)=>response.json())
        .then((data)=>setProducts(data))}, []
    );
    // inside useEffect
    //step 1 -- fetch data --indicate the json path here
    //step 2 -- convert the response to JSON 
    //                          --first then
    //step 3 -- store the data --use useState hook 
    //                          --second then
    // [] --dependency array
    //      --run the component only once 
    return(
        <div>
            <h2>Products List displayed here </h2>
            {/* use the map function to display the data */}
            {
                products.map((product)=>(
                    <p key={product.id}>
                        <Link to={`/productdetails/${product.id}`}>
                                    {product.name}
                        </Link>
                    </p>
                ))
            }
        </div>
    );
}
export default Products;