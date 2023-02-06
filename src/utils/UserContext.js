import { createContext } from "react";

const UserContext = createContext({
  user: {
    contactNo: "",
    email: "",
    password: "",
    isUserLoggedIn: false,
  },
});

UserContext.displayName = "UserContext";

export default UserContext;
