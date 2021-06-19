import { useEffect } from "react";

import { getUsers } from "../../api";

function LogIn() {
  useEffect(() => {
    getUsers()
      .then((data) => console.log(data))
      .catch((e) => console.log(e.message))
      .finally(() => console.log("final block"));
  }, []);
  return <div>Home page here</div>;
}

export default LogIn;
