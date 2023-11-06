//created a function so that I can format how each product will look when it is displayed.
export default function InventoryCards({image, productName, brand, quantity, price, addCart}) {

    const item = {productName, price };

    return (
        <div className="Inventory-Card">
            {/* formatting for each product that is showing on the screen */}
            <img src={image} alt=""/>
            <h3 id="productName">{productName}</h3>
            <h3 id="brand">{brand}</h3>
            <h4 id="quantity">{quantity}</h4>
            <h4 id="price">{price}</h4>
            {/* the button to allow you to add each product to the cart one at a time and give it a random id */}
            <button onClick = {() => addCart(item)}>Add to cart</button>
        </div>
    );
}