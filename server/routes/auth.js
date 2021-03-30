import express from "express"
import { showMessage,register } from "../controlloers/auth"

const router = express.Router()

router.get("/:message", showMessage)
router.post("/register", register)

module.exports = router