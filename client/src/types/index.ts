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
    }
  }
}

// export type userAuth = {
//   auth: (state: string | null | undefined, action: userPayload) => string | {
//     token: string;
//     user: {
//       email: string;
//       name: string;
//       updatedAt: string;
//       _id: string;
//     };
//   } | null|unknown
// }

