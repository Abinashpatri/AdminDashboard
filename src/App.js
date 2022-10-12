import { Sidebar, Topbar } from "./components";
import './app.css'
import { Home, NewProduct, NewUser, Product, ProductList, User, UserList } from "./pages";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/users" element={<UserList/>} />
            <Route path="/user/:userId" element={<User/>} />
            <Route path="/newUser" element={<NewUser/>} />
            <Route path="/products" element={<ProductList/>} />
            <Route path="/product/:productId" element={<Product/>} />
            <Route path="/newProduct" element={<NewProduct/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
