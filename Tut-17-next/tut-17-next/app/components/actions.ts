"use server";

import { revalidatePath } from "next/cache";

export async function createTodo(
  formData: FormData
) {
  const title = formData.get("title") as string;

  console.log("Todo created:", title);

  revalidatePath("/todo");
} 