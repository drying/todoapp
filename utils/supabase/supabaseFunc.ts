import { supabase } from "./supabase";

//ToDo todo関連のCRUDはここにまとめて記載して各ファイルで呼び出すように修正する
// すべてのtodoを取得する
export const getAllTodos = async () => {
  const tasks = await supabase.from("tasks").select("*");
  return tasks.data;
};
// ToDoを追加する
//ToDo user_idを取得して引数に追加する
export const addTodo = async (title: string) => {
  await supabase.from("tasks").insert({ title: title }).select();
};

// Todoを削除する
export const deleteTodo = async (id: number) => {
  await supabase.from("tasks").delete().eq("id", id);
};

// Todoを編集する

// Todoを完了する
