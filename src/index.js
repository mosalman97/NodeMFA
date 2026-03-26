import express, { urlencoded } from "express"
import session from "express-session"
import passport from "passport"
import dotenv from "dotenv"
import cors from "cors"
import dbConnect from "./config/dbConnect.js"
import authroutes from "./routes/authRoutes.js"

dotenv.config()
dbConnect()

const app = express()


// Middlewares
const corsOptions = {
  origin:["http://localhost:3001"],
  Credential:true
}
app.use(cors(corsOptions))
app.use(express.json({limit:"100mb"}))
app.use(urlencoded({limit:"100mb",extended:true}))
app.use(session({
  secret:process.env.SESSION_SECRET,
  resave:false,
  saveUninitialized:false,
  cookie:{
    maxAge:60000 * 60
  }
}))

app.use(passport.initialize())
app.use(passport.session())

// Routes
app.use("/api/auth",authroutes)

// listen server
const PORT = process.env.PORT || 5002
app.listen(PORT,()=>{
  console.log(`server is running on : ${PORT}`)
})
