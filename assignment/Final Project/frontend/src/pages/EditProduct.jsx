import axios from "axios";
import { useEffect, useState } from "react";

import InventoryForm from "../InventoryForm";
//import { response } from "express";

//const EditProduct = () => {
export default function EditProduct() {
   
       const [formData, setFormData] = useState({
        id: "",
        productName: "",
        brand: "",
        quantity: "",
        image: "",
        price: "",
        });
     
    const[postResponse, setPostResponse] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:3000/products/${id}`)
        .then((response) => setFormData(response.data))
        .catch((error) => console.error(error));
    }, [Id]);

    const handleOnChange =(e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleOnSubmit = async (evt) => {
        evt.preventDefault();
        setPostResponse("");
        await handleEditProduct(formData);
        window.location.href = '/main';
    }

    const handleEditProduct = async (product) => {
        const id = product.id;
        const postData = {
            id: product.id,
            productName: product.productName,
             brand: product.brand,
              quantity: product.quantity,
            image: product.image,
            price: product.price,
        };
        try {
            const response = await axios.patch(`http://localhost:3000/products/${id}`, postData);
            setPostResponse(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Edit Product</h1>
      <InventoryForm
        handleOnChange={handleOnChange}
        formData={formData}
        handleOnSubmit={handleOnSubmit}
        toggleEdit={true} 
      />
      {postResponse && <p>{postResponse}</p>}
      {}
      <button onClick={() => window.location.href = '/main'}>Back to Inventory</button>
    </div>
  );
  };