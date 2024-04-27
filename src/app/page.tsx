import Header from "./component/Header";

export default function Home() {
  return (
    <>
      {/* propsで、ページ毎に表示する内容を変える */}
      <Header title="HOME" leftMenu="ログイン" rightMenu="新規登録" />
    </>
  );
}
