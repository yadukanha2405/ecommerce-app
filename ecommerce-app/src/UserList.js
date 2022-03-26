import { useSelector } from "react-redux"


export default function UserList(){
    const data = useSelector((state)=>state.user)

    
        
    return (
        <div className="main-item-container">
            <h1>UserList Componennt</h1>
            {data.map((item, key) => (
                <div  className="item-list" >
                    <p> Name : {item.name} </p>
                    <p> Email-Id : {item.email} </p>
                    <button >Delete</button>
                    <button >Delete</button>
                </div>
            ))

            }
           
        </div>
    )
}