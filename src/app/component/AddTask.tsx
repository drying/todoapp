import { FormEvent, useState } from "react";
import { addTodo, getUserID } from "../../../utils/supabase/supabaseFunc";

type Props = {
  getTodos: () => void;
};

export default function AddTask(props: Props) {
  const { getTodos } = props;
  const [title, setTitle] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title === "") {
      alert("タイトルを入力してください");
      return;
    }
    const user_id = await getUserID();
    if (user_id) {
      await addTodo(user_id, title);
    }
    getTodos(); // Todoを呼び出して画面更新する
    setTitle("");
  };

  return (
    <>
      <form
        className="flex flex-row w-full max-w-xl justify-center space-x-4"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type="text"
          placeholder="新しいTodoを追加"
          className="w-5/6 px-12 py-3 mb-4 bg-white shadow-md rounded-lg"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <button className="w-1/6 px-4 py-2 mb-4 bg-blue-500 text-gray-100 shadow-md rounded-lg">
          追加
        </button>
      </form>
    </>
  );
}
