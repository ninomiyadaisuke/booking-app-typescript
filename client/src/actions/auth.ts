import axios from "axios"
import { createUser, loginUser } from "../types"

export const register = async (user: createUser) => await axios.post(`${process.env.REACT_APP_API}/register`, user)

export const login = async (user: loginUser) => await axios.post(`${process.env.REACT_APP_API}/login`, user)

type test = {
  key:string
  valu:string
}

export const updateUserInLocalStorage = (user: loginUser, next:any) => {
  if (window.localStorage.getItem("auth")) {
    let auth = JSON.parse(localStorage.getItem("auth") as string)
    auth.user = user
    localStorage.setItem("auth", JSON.stringify(auth))
    next()
  }
}