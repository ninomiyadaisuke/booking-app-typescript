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

export type authRoute = {
  exact: boolean
  path: string
  component: React.FC
}

export type clientToSeverToken = {
  token: string
}

export type bPending = {
  amount: number;
  currency: string;
  source_types: {
    card: number;
  };
}


export type balance = {
  pending: [bPending];
}

export type hotelRegistration = {
  title: string;
  content: string;
  image?: File | null|string;
  price: string;
  from: string;
  to: string;
  bed: string;
};

export type locationValue = {
  suggestion: {
    value: string;
  };
};

export type hotelFormProps = {
  values: hotelRegistration;
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  setValues: React.Dispatch<React.SetStateAction<hotelRegistration>>;
};


export type allHotels = {
  bed:number
  content:string
  createdAt:string
  from:string
  image:{
    contentType:string
  }
  location:string
  price:number
  title:string
  to:string
  updatedAt:string
  __v:number
  _id:string
  __proto__: Object
}

export type allHotelsProps = {
  h:allHotels
}

// {image: {…}, _id: "606d0e65ad02516f649b6dc1", title: "記事内広告", content: "tw", location: "艦砲穴, 知念, 沖縄県, 日本", …}
// bed: 2
// content: "tw"
// createdAt: "2021-04-07T01:44:05.929Z"
// from: "2021-04-07T00:00:00.000Z"
// image: {contentType: "image/jpeg"}
// location: "艦砲穴, 知念, 沖縄県, 日本"
// price: 1234
// title: "記事内広告"
// to: "2021-04-09T00:00:00.000Z"
// updatedAt: "2021-04-07T01:44:05.929Z"
// __v: 0
// _id: "606d0e65ad02516f649b6dc1"
// __proto__: Object