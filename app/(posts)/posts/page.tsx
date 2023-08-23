import { PostType } from "@/type/PostType";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All posts"
}

export default async function page() {
  const postsRef = await fetch("http://localhost:3001/posts",{
    cache:'no-cache',
  });
  const posts = (await postsRef.json()) as [PostType];
  return (
    <main>
      <h1 className="text-4xl">All posts</h1>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>
                <span>{post.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
