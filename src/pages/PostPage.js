import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function PostPage() {
    const { id } = useParams();
    const [postInfo, setPostInfo] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userInfo, setUserInfo] = useState(null);
    

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await fetch('http://localhost:4000/profile', {
                    credentials: 'include',
                });
                if (response.ok) {
                    const data = await response.json();
                    setUserInfo(data);
                }
            } catch (err) {
                console.error('Error fetching user info:', err);
            }
        };

        fetchUserInfo();
    }, []);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`http://localhost:4000/post/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch post');
                }
                const data = await response.json();
                setPostInfo(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-xl text-gray-600">Loading...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-xl text-red-600">{error}</div>
            </div>
        );
    }

    if (!postInfo) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-xl text-gray-600">Post not found</div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6 text-gray-900">{postInfo.title}</h1>
            
            <div className="mb-8">
                {postInfo.cover && (
                    <img 
                        src={`http://localhost:4000/uploads/${postInfo.cover}`} 
                        alt={postInfo.title}
                        className="w-full h-96 object-cover rounded-lg shadow-lg"
                    />
                )}
            </div>
            
            <div className="flex items-center gap-4 mb-8 text-gray-600">
                <div className="font-medium">
                    By {postInfo.author?.email || 'Anonymous'}
                </div>

                {/* edit post */}
                {userInfo?.id === postInfo.author?._id && (
                    <div className="flex items-center gap-2">
                        <Link 
                            to={`/edit/${postInfo._id}`}
                            className="text-blue-500 hover:text-blue-600"
                        >
                            Edit Post
                        </Link>
                    </div>
                )}
                <time className="text-sm">
                    {formatDate(postInfo.createdAt)}
                </time>
            </div>

            <div className="prose max-w-none">
                <div 
                    className="text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: postInfo.content }}
                />
            </div>
        </div>
    );
}
