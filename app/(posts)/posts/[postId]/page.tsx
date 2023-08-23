import { PostType } from "@/type/PostType";

export async function generateMetadata({ params }: PostPageProps) {
  const postRes = await fetch(`http://localhost:3001/posts/${params.postId}`);
  const post = (await postRes.json()) as PostType;
  return {
    title: post.title,
  };
}

export const dynamic = "force-dynamic";

interface PostPageProps {
  params: {
    postId: string;
  };
}

export default async function page({ params }: PostPageProps) {
  const postRes = await fetch(`http://localhost:3001/posts/${params.postId}`);
  const post = (await postRes.json()) as PostType;
  return (
    <main>
      <h1>{post.title}</h1>
      <div>{post.body}</div>
    </main>
  );
}
