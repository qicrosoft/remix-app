import { Link, Outlet } from "@remix-run/react";

function Posts() {
  return (
    <div>
      <h1>Posts</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/posts/top">Top</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Posts;
