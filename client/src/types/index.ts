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
