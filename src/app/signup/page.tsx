import Header from "../component/Header";
import Title from "../component/Title";
import Form from "../component/Form";
import { signup } from "./action";

export default function Signup() {
  return (
    <>
      <Header title="HOME" leftMenu="ログイン" rightMenu="新規登録" />
      <div className="flex min-h-full flex-col items-center px-6 py-12">
        <Title title="新規登録" />
        <Form
          email="Email address"
          password="password"
          buttonName="新規登録"
          formAction={signup}
        />
      </div>
    </>
  );
}
