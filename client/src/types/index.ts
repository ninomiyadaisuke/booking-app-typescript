import React from "react"

export type formProps = {
  name: string
  email: string
  password: string
  setName: React.Dispatch<React.SetStateAction<string>>
  setEmail: React.Dispatch<React.SetStateAction<string>>
  setPassword: React.Dispatch<React.SetStateAction<string>>
  handleSubmit: (e: React.FormEvent) => void
}

export type loginProps = {
  email: string
  password: string
  setEmail: React.Dispatch<React.SetStateAction<string>>
  setPassword: React.Dispatch<React.SetStateAction<string>>
  handleSubmit: (e: React.FormEvent) => void
}


export type createUser = {
  name: string
  email: string
  password: string
}

export type loginUser = {
  email: string
  password: string
}

export type userPayload = {
  type: string
  payload: {
    token: string
    user: {
      email: string
      name: string
      updatedAt: string
      _id: string
    }
    stripe_account_id: string
  }
}

export type userAuth = {
  auth: {
    token: string
    user: {
      email: string
      name: string
      updatedAt: string
      _id: string
      stripe_seller?: {
        charges_enabled?: boolean
      }
    }
  }
}



export type StripeUserAuth = {

}

export type authRoute = {
  exact: boolean
  path: string
  component: React.FC
}

export type clientToSeverToken = {
  token: string
}



// config: {url: "http://localhost:8000/api/get-account-status", method: "post", data: "{}", headers: {…}, transformRequest: Array(1), …}
// data:
// createdAt: "2021-03-30T07:18:40.451Z"
// email: "test@test.com"
// name: "二ノ宮大翼"
// stripe_account_id: "acct_1IbKTe2YHu2nT9Ow"
// stripe_seller: {id: "acct_1IbKTe2YHu2nT9Ow", object: "account", business_profile: {…}, charges_enabled: false, country: "JP", …}
// updatedAt: "2021-04-02T04:33:50.993Z"
// __v: 0
// _id: "6062d0d005d8776266008ad9"
// __proto__: Object
// headers: {content-length: "1807", content-type: "application/json; charset=utf-8"}
// request: XMLHttpRequest {readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, onreadystatechange: ƒ, …}
// status: 200
// statusText: "OK"
// __proto__: Object