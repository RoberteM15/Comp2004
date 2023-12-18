//The imports and definitions
const express =require("express")
const server = express()
const mongoose = require("mongoose")
const {request, response } = require("http")
const User = require("./models/user.js")
const db_uri = "mongodb+srv://robertmatney:database1234@comp1013-cluster.yhuzwhc.mongodb.net/products?retryWrites=true&w=majority"
const port = 3000
const cors = require("cors")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

server.use(express.urlencoded({ extended: false }))
server.use(express.json())
server.use(cors())

mongoose.connect(db_uri).then((result) => {
    server.listen(port, () => {console.log(`Listing on ${port}...\nConnect to DB`)
    })
})
.catch((error) => {console.log(error)})

server.get("/", (request, response) => {
    response.send("LIVE!!!")
})

server.get("/products", async (request, response) => {
    const products = await Product.find()
    response.send(products)
})

server.post("/register", async (request, response) => {
    const {username, password } = request.body
    const postUser =  new User({
        username, 
        password
    })
    postUser.password = postUser.generateHash(password)
    const saveUser = await postUser.save()
    saveUser ? response.send("New User is created") : response.send("Sorry you failed to Create a new User!!")
})


server.post("/login", async (request, response) => {
    const { username, password } = request.body
    const jwtToken = jwt.sign({ id: username }, "token")
    await User.findOne({ username }).then((user) => {
        if (user) {
            bcrypt.compare(password, user.password, (err, res) => {
                if (err) {
                    response.send(err)
                }
                if (res) {
                    response.send({ message: "Successful Login", token: jwtToken })
                }
                else {
                    response.send({ message: "Bad Authentication" })
                }
            })
        }
        else {
            response.send({ message: "Username or Password does not exist" })
        }
    })
})