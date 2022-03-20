import NavList from "./NavList";
import "./index"

export default function Nav(){
    return(
        <div className="nav">
            <div className="nav-item">
            <NavList title= "USER" link="/" />
            <NavList title= "USER-LIST" link="/user-list" />
            <NavList title= "PRODUCT" link="/product" />
            <NavList title= "PRODUCT-LIST" link="/product-list" />
            </div>
        </div>
    )
}