export const createConnectAccount = async (req, res) => {
  console.log(
    "REQ USER FROM REQIRE_SIGNIN MIDDLEWARE",
    req.user
  );
  console.log("YOU HIT CREATE CONNECT ACCOUNT ENDPOINT");
};
