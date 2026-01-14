async function getBlogs() {
  const res = await fetch("http://localhost:3000/api/blogs", {
    cache: "no-store",
  });
  return res.json();
}

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <div className="min-h-screen bg-black text-green-500 px-10">
      <h1 className="text-red-500 text-4xl text-center mt-6 mb-12">
        DAILY BLOGS
      </h1>

      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        {blogs.map((blog) => (
          <a
            key={blog.slug}
            href={`/blogs/${blog.slug}`}
            className="border border-green-700 p-4 rounded hover:text-green-400"
          >
            <h2 className="text-2xl">{blog.title}</h2>
            <p>{blog.description}</p>
            <p>👁 {blog.stats.views}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
