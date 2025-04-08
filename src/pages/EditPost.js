import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
    toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ color: [] }, { background: [] }],
        [{ font: [] }],
        [{ align: [] }],
        ['clean'],
        ['link', 'image', 'video'],
    ],
};

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet',
    'color', 'background', 'font', 'align',
    'link', 'image', 'video',
];

export default function EditPost() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`http://localhost:4000/post/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch post');
                }
                const data = await response.json();
                setTitle(data.title);
                setSummary(data.summary);
                setContent(data.content);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const formData = new FormData();
        formData.set('title', title);
        formData.set('summary', summary);
        formData.set('content', content);
        if (file) {
            formData.set('file', file);
        }

        try {
            const response = await fetch(`http://localhost:4000/post/${id}`, {
                method: 'PUT',
                body: formData,
                credentials: 'include',
            });

            if (response.ok) {
                navigate(`/post/${id}`);
            } else {
                const data = await response.json();
                setError(data.error || 'Failed to update post');
            }
        } catch (err) {
            setError('An error occurred while updating the post');
            console.error('Update post error:', err);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-xl text-gray-600">Loading...</div>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Edit Post</h2>
            
            {error && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
                    {error}
                </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <input
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    placeholder="Summary"
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    required
                />
                <input
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    accept="image/*"
                />

                <div className="border border-gray-300 rounded-lg overflow-hidden">
                    <ReactQuill
                        theme="snow"
                        value={content}
                        onChange={newValue => setContent(newValue)}
                        modules={modules}
                        formats={formats}
                        className="h-64"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-lg font-medium transition duration-200"
                >
                    Update Post
                </button>
            </form>
        </div>
    );
}
