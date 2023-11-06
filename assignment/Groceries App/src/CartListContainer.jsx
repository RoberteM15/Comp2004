//imported CartLisst to set up the format to display what is in the cart
import CartList from "./CartList.jsx";
//crated a function to get the correct data from products to be able to display in the cart
export default function CartListContainer( {newCartArray, removeItem} ) {
    
    

    return (
        //created an array map so that it could hold each product and the variable wanted in each cart.
        <div className = "CartList-Container">
            {newCartArray.map((id) => (
                <CartList key={id.id}  
                    productName={id.productName}
                    price = {id.price}
                    removeItem = {removeItem}
                    />
            ))};
        </div>
    );
} 