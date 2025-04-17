import React, { useEffect, useState } from "react";
import Post from "../components/Post";

function IndexPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/post`
        );
        if (response.ok) {
          const postsData = await response.json();
          setPosts(postsData);
        } else {
          console.error('Failed to fetch posts');
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      {posts.length > 0 ? (
        posts.map(post => (
          <Post key={post._id} {...post} />
        ))
      ) : (
        <div className="text-center text-gray-500 mt-8">
          No posts available. Create your first post!
        </div>
      )}
    </div>
  );
}

export default IndexPage;
