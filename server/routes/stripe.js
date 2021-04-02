import express from "express";

const router = express.Router();

import { requireSignin } from "../middlewares";

import { createConnectAccount, getAccountStatus } from "../controlloers/stripe";

router.post("/create-connect-account", requireSignin, createConnectAccount);
router.post("/get-account-status", requireSignin, getAccountStatus);

module.exports = router;
