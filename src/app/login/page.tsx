import Header from "../component/Header";
import Title from "../component/Title";
import Form from "../component/Form";
import { login } from "./action";

export default function Login() {
  return (
    <>
      <Header title="HOME" leftMenu="ログイン" rightMenu="新規登録" />
      <div className="flex min-h-full flex-col items-center px-6 py-12">
        <Title title="ログイン" />
        <Form
          email="Email address"
          password="password"
          buttonName="ログイン"
          formAction={login}
        />
      </div>
    </>
  );
}
