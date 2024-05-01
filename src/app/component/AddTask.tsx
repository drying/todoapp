export default function AddTask() {
  return (
    <>
      <form className="flex flex-row w-full max-w-xl justify-center space-x-4">
        <input
          type="text"
          placeholder="新しいTodoを追加"
          className="w-5/6 px-12 py-3 mb-4 bg-white shadow-md rounded-lg"
        />
        <button className="w-1/6 px-4 py-2 mb-4 bg-blue-500 text-gray-100 shadow-md rounded-lg">
          追加
        </button>
      </form>
    </>
  );
}
