import Header from "@/app/component/Header";

export default function Todo() {
  return (
    <>
      <Header title="マイページ" leftMenu="ToDo" rightMenu="ユーザー情報" />

      <div className="flex flex-col justify-start min-h-screen bg-gray-200 pt-6 px-6">
        <h2 className="text-4xl font-bold text-gray-700">Todo</h2>
        <div className="w-full max-w-xl mt-5">
          <div className="w-full px-8 py-6 bg-white shadow-md rounded-lg">
            <p>Todo</p>
          </div>
        </div>
      </div>
    </>
  );
}
