import { userPayload } from "../types"

let userState: string | null

if (window.localStorage.getItem("auth")) {
  userState = JSON.parse(localStorage.getItem("auth") as string)
} else {
  userState = null
}


export const authReducer = (state = userState, action: userPayload) => {
  switch (action.type) {
    case "LOGGED_IN_USER":
      return { ...state as {}, ...action.payload };
    case "LOGOUT":
      return action.payload;
    default:
      return state;
  }
};