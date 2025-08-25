"use client";
export const runtime = "edge";

import BlogCard from "@/components/BlogCard";
import Ripple from "@/components/Ripple";
import RippleStatic from "@/components/RipplestStatic";
import Spinner from "@/components/ui/Spinner";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Post {
  title: string;
  coverImage: {
    url: string;
  };
  slug: string;
  content: {
    html: string;
  };
}

export default function Blog() {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [hasPreviousPage, setHasPreviousPage] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const searchParams = useSearchParams();
  const limit = 9;

  const page = parseInt(searchParams.get("page") || "1", 10);

  const truncateContent = (html: string, wordLimit: number) => {
    const plainText = html.replace(/<[^>]+>/g, "");
    const words = plainText.split(/\s+/);
    return (
      words.slice(0, wordLimit).join(" ") +
      (words.length > wordLimit ? "..." : "")
    );
  };

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/blog?page=${page}`);
        if (!response.ok) throw new Error("Failed to fetch posts.");
        const data = await response.json();
        if (data?.nodes) {
          setPosts(data.nodes);
          setHasNextPage(data.pageInfo?.hasNextPage || false);
          setHasPreviousPage(data.pageInfo?.hasPreviousPage || false);
        } else {
          setPosts([]);
        }
      } catch (err) {
        setPosts(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [page]);

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());
    router.push(`/blog?${params.toString()}`);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-black">
        <Spinner color="#FF3B00" />
      </div>
    );
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="text-white text-center py-10">No posts available.</div>
    );
  }

  return (
    <div className="bg-transparent text-white px-6  mt-8">
      <Ripple />
      <RippleStatic duration={7000} />

      <h1 className="text-white font-semibold font-enigma text-4xl text-center md:text-5xl lg:text-[128px] pt-5">
        BLOGS
      </h1>
      <div className="text-black">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 px-4 py-8">
          {posts.map((post) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              description={truncateContent(post.content.html, 20)}
              image={post.coverImage?.url || ""}
              slug={post.slug}
            />
          ))}
        </div>
        <div className="flex justify-center items-center space-x-4 mt-6 font-enigma">
          <button
            onClick={() => handlePageChange(page - 1)}
            className={`w-36 px-4 py-2 bg-slate-50 rounded text-black hover:bg-[#FF3B00] hover:text-white opacity-75 ${
              !hasPreviousPage ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={!hasPreviousPage}
            aria-label="Previous Page"
          >
            Previous
          </button>
          <button
            onClick={() => handlePageChange(page + 1)}
            className={`w-36 px-4 py-2 bg-slate-50 rounded text-black hover:bg-[#FF3B00] hover:text-white opacity-75 ${
              !hasNextPage ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={!hasNextPage}
            aria-label="Next Page"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
