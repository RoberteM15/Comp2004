//crated a function to format the look for each item in the cart.
export default function CartList({ id, productName, price, removeItem}) {

    

    return (

        //this shows what to display for each product in the cart.
        <div className="CartList-Card">
            <h3>{productName}</h3>
            <h4>{price}</h4>
        <p>
            {/* should be the button to delete the items in the cart one at a time */}
            <button className="CartList-Buttons" onClick={() => removeItem(id)}
            >Remove</button>
        </p>
       </div>
   );
    
}