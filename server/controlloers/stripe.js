import User from "../models/user";
import Stripe from "stripe";
import queryString from "query-string";

const stripe = Stripe(process.env.STRIPE_SECRET);

export const createConnectAccount = async (req, res) => {
  // 1. find user from db
  const user = await User.findById(req.user._id).exec();
  console.log("USER ===> ", user);
  //2. if user don't have stripe_account_id yet, create now
  if (!user.stripe_account_id) {
    const account = await stripe.accounts.create({
      type: "express",
    });
    console.log("ACCOUNT ===>", account);
    user.stripe_account_id = account.id;
    user.save();
  }
  //3. create login link based on account id (for frontend to complete onboarding)
  let accountLink = await stripe.accountLinks.create({
    account: user.stripe_account_id,
    refresh_url: process.env.STRIPE_REDIRECT_URL,
    return_url: process.env.STRIPE_REDIRECT_URL,
    type: "account_onboarding",
  });
  accountLink = Object.assign(accountLink, {
    "stripe_user[email]": user.email || undefined,
  });
  console.log("URL===>", accountLink.url);
  let link = `${accountLink.url}?${queryString.stringify(accountLink)}`;
  console.log("LIGIN LINK", link);
  res.send(link);
  //  console.log("ACCOUNT LINK", accountLink);
};

const updateDlayDays = async (accountId) => {
  const account = await stripe.accounts.update(accountId, {
    settings: {
      payouts: {
        schedule:{
          delay_days:7,
        }
      },
    },
  });
  return account
};

export const getAccountStatus = async (req, res) => {
  //console.log("GET ACCOUNT STATUS");
  const user = await User.findById(req.user._id).exec();
  const account = await stripe.accounts.retrieve(user.stripe_account_id);
  // console.log("USER ACCOUNT RETRIEVE", account );
  // update delay days
  const updatedAccount = await updateDlayDays(account.id)
  const updatedUser = await User.findByIdAndUpdate(
    user._id,
    {
      stripe_seller: updatedAccount,
    },
    { new: true }
  )
    .select("-password")
    .exec();
  // console.log(updatedUser);
  res.json(updatedUser);
};
