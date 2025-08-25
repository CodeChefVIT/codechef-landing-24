export const runtime = "edge";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const pageSize = 9;
  try {
    const response = await axios.post(
      "https://gql.hashnode.com/",
      {
        query: `
          query Publication($page: Int!, $pageSize: Int!) {
            publication(host: "blogs.codechefvit.com") {
              postsViaPage(page: $page, pageSize: $pageSize) {
                nodes {
                  title
                  slug
                  coverImage {
                    url
                  }
                  content {
                    html
                  }
                }
                pageInfo {
                  hasNextPage
                  hasPreviousPage
                }
              }
            }
          }
        `,
        variables: {
          page,
          pageSize,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.HASHNODE_KEY}`,
        },
      }
    );

    const posts = response.data.data.publication.postsViaPage;
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    // console.error('Error fetching blogs:', error);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}
