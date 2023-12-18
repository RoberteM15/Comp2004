import axios from "axios"
import { useState } from "react"

export default function CreateUser() {
    const [formData, setFormData] = useState ({
        username: "",
        password: "",
    })

    const [postResponse, setPostResponse] = useState("")

    const handleOnChange = (evt) => {
        const {name, value} = evt.target
        setFormData((prevData) => {
            return {
                ...prevData,
                [name]: value,
            }
        })
    }

    const postToDb = async (user) => {
        const postUser = {...user}
        await axios
        .post("http://localhost:3000/register", postUser)
        .then((response) => setPostResponse(<p>{response.data}</p>))
        
    }

    const postUser = async (evt) => {
        evt.preventDefault();
        postToDb(formData)
        setFormData({
                username: "",
                password: "",
            })
        
    }

    return (
        <div>
            <div className="rounded">
                <h1>Create Account:</h1>
                <form action="" onSubmit={postUser}>
                    <h3 htmlFor="username">Username:</h3>
                    <input type="text" name="username" id="username" onChange={handleOnChange} value={formData.username} required/>
                    <h3 htmlFor="password">Password: </h3>
                    <input type="password" name="password" id="password" onChange={handleOnChange} value={formData.password} required/>
                    <br/> <br/>
                    <button>Submit</button>
                </form>

                <p>Existing member? click <a href="http://localhost:5173/login"> here </a> to login</p>

                {postResponse}
            </div>
        </div>
    )
}