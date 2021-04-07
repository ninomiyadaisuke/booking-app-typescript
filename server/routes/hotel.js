import express from "express";
import formidable from "express-formidable";

const router = express.Router();

import { requireSignin } from "../middlewares";

import { create, hotels } from "../controlloers/hotel";

router.post("/create-hotel", requireSignin, formidable(), create);
router.get("/hotels", hotels);

module.exports = router;
