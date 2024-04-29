import Header from "@/app/component/Header";
import UserInformation from "@/app/component/userInformation";
import { createClient } from "../../../../utils/supabase/server";

export default async function User() {
  const supabase = createClient();
  // 以下を使ってログイン情報を取得して表示させる
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <Header title="マイページ" leftMenu="ToDo" rightMenu="ユーザー情報" />

      <div className="flex flex-col justify-start min-h-screen bg-gray-200 pt-6 px-6">
        <UserInformation />
      </div>
    </>
  );
}
