import { useState } from "react";

export default function useAuth() {
  let user = localStorage.getItem("authedUser");
  if (user !== null) user = JSON.parse(user);
  const [authedUser, setAuthedUser] = useState(user);

  function setAuth(user) {
    // if logout
    if (user === null) {
      localStorage.removeItem("authedUser");
    } else {
      localStorage.setItem("authedUser", JSON.stringify(user));
    }

    setAuthedUser(user);
  }

  return [authedUser, setAuth];
}
