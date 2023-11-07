//imported the Inventory card to format the container
import InventoryCards from "./InventoryCards.jsx";
//created a function to grab the information and send data to GroceriesApp to display the products.
export default function InventoryCardsContainer({products, addCart}) {
    return (
        //used the div to bring in the css for the inventory container
        <div className="Inventory-Container">
            {/* the lines in the div are creating an array map so that it can bring in each product object and 
            list all of the variables for that object as it is set up in the css. */}
            {products.map((id) => (
                <InventoryCards key={id.id}
                    image = {id.image}    
                    productName = {id.productName}
                    brand = {id.brand}
                    quantity = {id.quantity}
                    price = {id.price}
                    addCart = {addCart}
                    />
            ))}
        </div>
    )
}