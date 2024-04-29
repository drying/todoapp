import { createClient } from "../../../utils/supabase/server";

export default async function UserInformation() {
  const supabase = createClient();
  // 以下を使ってログイン情報を取得して表示させる
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <h2 className="text-4xl font-bold text-gray-700 mb-4">User</h2>
      <div className="w-full max-w-xl">
        <div className="w-full px-8 py-6 bg-white shadow-md rounded-lg">
          <p>{`ユーザー名：${user?.email}`}</p>
          <p>{`ユーザーID：${user?.id}`}</p>
          <p>{`最終ログイン：${user?.last_sign_in_at}`}</p>
        </div>
      </div>
    </>
  );
}
