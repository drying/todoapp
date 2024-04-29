import { createClient } from "../../../utils/supabase/server";

export default async function TodoList() {
  const supabase = createClient();
  // 以下を使ってログイン情報を取得して表示させる
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <div className="w-full max-w-xl">
        <div className="w-full px-8 py-6 mb-4 bg-white shadow-md rounded-lg">
          <p>買い物</p>
        </div>
        <div className="w-full px-8 py-6 mb-4 bg-white shadow-md rounded-lg">
          <p>買い物</p>
        </div>
      </div>
    </>
  );
}
