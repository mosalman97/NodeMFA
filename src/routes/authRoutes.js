import {Router} from "express"
import Passport from "passport"

const router = Router()

// Register route
router.post("/register",register)


// login route
router.post("/login",login)

// Auth status route
router.get("/status",authStatus)

// logout  route