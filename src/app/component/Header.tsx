import Link from "next/link";

export default function Header(props: {
  title: string;
  leftMenu: string;
  rightMenu: string;
}) {
  return (
    <>
      <div className="flex min-h-full items-center px-6 py-12 bg-gray-900 text-white">
        <div className="flex-1">
          {props.title === "HOME" ? (
            <Link href="/" className="text-2xl">
              {props.title}
            </Link>
          ) : (
            <Link href="/mypage" className="text-2xl">
              {props.title}
            </Link>
          )}
        </div>
        <div className="flex space-x-10">
          {props.leftMenu === "ログイン" ? (
            <>
              <Link href="/login">{props.leftMenu}</Link>
              <Link href="/signup">{props.rightMenu}</Link>
              <Link href="/">ログアウト</Link>
            </>
          ) : (
            <>
              <Link href="/mypage/todo">{props.leftMenu}</Link>
              <Link href="/mypage/user">{props.rightMenu}</Link>
              <Link href="/">ログアウト</Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}
