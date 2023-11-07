//imported CartLisst to set up the format to display what is in the cart
import CartList from "./CartList.jsx";
//crated a function to get the correct data from products to be able to display in the cart
export default function CartListContainer( { newCartArray, deleteItem, emptyCart} ) {
    
    

    return (
        //created an array map so that it could hold each product and the variable wanted in each cart.
        <div className = "CartList-Container">
            <div>
            {newCartArray.map((id) => (
                <CartList key={id.id}
                    id = {id.id}
                    productName={id.productName}
                    price = {id.price}
                    deleteItem = {deleteItem}
                    />
            ))}
            <div className="CartList-Buttons">
                {/* should be the button to delete the items in the cart one at a time */}
                <button className="Remove-Button" onClick={() => emptyCart(0)}
                >Empty</button>
                <button id="Buy-Button" onClick={() => newCartArray.price}>Buy-Total: {newCartArray.price} </button>
            </div>
            </div>
        </div>
    );
} 