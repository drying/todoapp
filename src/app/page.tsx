import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col items-center px-6 py-12">
        <div>
          <h1 className="text-2xl text-center mb-4">Todoアプリ</h1>
          <h2 className="text-xl text-center mb-4">新規登録</h2>
        </div>

        <div className="flex flex-col border p-8">
          <div className="pb-4">
            <label htmlFor="email" className="block text-sm font-medium">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="border"
              required
            />
          </div>
          <div className="pb-4">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="border"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md px-3 py-1 mb-2 bg-blue-500 text-white text-sm"
            >
              ログイン
            </button>
          </div>
          <Link href="/signup" className="text-sm text-center">
            新規登録はこちら
          </Link>
          <Link href="/mypage" className="text-sm text-center">
            マイページ
          </Link>
        </div>
      </div>
    </>
  );
}
