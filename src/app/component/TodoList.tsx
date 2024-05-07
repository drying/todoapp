import React from "react";
import { Task } from "../../../utils/interface";
import { deleteTodo } from "../../../utils/supabase/supabaseFunc";

type Props = {
  tasks: Task[];
  getTodos: () => void;
};

export default function TodoList(props: Props) {
  const { tasks, getTodos } = props;

  const onClickDelete = async (id: number) => {
    await deleteTodo(id);
    getTodos(); // Todoを呼び出して画面更新する
  };

  return (
    <>
      <form className="w-full max-w-xl">
        <ul className="space-y-3">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex justify-between space-x-4 p-4 items-center bg-white shadow-md rounded-lg"
            >
              <li className="text-gray-700">{task.title}</li>
              <div className="flex space-x-2">
                <button
                  onClick={() => onClickDelete(task.id)}
                  className="px-3 py-2 bg-red-400 text-gray-100 text-sm shadow-md"
                >
                  削除
                </button>
                <button className="px-3 py-2 bg-blue-400 text-gray-100 text-sm shadow-md">
                  編集
                </button>
              </div>
            </div>
          ))}
        </ul>
      </form>
    </>
  );
}
