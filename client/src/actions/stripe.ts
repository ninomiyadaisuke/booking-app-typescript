import axios from "axios"
import {bPending} from "../types"

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

export const getAccountBalance = async (token: string) => axios.post(`${process.env.REACT_APP_API}/get-account-balance`, {}, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
})


export const currencyFormatter = (data:bPending) => {
  return (data.amount / 100).toLocaleString(data.currency, {
    style: "currency",
    currency: data.currency,
  })
}


export const payoutSetting = async (token:string) => await axios.post(`${process.env.REACT_APP_API}/payout-setting`,{}, {
  headers:{
    Authorization: `Bearer ${token}`
  }
})

