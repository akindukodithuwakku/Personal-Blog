import React from 'react';
import { Link } from 'react-router-dom';

function Post({ title, summary, cover, content, author, createdAt, _id }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          {cover && (
            <img
              className="h-48 w-full object-cover md:w-48"
              src={`http://localhost:4000/uploads/${cover}`}
              alt={title}
            />
          )}
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">
            {author?.email || 'Anonymous'}
          </div>
          <Link to={`/post/${_id}`} className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
            {title}
          </Link>
          <p className="mt-2 text-gray-500">
            {summary}
          </p>
          <div className="mt-4">
            <span className="text-sm text-gray-500">
              {formatDate(createdAt)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;