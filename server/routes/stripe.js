import express from "express";
const router = express.Router();

import { requireSignin } from "../middleware";

import { createConnectAccount } from "../controlloers/stripe";

router.post("/create-connect-account", requireSignin, createConnectAccount);

module.exports = router;
