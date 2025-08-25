import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
export const runtime = "edge";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  if (!slug) {
    return NextResponse.json(
      { error: "Invalid or missing slug" },
      { status: 400 }
    );
  }

  try {
    const response = await axios.post(
      "https://gql.hashnode.com",
      {
        query: `
          query PostBySlug {
            publication(host: "blogs.codechefvit.com") {
              post(slug: "${slug}") {
                title
                subtitle
                publishedAt
                updatedAt
                readTimeInMinutes
                tags {
                  name
                }
                content {
                  html
                }
                coverImage {
                  url
                }
                author{
                  name
                }
              }
            }
          }
        `,
      },
      {
        headers: {
          Authorization: process.env.NEXT_PUBLIC_HASHNODE_KEY,
        },
      }
    );

    const post = response.data.data.publication?.post;

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error("Error fetching post:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
