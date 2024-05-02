export default function TodoList(props: any) {
  console.log(`tasksの取得`);
  const { tasks } = props;
  console.log(tasks);
  return (
    <>
      <form className="w-full max-w-xl">
        <ul className="space-y-3">
          <div className="flex justify-between space-x-4 p-4 items-center bg-white shadow-md rounded-lg">
            <li className="text-gray-700">買い物</li>
            <div className="flex space-x-2">
              <button className="px-3 py-2 bg-red-400 text-gray-100 text-sm shadow-md">
                削除
              </button>
              <button className="px-3 py-2 bg-blue-400 text-gray-100 text-sm shadow-md">
                編集
              </button>
            </div>
          </div>
          <li className="flex justify-between space-x-4 p-4 items-center bg-white shadow-md rounded-lg">
            <span className="text-gray-700">買い物</span>
            <div className="flex space-x-2">
              <button className="px-3 py-2 bg-red-400 text-gray-100 text-sm shadow-md">
                削除
              </button>
              <button className="px-3 py-2 bg-blue-400 text-gray-100 text-sm shadow-md">
                編集
              </button>
            </div>
          </li>
        </ul>
      </form>
    </>
  );
}
