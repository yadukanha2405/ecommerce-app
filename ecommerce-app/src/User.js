import "./index"
import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUsers } from "./slice";




export default function User(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addUser = ()=>{
            dispatch(addUsers({
                name: name,
                email: email

            }))

            navigate("/user-list") 
    }  


    return (
        <div className="user-container">
           <div className="user-box">
           <h1>Add User</h1>
            <div className="input">
                <input onChange={(e)=> setName(e.target.value) } type="text" placeholder="User Name" />
                <input onChange={(e)=> setEmail(e.target.value) } type="email" placeholder="User's mail-id" />
            </div>
            <button onClick={addUser} className="add-btn">Add</button>
           </div>
        </div>
    )
}