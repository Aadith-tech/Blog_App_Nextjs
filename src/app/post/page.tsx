import PostList from "@/components/post-list";
import { Suspense } from "react";

export default async function Page() {
  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">All Posts</h1>
      <Suspense fallback="Loading...">
        <PostList />
      </Suspense>
    </main>
  );
}
