import './App.css'
//import CreateUser from "./pages/CreateUser"
import LoginUser from "./pages/Login"
import GroceriesApp from "/GroceriesApp"
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
          </Route>
         
          <Route path="/" element={<LoginUser />} />
          <Route path="NotAuthorized" element={<NotAuthorized />} />
        </Routes>

        {/* <Route path="/register" element={<CreateUser />} /> */}
      </BrowserRouter>
    </>
  )
}

export default App
