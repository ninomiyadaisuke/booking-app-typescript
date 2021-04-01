import axios from "axios"

export const createConnectAccount = async (token:string) => await axios.post(`${process.env.REACT_APP_API}/create-connect-account`, {},
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })