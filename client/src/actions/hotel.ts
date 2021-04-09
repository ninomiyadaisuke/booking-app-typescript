import axios from "axios"

export const createHotel = async (token: string, data: any) => await axios.post(`${process.env.REACT_APP_API}/create-hotel`, data, {
  headers: {
    Authorization: `Bearer ${token}`,
  }
})

export const getallHotels = async () => await axios.get(`${process.env.REACT_APP_API}/hotels`)

export const diffDays = (from: string, to: string) => {
  const day = 24 * 60 * 60 * 1000
  const start: any = new Date(from)
  const end: any = new Date(to)
  const difference = Math.round(Math.abs(start-end) / day)
  return difference
}

export const sellerHotels = async (token:string) => axios.get(`${process.env.REACT_APP_API}/seller-hotels`, {
  headers:{
    Authorization: `Bearer ${token}`
  }
})