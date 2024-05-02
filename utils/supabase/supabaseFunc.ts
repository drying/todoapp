import { supabase } from "./supabase";

export const getAllTodos = async () => {
  const tasks = await supabase.from("tasks").select("*");
  return tasks.data;
};

export const addTodo = async (title: string) => {
  await supabase.from("tasks").insert({ title: title }).select();
};
