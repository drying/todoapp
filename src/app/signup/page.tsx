import Link from "next/link";

export default function Signup() {
  return (
    <>
      <div className="flex min-h-full flex-col items-center px-6 py-12">
        <div>
          <h1 className="text-2xl text-center mb-4">Todoアプリ</h1>
          <h2 className="text-xl text-center mb-4">ログイン</h2>
        </div>

        <div className="flex flex-col border p-8">
          <div className="pb-4">
            <label className="block text-sm font-medium">Email address</label>
            <input type="email" className="border" />
          </div>
          <div className="pb-4">
            <label className="block text-sm font-medium">Password</label>
            <input type="password" className="border" />
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md px-3 py-1 mb-2 bg-blue-500 text-white text-sm"
            >
              ログイン
            </button>
          </div>
          <Link href="/" className="text-sm text-center">
            新規登録はこちら
          </Link>
        </div>
      </div>
    </>
  );
}
