import {Router} from "express"
import Passport from "passport"
import { register,login,logout,setup2FA,verify2FA,authStatus,reset2FA } from "../controllers/authController.js"

const router = Router()

// Register route
router.post("/register",register)

// login route
router.post("/login",login)

// logout route
router.post("/logout",logout)

// 2FA Setup route
router.post("/2fa/setup",setup2FA)

// verify route
router.post("/2fa/verify",verify2FA)

// reset route
router.post("/2fa/reset",reset2FA)

// Auth status route
router.get("/status",authStatus)


export default router
