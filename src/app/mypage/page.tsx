import Link from "next/link";
import Header from "../component/Header";

export default function Mypage() {
  return (
    <>
      <Header leftMenu="ToDo" rightMenu="ユーザー情報" />

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
