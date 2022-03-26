import { useSelector } from "react-redux"


export default function UserList(){
    const data = useSelector((state)=>state.user)

    const deleteItem=(key)=>{
        data.splice(key, 1)
    }
        
    return (
        <div className="main-item-container">
            <h1>UserList Componennt</h1>
            {data.map((item, key) => (
                <div  className="item-list" >
                    <p> Name : {item.name} </p>
                    <p> Email-Id : {item.email} </p>
                    <button onClick={deleteItem(key)} >Delete</button>
                </div>
            ))

            }
           
        </div>
    )
}