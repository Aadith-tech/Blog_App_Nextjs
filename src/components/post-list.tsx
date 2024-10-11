import prisma from "@/lib/db";
import Link from "next/link";

export default async function PostList() {
  const posts = await prisma.post.findMany();
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id} className="mb-3">
          <Link href={`/post/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
