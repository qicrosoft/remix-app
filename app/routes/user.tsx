import { Link } from "@remix-run/react";
import { useEffect } from "react";

function User() {
  console.log("User render");
  useEffect(() => {
    let flag = false;

    async function fetchFoo() {
      await fetch("/posts");
      if (!flag) {
        console.log("useEffect execute");
      }
    }

    fetchFoo();

    return () => {
      flag = true;
      console.log("flag => true");
    };
  }, []);

  return (
    <div>
      <h1>User</h1>
      <Link to="/">Home</Link>
    </div>
  );
}

export default User;
