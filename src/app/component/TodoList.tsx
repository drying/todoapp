import { useState } from "react";
import { Task } from "../../../utils/interface";
import {
  deleteTodo,
  doneTodo,
  editTodo,
} from "../../../utils/supabase/supabaseFunc";

type Props = {
  tasks: Task[];
  getTodos: () => void;
};

export default function TodoList(props: Props) {
  const { tasks, getTodos } = props;
  const [editId, setEditId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState<string>("");

  const onClickDelete = async (id: number) => {
    await deleteTodo(id);
    getTodos(); // Todoを呼び出して画面更新する
  };

  const onClickEdit = async (id: number) => {
    setEditId(id);
  };

  const handleEdit = async (id: number) => {
    await editTodo(id, editTitle);
    console.log(id, editTitle);
    getTodos();
    setEditId(null);
  };

  const onClickDone = async (id: number, is_complete: boolean) => {
    await doneTodo(id, !is_complete);
    console.log(id, is_complete);
    getTodos();
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
              <input
                className="flex-none h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                type="checkbox"
                onChange={() => onClickDone(task.id, task.is_complete)}
                checked={task.is_complete}
              />
              {editId === task.id ? (
                <>
                  <input
                    type="text"
                    placeholder="新しいTodoを追加"
                    className="w-5/6 px-12 py-3 mb-4 bg-white shadow-md rounded-lg"
                    onChange={(e) => setEditTitle(e.target.value)}
                    value={editTitle}
                  />
                  <button
                    type="button"
                    onClick={() => handleEdit(task.id)}
                    className="px-3 py-2 bg-blue-400 text-gray-100 text-sm shadow-md"
                  >
                    完了
                  </button>
                </>
              ) : (
                <>
                  <li className="flex-1 text-gray-700">{task.title}</li>
                  <div className="flex space-x-2">
                    <button
                      type="button"
                      onClick={() => onClickDelete(task.id)}
                      className="px-3 py-2 bg-red-400 text-gray-100 text-sm shadow-md"
                    >
                      削除
                    </button>
                    <button
                      type="button"
                      onClick={() => onClickEdit(task.id)}
                      className="px-3 py-2 bg-blue-400 text-gray-100 text-sm shadow-md"
                    >
                      編集
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </ul>
      </form>
    </>
  );
}
