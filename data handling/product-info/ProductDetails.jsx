import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
//to retrieve data based on id from the previous page
function ProductDetails()
{
    //store the id -- use useParam
    const {id} = useParams();
    //store the data -- use useState
    const [productdetails,setProduct] = useState(null);
    //initial value --null-  no product loaded yet

    //load data using useEffect -- fetch data
    useEffect(()=>{
        fetch("/products.json")//load the json file
        .then(response=>response.json())//convert response to json
        //find the id from the data 
        .then(data=>{
            //find the matching product
            for(let i=0;i<data.length;i++)
            {
                //compare every product id
                if(data[i].id==parseInt(id))
                {
                    setProduct(data[i]);//save the product
                    break;
                }
            }
        });
    }, [id]);//dependency array --if the id changes 
    //component reloads --effect reruns
    if(!productdetails)
    {
        return <p>loading product data...</p>
    }
    return(
        <div>
            <h2>Product Details page</h2>
            <h2>{productdetails.name}</h2>
            <p>{productdetails.price}</p>
            <p>{productdetails.description}</p>
        </div>
    );
}
export default ProductDetails;