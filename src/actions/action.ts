"use server";
import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export async function createPost(formdata: FormData) {
  const { isAuthenticated } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    redirect("api/auth/login");
  }

  const title = formdata.get("title") as string;
  const body = formdata.get("body") as string;

  await prisma.post.create({
    data: {
      title,
      body,
    },
  });
  revalidatePath("/post");
}
