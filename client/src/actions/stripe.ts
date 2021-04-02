import axios from "axios"

export const createConnectAccount = async (token: string) => await axios.post(`${process.env.REACT_APP_API}/create-connect-account`, {},
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

export const getAccountStatus = async (token: string) => axios.post(`${process.env.REACT_APP_API}/get-account-status`, {}, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
})