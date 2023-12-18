// import InventoryCard from "./InventoryCard"
// import CartList from "./CartList"
// import InventoryFrom from "./InventoryForm"
// import { useState, useEffect } from "react"
// import axios from "axios"
import Cookies from "js-cookies"
import { useNavigate } from "react-router-dom"

export default function GroceriesApp() {

    // //the use State to create the arrays needed
    // const [cartList, setCartList] = useState([])
    // const [products, setProducts] = useState([])
    // const [formData, setFormData] = useState({
    //     id: "",
    //     productName: "",
    //     brand: "",
    //     quantity: "",
    //     image: "",
    //     price: "",
    // })
    // const [responseData, setResponseData] = useState("")
    // const [toggleEdit, setToggleEdit] = useState(false)

    // //the use effect
    // useEffect(() => {
    //     handleGetProduct();
    // }, [responseData])

    // //starts the handler part of the code
    // //Get Products
    // const handleGetProducts = async() => {
    //     await axios.get("http://localhost:3000/products")
    //     .then((response) => { setProducts(response.data)
    //     })
    // }

    // //Post Product
    // const handlePostProduct = async (product) => {
    //     const postProduct = {
    //         id: product.id,
    //         productName: product.productName,
    //         brand: product.brand,
    //         quantity: product.quantity,
    //         image: product.image,
    //         price: product.price
    //     }
    //     await axios
    //     .post("http://localhost:3000/addProduct", postProduct)
    //     .then(response => setResponseData(<p>{response.data}</p>))
    // }

    // //delete a product
    // const handleProductDelete = async (product) => {
    //     const id = product._id
    //     axios.delete(`http://localhost:3000/product/${id}`)
    //     .then((response) => setResponseData(<p>{response.data}</p>))
    // }

    // //edit a product
    // const handleProductEdit = async (product) => {
    //     const id = product._id
    //     const editData = {
    //         id: product.id,
    //         productName: product.productName,
    //         brand: product.brand,
    //         quantity: product.quantity,
    //         image: product.image,
    //         price: product.price
    //     }
    //     await axios.patch(`http://localhost:3000/product/:${id}`, editData)
    //     .then((response) => setResponseData(<p>{response.data}</p>))
    // }

    // //add to item to cart
    // const handleAddToCart = (item) => {
    //     setCartList((prevList) => {
    //         console.log(cartList)
    //         return [...prevList, {item, id: crypto.randomUUID() }]
    //     })

    // }

    // //empty the cart
    // const handleEmptyCart = () => {
    //     setCartList([])
    // }

    // //removed an item from the cart
    // const handleRemoveItem = (id) => {
    //     setCartList((prevList) => {
    //         return prevList.filter((i) => i.id !== id)
    //     })
    // }

    // //onChange handle for changing the inventory
    // const handleOnChange = (evt) => {
    //     const fieldName = evt.target.name
    //     const fieldValue = evt.target.value
    //     setFormData((prevData) => {
    //         return {
    //             ...prevData,
    //             id: crypto.randomUUID(),
    //             [fieldName]: fieldValue
    //         }
    //     })
    // }

    const navigate = useNavigate()

    const logout = () => {
        Cookies.remove("jwt-cookie")
        navigate("/")
    }

    return (
        <>
            <h1>Groceries App</h1>
            {/* <div>
                <InventoryCard
                    list={products}
                    onClick={handleAddToCart}
                    handleProductDelete={handleProductDelete}
                    handleToggleEdit={handleToggleEdit}
                />
                <CartList
                    cartList={cartList}
                    onClickEmpty={handleEmptyCart}
                    onClickRemove={handleRemoveItem}
                />
            </div> */}
            <button onClick={logout}>Logout</button>
        </>
    )
}