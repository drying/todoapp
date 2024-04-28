import Header from "../component/Header";
import Title from "../component/Title";
import { login } from "./action";

export default function Login() {
  return (
    <>
      <Header title="HOME" leftMenu="ログイン" rightMenu="新規登録" />
      <div className="flex min-h-full flex-col items-center px-6 py-12">
        <Title title="ログイン" />

        <form className="flex flex-col border p-8">
          <div className="pb-4">
            <label className="block text-sm font-medium">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              className="border"
              required
            />
          </div>
          <div className="pb-4">
            <label className="block text-sm font-medium">Password</label>
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
              formAction={login}
              className="flex w-full justify-center rounded-md px-3 py-1 mb-2 bg-blue-500 text-white text-sm"
            >
              ログイン
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
