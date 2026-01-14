import { NextResponse } from "next/server";
import Blog from "@/models/Blog";
import connectToDatabase from "@/lib/mongodb";

export async function GET() {
  await connectToDatabase();
  const blogs = await Blog.find({}, "slug title description author stats");
  return NextResponse.json(blogs);
}

export async function POST(req) {
  await connectToDatabase();
  try {
    const body = await req.json(); // parse JSON body
    const blog = await Blog.create(body);
    return NextResponse.json(blog);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
