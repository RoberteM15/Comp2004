import InventoryCard from "./InventoryCard";
import CartList from "./CartList";
import InventoryForm from "./InventoryForm";
import { useState, useEffect } from "react";
import axios from "axios"

export default function GroceriesApp() {
  //create a function to make the empty product array
  //const emptyProduct = 

  //the use state to create the array needed
  const [cartList, setCartList] = useState([])
  const [products, setProducts] = useState([])
  const [formData, setFormData] = useState({
    id: "",
    productName: "",
    brand: "",
    quantity: "",
    image: "",
    price: "",
  });
  const [responseData, setResponseData] = useState("");
  const [toggleEdit, setToggleEdit] = useState(false)

  //the use effect
  useEffect(() => {
    handleGetProducts();
  }, [responseData])

  //this starts the handler part of the code
  //Get products
  const handleGetProducts = async () => {
    await axios.get("http://localhost:3000/products")
    .then((response) => { setProducts(response.data)
    })
  }

  //Post product
  const handlePostProduct = async (product) => {
    const postProduct = {
      id: product.id,
      productName: product.productName,
      brand: product.brand,
      quantity: product.quantity,
      image: product.image,
      price: product.price
    }
    await axios
    .post("http://localhost:3000/addProduct", postProduct)
    .then(response => setResponseData(<p>{response.data}</p>))
  }

  //making to get the new data to add to database and to the inventory screen
  const handleOnSubmit = (evt) => {
    evt.preventDefault;
    toggleEdit ? handleProductEdit(formData) : handlePostProduct(formData)
    setFormData({
      id: "",
      productName: "",
      brand: "",
      quantity: "",
      image: "",
      price: ""
    })
  }

  //delete a product
  const handleProductDelete = async (product) => {
    const id = product._id
    axios.delete(`http://localhost:3000/product/${id}`)
    .then((response) => setResponseData(<p>{response.data}</p>))
  }
  
  const handleProductEdit = async (product) => {
    const id = product._id
    const editData = {
      id: product.id,
      productName: product.productName,
      brand: product.brand,
      quantity: product.quantity,
      image: product.image,
      price: product.price
    }
    await axios.patch(`http://localhost:3000/product/:${id}`, editData)
    .then((response) => setResponseData(<p>{response.data}</p>))
    .then(setToggleEdit(false))
  }

  const handleToggleEdit = (product) => {
    setFormData(product)
    setToggleEdit(true)
  }

  //add item to cart
  const handleAddToCart = (item) => {
    setCartList((prevList) => {
      console.log(cartList);
      return [...prevList, { ...item, id: crypto.randomUUID() }];
    });
  };

  //empty the cart
  const handleEmptyCart = () => {
    setCartList([]);
  };

  //remove an item from the cart
  const handleRemoveItem = (id) => {
    setCartList((prevList) => {
      return prevList.filter((i) => i.id !== id);
    });
  };

  //onChange handle for changing the inventory
  const handleOnChange = (evt) => {
    const fieldName = evt.target.name
    const fieldValue = evt.target.value
    setFormData((prevData) => {
      return {
        ...prevData,
        id: crypto.randomUUID(),
        [fieldName]: fieldValue, 
      }
    })
  }

  return (
    <>
      <h1>Groceries App</h1>
      {/* adding the form for a new product to be added to the 
      inventory database and inventory screen */}
      <InventoryForm 
        formData={formData} 
        handleOnChange={handleOnChange} 
        handleOnSubmit={handleOnSubmit}
        toggleEdit={toggleEdit}
      />
      {/* giving a response so user knows if something was added
      or not */}
      {responseData}
      <div className="GroceriesApp-Container">
        {/* adding the inventory card to format the product on the
        website */}
        <InventoryCard 
          list={products} 
          onClick={handleAddToCart} 
          handleProductDelete = {handleProductDelete}
          handleToggleEdit={handleToggleEdit}
        />
        <CartList
          cartList={cartList}
          onClickEmpty={handleEmptyCart}
          onClickRemove={handleRemoveItem}
        />
      </div>
    </>
  );
}
