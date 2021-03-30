import axios from "axios"
import { createUser } from "../types"

export const register = async (user: createUser) => await axios.post(`${process.env.REACT_APP_API}/register`, user)

export const login = async (user: createUser) => await axios.post(`${process.env.REACT_APP_API}/login`, user)