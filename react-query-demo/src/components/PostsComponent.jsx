import React from "react";
import { useQuery } from "@tanstack/react-query";

function PostsComponent() {
  // Fetch posts from API
  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };

  // React Query with advanced options
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    cacheTime: 1000 * 60 * 5, // 5 minutes cache
    staleTime: 1000 * 30, // data considered fresh for 30s
    refetchOnWindowFocus: false, // prevent refetch when window refocuses
    keepPreviousData: true, // keep old data while fetching new
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p style={{ color: "red" }}>Error: {error.message}</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Posts (React Query Caching Demo)</h2>

      <button
        onClick={() => refetch()}
        style={{
          marginBottom: "1rem",
          padding: "0.5rem 1rem",
          backgroundColor: "#ff007f",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        {isFetching ? "Refreshing..." : "Refetch Posts"}
      </button>

      <ul>
        {data.map((post) => (
          <li key={post.id} style={{ marginBottom: "1rem" }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
