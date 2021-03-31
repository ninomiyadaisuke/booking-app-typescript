import axios from "axios"
import { createUser,loginUser } from "../types"

export const register = async (user: createUser) => await axios.post(`${process.env.REACT_APP_API}/register`, user)

export const login = async (user: loginUser) => await axios.post(`${process.env.REACT_APP_API}/login`, user)