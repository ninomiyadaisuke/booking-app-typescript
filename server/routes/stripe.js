import express from "express";

const router = express.Router();


import { requireSignin } from "../middlewares";

import { createConnectAccount } from "../controlloers/stripe";

router.post("/create-connect-account", requireSignin, createConnectAccount);

module.exports = router;
