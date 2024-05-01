import AddTask from "@/app/component/AddTask";
import Header from "@/app/component/Header";
import TodoList from "@/app/component/TodoList";

export default function Todo() {
  return (
    <>
      <Header title="マイページ" leftMenu="ToDo" rightMenu="ユーザー情報" />

      <div className="flex flex-col justify-start items-center min-h-screen bg-gray-200 pt-6 px-6">
        <h2 className="text-4xl font-bold text-gray-7000 mb-4">Todo</h2>
        <AddTask />
        <TodoList />
      </div>
    </>
  );
}
