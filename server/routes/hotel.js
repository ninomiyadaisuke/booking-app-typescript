import express from "express";
import formidable from "express-formidable"

const router = express.Router();

import { requireSignin } from "../middlewares";

import { create } from "../controlloers/hotel";

router.post("/create-hotel",requireSignin,formidable(), create);


module.exports = router;
