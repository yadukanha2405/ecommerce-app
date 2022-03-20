import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css';
import Nav from "./Nav";
import Product from "./Product";
import ProductList from "./ProductList";
import User from "./User";
import UserList from "./UserList";


function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<User/>} />
        <Route path="/user-list" element={<UserList/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/product-list" element={<ProductList/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
