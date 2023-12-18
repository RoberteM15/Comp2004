import axios from "axios"
import { useState } from "react"
import { useNavigate} from "react-router-dom"
import Cookies from "js-cookie"

export default function LoginUser() {
    const [formData, setFormData] = useState ({
        username: "",
        password: "",
    })

    const [postResponse, setPostResponse] = useState("")

    const [jwtCookie, setJwtCookie] = useState("")

    const navigate = useNavigate()

    const makeCookie = (cookie) => {
        Cookies.set("jwt-cookie", cookie)
    }

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
        .post("http://localhost:3000/login", postUser)
        .then((response) => {
            setPostResponse(response.data.message)
            if(response.data.message == "Successful Login") {
                const jwtCookie = makeCookie(response.data.token)
                setJwtCookie(jwtCookie)
                navigate("/main")
            }
        })
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
                <h1>Groceries App:</h1>
                <form action="" onSubmit={postUser}>
                    <h3 htmlFor="username">Username:</h3>
                    <input type="text" name="username" id="username" onChange={handleOnChange} value={formData.username} required/>
                    <h3 htmlFor="password">Password: </h3>
                    <input type="password" name="password" id="password" onChange={handleOnChange} value={formData.password} required/>
                    <br/> <br/>
                    <button>Login</button>
                </form>

                <p>Not a member yet? Click <a href="http://localhost:5173/register"> here </a> to join.</p>

                {<p>{postResponse}</p>}
            </div>
        </div>
    )
}