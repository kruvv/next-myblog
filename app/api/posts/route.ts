import { NextRequest, NextResponse } from "next/server";
import { posts } from "./posts";

//export const dynamic = "force-static";

export async function GET(req: NextRequest) {
  //const { searchParams } = new URL(req.url);
  const searchParams = req.nextUrl.searchParams
  const query = searchParams.get("q");
  let currentPosts = posts;

  if (query) {
    currentPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase()),
    );
  }

  return NextResponse.json(currentPosts);
}

export async function POST(req: Request) {
  const body = await req.json();
  // console.log(body);
  return NextResponse.json({ body });
}
