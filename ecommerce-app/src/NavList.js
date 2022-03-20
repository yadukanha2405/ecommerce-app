import { useNavigate } from "react-router-dom"

export default function NavList({title, link}){
    const navigate = useNavigate();
    const navChanger = ()=>{
        navigate(link)
    }
    return(
        <div onClick={navChanger} >
            <p  className="item"> {title} </p>
        </div>
    )
}