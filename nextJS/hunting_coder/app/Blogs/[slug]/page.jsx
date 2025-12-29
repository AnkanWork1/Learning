import { blogsMeta } from "../../data/blogs";

export async function generateStaticParams() {
  return blogsMeta.map((blog) => ({
    slug: blog.slug,
  }));
}

// Do NOT use "use client" here
export default async function BlogSlugPage({ params }) {
  // In latest Next.js, params may be a Promise
  const { slug } = await params;

  const blog = blogsMeta.find((b) => b.slug === slug);

  if (!blog) {
    return <div className="text-white text-center mt-20">Blog not found</div>;
  }

  return (
    <div className="min-h-screen bg-black text-green-500 px-10 py-10 max-w-4xl mx-auto">
      <h1 className="text-4xl text-red-500 mb-6">{blog.title}</h1>
      <p className="text-lg">{blog.content}</p>
    </div>
  );
}
