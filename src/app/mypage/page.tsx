import Link from "next/link";

export default function Mypage() {
  return (
    <>
      <div className="flex min-h-full items-center px-6 py-12 bg-gray-900 text-white">
        <div className="flex-1">
          <Link href="/mypage" className="text-2xl">
            マイページ
          </Link>
        </div>
        <div className="flex space-x-10">
          <Link href="/mypage/todo">Todo</Link>
          <Link href="/mypage/user">ユーザー情報</Link>
          <Link href="/">ログアウト</Link>
        </div>
      </div>

      <div className="flex justify-around min-h-screen bg-gray-200 pt-6 px-6">
        <h2 className="text-4xl font-bold text-gray-700">User</h2>
        <div className="w-full max-w-xl">
          <div className="w-full px-8 py-6 bg-white shadow-md rounded-lg">
            <p>Yuki Matsumoto</p>
            <p>user ID: 1</p>
            <p>最終ログイン: 2024/4/24 12:00</p>
          </div>
        </div>
        <h2 className="text-4xl font-bold text-gray-700">Todo</h2>
        <div className="w-full max-w-xl">
          <div className="w-full px-8 py-6 bg-white shadow-md rounded-lg">
            <p>Todo</p>
          </div>
        </div>
      </div>
    </>
  );
}
