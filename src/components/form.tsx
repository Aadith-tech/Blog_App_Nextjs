import { createPost } from "@/actions/action";
import Button from "./button";
export default function Form() {
  return (
    <main>
      <form
        className="flex flex-col max-w-[400px] mx-auto gap-2 my-10 mt-10"
        action={createPost}
      >
        <input
          className="border rounded px-3 h-10"
          type="text"
          name="title"
          placeholder="Title for new post"
          required
        />

        <textarea
          name="body"
          placeholder="Body content for new post"
          className="border rounded px-3 py-2"
          rows={6}
          required
        ></textarea>

        <Button />
      </form>
    </main>
  );
}
