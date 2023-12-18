import './App.css'
import CreateUser from "./pages/CreateUser"
import LoginUser from "./pages/LoginUser"
import GroceriesApp from "./GroceriesApp"
import AddProduct from "./pages/AddProduct"
import EditProduct from "./pages/EditProduct"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import PrivateRoutes from './utilites/PrivateRoutes'
import NotAuthorized from './pages/NotAuthorized'

function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
          <Route path="/main" element={<GroceriesApp />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/editProduct" element={<EditProduct />} />
          </Route>
         
          <Route path="/" element={<LoginUser />} />
          <Route path="/register" element={<CreateUser />} />
          <Route path="NotAuthorized" element={<NotAuthorized />} />
        </Routes>

        {/* <Route path="/register" element={ */}
      </BrowserRouter>
    </>
  )
}

export default App
