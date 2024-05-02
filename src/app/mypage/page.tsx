import { createClient } from "../../../utils/supabase/server";
import Header from "../component/Header";
import TodoList from "../component/TodoList";
import UserInformation from "../component/userInformation";

export default async function Mypage() {
  // const supabase = createClient();
  // // 以下を使ってログイン情報を取得して表示させる
  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();

  return (
    <>
      <Header title="マイページ" leftMenu="ToDo" rightMenu="ユーザー情報" />
      <div className="flex flex-col justify-start min-h-screen bg-gray-200 pt-6 px-6">
        {/* ようこそ「ユーザー情報」さんに変更 */}
        <UserInformation />
        {/* <h2 className="text-4xl font-bold text-gray-700">Todo</h2>
        <TodoList /> */}
      </div>
    </>
  );
}
