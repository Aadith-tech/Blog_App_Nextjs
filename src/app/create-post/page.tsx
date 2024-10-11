import Form from "@/components/form";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
export default async function Page() {
  return (
    <main className="text-center pt-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">Create post</h1>
      <Form />
      <LogoutLink className="border border-zinc-300 px-4 py-2 rounded hover:bg-zinc-300 transition-all">
        Log Out
      </LogoutLink>
    </main>
  );
}
