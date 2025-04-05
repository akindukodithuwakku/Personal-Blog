import React from 'react'

function Post() {
  return (
    <div className="container">
      <div className="image">
        <img
          src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
          alt="blog"
        />
      </div>
      <div className="text">
        <h2>Welcome to BBlog</h2>
        <p className="info">
          <a className="author"> Akindu Kodithuwakku</a>
          <time>2024-9-3</time>
        </p>
        <p className="summary">
          BBlog is a simple blogging platform where you can write and share your
          thoughts.
        </p>
      </div>
    </div>
  );
}

export default Post