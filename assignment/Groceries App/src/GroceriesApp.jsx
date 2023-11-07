//bringing in useState to use for the newCartArray
import { useState } from "react";
//getting the database for all of the files to use
import { products } from "./products.js";
//importing the Inventory Container to show all the products on the screen
import InvetoryCardsContainer from "./InventoryCardsContainer.jsx";
//getting the Cart Container to show the what is in the cart.
import CartListContainer from "./CartListContainer.jsx";

//created a function so that we could see all the data to the App.jsx file
export default function GroceriesApp() {
    
    const [items, setItems] = useState([]);
    
    //this is uses a function to create and add stuff to an array for the cart list
    function addCart(item) {
        return setItems((prevItems) => [
            ...prevItems, {...item, id: crypto.randomUUID() },
        ]);
    }
    
    const removeItem = (id) => {
        setItems((prevCart) => prevCart.filter((i) => i.id !== id));
    };

    const emptyCart = () => {
        setItems(addCart.length = 0);
    }

    return (
        //this div allows it to find the css to set up the inventory and cart next to each other
        <div className="GroceriesApp-Container">
        {/* calling the inventory container to get the products to print out */}
        <InvetoryCardsContainer products = {products} addCart = {addCart}/> 
        {/* ternary operator to figure out if the cart is empty or not and also call the cart container to display the cart
        list */}
        {(items.length === 0) ? <h2>Your Cart Is Empty!</h2> : 
        <CartListContainer newCartArray = {items} deleteItem = {removeItem} emptyCart = {emptyCart}/>}
        </div>
    )
}
