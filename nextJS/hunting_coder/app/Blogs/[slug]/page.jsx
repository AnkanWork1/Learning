import connectToDatabase from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { useState } from "react";

// Server Component
export default async function BlogSlugPage({ params }) {
  const { slug } = params;

  // Connect to MongoDB
  await connectToDatabase();

  // Fetch blog by slug
  const blog = await Blog.findOne({ slug }).lean();

  if (!blog) {
    return (
      <div className="text-white text-center mt-20">
        Blog not found
      </div>
    );
  }

  // We need client-side interactivity for likes, shares, and comments
  return <BlogClient blog={blog} />;
}

// Client Component for interactivity
function BlogClient({ blog }) {
  const [likes, setLikes] = useState(blog.stats.likes);
  const [shares, setShares] = useState(blog.stats.shares);
  const [views, setViews] = useState(blog.stats.views);
  const [comments, setComments] = useState(blog.comments || []);
  const [newComment, setNewComment] = useState("");

  // Like handler
  const handleLike = async () => {
    const res = await fetch(`/api/blogs/${blog.slug}/like`, { method: "POST" });
    const data = await res.json();
    setLikes(data.likes);
  };

  // Share handler
  const handleShare = async () => {
    const res = await fetch(`/api/blogs/${blog.slug}/share`, { method: "POST" });
    const data = await res.json();
    setShares(data.shares);
    alert("Blog link copied to clipboard!");
    navigator.clipboard.writeText(window.location.href);
  };

  // Comment handler
  const handleComment = async () => {
    if (!newComment.trim()) return;
    const res = await fetch(`/api/blogs/${blog.slug}/comment`, {
      method: "POST",
      body: JSON.stringify({ name: "Anonymous", message: newComment }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setComments(data.comments);
    setNewComment("");
  };

  return (
    <div className="min-h-screen bg-black text-green-500 px-10 py-10 max-w-4xl mx-auto">
      <h1 className="text-4xl text-red-500 mb-6">{blog.title}</h1>
      <p className="text-lg mb-6">{blog.content}</p>

      <div className="flex gap-6 mb-6">
        <button onClick={handleLike} className="bg-red-500 px-4 py-2 rounded">
          ❤️ Like ({likes})
        </button>
        <button onClick={handleShare} className="bg-blue-500 px-4 py-2 rounded">
          🔗 Share ({shares})
        </button>
        <span>👁 Views: {views}</span>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl mb-2">Comments</h2>
        <div className="flex gap-2 mb-2">
          <input
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
            className="flex-1 px-2 py-1 text-black rounded"
          />
          <button onClick={handleComment} className="bg-green-500 px-4 py-1 rounded">
            Comment
          </button>
        </div>
        <ul>
          {comments.map((c, i) => (
            <li key={i} className="mb-2 border-b border-gray-700 pb-2">
              <strong>{c.name}:</strong> {c.message}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
