"use client";
import AddTask from "@/app/component/AddTask";
import Header from "@/app/component/Header";
import TodoList from "@/app/component/TodoList";
import { useEffect, useState } from "react";
import { getAllTodos } from "../../../../utils/supabase/supabaseFunc";
import { Task } from "../../../../utils/interface";

// user idをテーブルに追加して、それに紐づくTodoを表示するようにリファクタリングする
export default function Todo() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const getTodos = async () => {
      const tasks = await getAllTodos();
      if (tasks) {
        setTasks(tasks);
      } else {
        setTasks([]);
      }
    };
    getTodos();
  }, []);

  return (
    <>
      <Header title="マイページ" leftMenu="ToDo" rightMenu="ユーザー情報" />

      <div className="flex flex-col justify-start items-center min-h-screen bg-gray-200 pt-6 px-6">
        <h2 className="text-4xl font-bold text-gray-7000 mb-4">Todo</h2>
        <AddTask />
        <TodoList tasks={tasks} />
      </div>
    </>
  );
}
