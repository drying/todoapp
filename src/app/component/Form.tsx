export default function Form(pros: {
  email: string;
  password: string;
  buttonName: string;
  formAction: (formData: FormData) => void;
}) {
  return (
    <>
      <form className="flex flex-col border p-8">
        <div className="pb-4">
          <label className="block text-sm font-medium">{pros.email}</label>
          <input
            id="email"
            name="email"
            type="email"
            className="border"
            required
          />
        </div>
        <div className="pb-4">
          <label className="block text-sm font-medium">{pros.password}</label>
          <input
            id="password"
            name="password"
            type="password"
            className="border"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            formAction={pros.formAction}
            className="flex w-full justify-center rounded-md px-3 py-1 mb-2 bg-blue-500 text-white text-sm"
          >
            {pros.buttonName}
          </button>
        </div>
      </form>
    </>
  );
}
