import { supabase } from "./supabase";

export const getAllTodos = async () => {
  const tasks = await supabase.from("tasks").select("*");
  return tasks.data;
};
