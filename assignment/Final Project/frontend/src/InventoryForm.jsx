import { useEffect } from "react"
import { useForm} from "react-hook-form"
import { useNavigate } from "react-router-dom"

//created a function Inventory form to allow an product to be add to the inventory
export default function InventoryForm({
    formData, 
    handleOnChange, 
    handleOnSubmit,
    toggleEdit
}) {
    const {id} = formData
    const {register, handleSubmit, formState: {errors}, reset} = useForm({
        defaultValues: id ? formData : 
        {
            id: "Default",
            productName: "Default",
            brand: "Default",
            quantity: "Default",
            image: "Default",
            price: "Default"
    }})
    
    useEffect(() => reset(formData), [toggleEdit])

    const navigate = useNavigate()

    const addProduct = () => {
        navigate("/addProduct")
    }

    return (
        <div>
            {/* created a form to add new products to the database and inventory */}
            <form action="" onSubmit={ handleSubmit(handleOnSubmit) }>
                <div>
                    {/* <label htmlFor="productName">Product Name</label>
                    <input
                        type="text"
                        {...register("productName", {required: "Please enter a valid product name. Thanks"})}
                        id="productName"
                        onChange={handleOnChange}
                        value={formData.productName}
                    />
                    <span>{errors.productName?.message}</span>
                </div>
                <div>
                    <label htmlFor="brand">Brand</label>
                    <input 
                        type="text"
                        {...register("brand", {required: "Please enter a valid brand. Thanks"})}
                        id="brand"
                        onChange={handleOnChange}
                        value={formData.brand}
                    />
                    <span>{errors.brand?.message}</span>
                </div>
                <div>
                    <label htmlFor="quantity">Quantity</label>
                    <input 
                        type="text"
                        {...register("quantity", {required: "Please enter a valid quantity. Thanks"})}
                        id="quantity"
                        onChange={handleOnChange}
                        value={formData.quantity}
                    />
                    <span>{errors.quantity?.message}</span>
                </div>
                <div>
                    <label htmlFor="image">Image URL</label>
                    <input 
                        type="text"
                        {...register("image", {required: "Please enter a valid image url. Thanks"})}
                        id="image"
                        onChange={handleOnChange}
                        value={formData.image}
                    />
                    <span>{errors.image?.message}</span>
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input 
                        type="text"
                        {...register("price", {required: "Please enter a valid price. Thanks"})}
                        id="price"
                        onChange={handleOnChange}
                        value={formData.price}
                    /> */}
                    <span>{errors.price?.message}</span>
                </div>
                <button onClick={addProduct}>Add to Inventory</button>
            </form>
        </div>
    )
}