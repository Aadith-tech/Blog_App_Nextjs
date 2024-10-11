"use client";
import { useFormStatus } from "react-dom";
export default function Button() {
  const { pending } = useFormStatus();
  return (
    <main>
      <button
        className={`h-10 px-5 rounded text-white bg-blue-500 disabled:bg-slate-300 hover:bg-blue-300 transition-all`}
        disabled={pending}
      >
        Submit
      </button>
    </main>
  );
}
