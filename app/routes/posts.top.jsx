import { useState } from "react";

function PostsTop() {
  console.log("posttop render");
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Top {count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </>
  );
}

export default PostsTop;
