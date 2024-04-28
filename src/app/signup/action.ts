"use server";
import { revalidatePath } from "next/cache";

import { createClient } from "../../../utils/supabase/server";
import { redirect } from "next/navigation";

export async function signup(formData: FormData) {
  const supabase = createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    console.log(error);
    redirect("/error");
  }

  revalidatePath("/signup", "layout");
  redirect("/mypage");
}
