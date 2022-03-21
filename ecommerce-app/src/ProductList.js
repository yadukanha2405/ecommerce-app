import { useSelector } from "react-redux"

export default function ProductList(){
    const productData = useSelector((list)=> list?.product)
    return (
        <div>
            <h1>ProductList Componennt</h1>
            {productData?.map((item)=>(
                <h1> {item?.product} </h1>
            ))}
        </div>
    )
}