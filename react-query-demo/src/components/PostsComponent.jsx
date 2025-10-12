import React from "react";
import { useQuery } from "@tanstack/react-query";

function PostsComponent() {
  // Fetch function
  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };

  // React Query hook with full destructuring
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  // Loading state
  if (isLoading) return <p>Loading posts...</p>;

  // Error state
  if (isError) return <p style={{ color: "red" }}>Error: {error.message}</p>;

  // Success state
  return (
    <div style={{ padding: "1rem" }}>
      <h2>Posts</h2>
      <button onClick={() => refetch()} style={{ marginBottom: "1rem" }}>
        Refetch Posts
      </button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
