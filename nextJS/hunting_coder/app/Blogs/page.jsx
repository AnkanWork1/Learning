import Link from "next/link";
import { blogsMeta } from "../data/blogs";

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-black text-green-500 px-10">
      <h1 className="text-red-500 text-4xl text-center mt-6 mb-12">
        DAILY BLOGS
      </h1>

      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        {blogsMeta.map((blog) => (
          
          <Link
            key={blog.slug}
            href={`/Blogs/${blog.slug}`}
            className="hover:text-green-400"
          >
            <div className="border border-green-700 p-4 rounded">
              <h2 className="text-2xl font-semibold">{blog.title}</h2>
              <p className="text-green-400">{blog.slug}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
