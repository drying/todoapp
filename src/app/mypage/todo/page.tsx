import Link from "next/link";

export default function Todo() {
  return (
    <>
      <div className="flex min-h-full items-center px-6 py-12 bg-gray-900 text-white">
        <div className="flex-1">
          <Link href="/mypage" className="text-2xl">
            マイページ
          </Link>
        </div>
        <div className="flex space-x-10">
          {/* Todoをクリックしたら/ToDoユーザー名に遷移してTodoが表示されるようにする */}
          <Link href="/mypage/todo">Todo</Link>
          <Link href="/mypage/user">ユーザー情報</Link>
          <Link href="/">ログアウト</Link>
        </div>
      </div>

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
