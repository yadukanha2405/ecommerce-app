import "./index"
import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct } from "./slice-product";




export default function Product(){
    const [product, setProduct] = useState("");
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addUser = ()=>{
            dispatch(addProduct({
                product: product,
                

            }))

            navigate("/product-list") 
    }  


    return (
        <div className="user-container">
           <div className="user-box">
           <h1>Add User</h1>
            <div className="input">
                <input onChange={(e)=> setProduct(e.target.value) } type="text" placeholder="Product Name" />
                
            </div>
            <button onClick={addUser} className="add-btn">Add Product</button>
           </div>
        </div>
    )
}