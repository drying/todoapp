import { createClient } from "./client";
import { supabase } from "./supabase";

// userIDも取得して、ToDO取得や追加、削除、編集、完了にも追加でデータを送ればいいかも

// user_ID取得
export const getUserID = async () => {
  const supabaseID = createClient();
  const {
    data: { user },
  } = await supabaseID.auth.getUser();
  return user?.id;
};

// すべてのtodoを取得
export const getAllTodos = async () => {
  const tasks = await supabase.from("tasks").select("*");
  return tasks.data;
};
// ToDoを追加
//ToDo user_idを取得して引数に追加する
export const addTodo = async (id: string, title: string) => {
  await supabase.from("tasks").insert({ user_id: id, title: title }).select();
};

// Todoを削除
export const deleteTodo = async (id: number) => {
  await supabase.from("tasks").delete().eq("id", id);
};

// Todoを編集
export const editTodo = async (id: number, title: string) => {
  await supabase.from("tasks").update({ title: title }).eq("id", id);
};

// Todoを完了
export const doneTodo = async (id: number, is_complete: boolean) => {
  await supabase
    .from("tasks")
    .update({ is_complete: is_complete })
    .eq("id", id);
};
