// {type: "LIG_IN_USER", payload: {name: "Ninomiya", role: "Seller"}}
export const authReducer = (state = {name:"nino",role:"admin"}, action:any) => {
  switch (action.type) {
    case "LOG_IN_USER":
      return { ...state, ...action.payload };
    case "LOGOUT":
      return action.payload;
    default:
      return state;
  }
};