export default function Title(props: { title: string }) {
  return (
    <>
      <div>
        <h1 className="text-2xl text-center mb-4">Todoアプリ</h1>
        <h2 className="text-xl text-center mb-4">{props.title}</h2>
      </div>
    </>
  );
}
