import PostData from "@/components/post-data";
import { Suspense } from "react";
interface IParams {
  params: { id: string };
}
export default async function Page({ params }: IParams) {
  return (
    <main className="px-7 pt-24 text-center">
      <Suspense fallback="Working...">
        <PostData params={params} />
      </Suspense>
    </main>
  );
}
