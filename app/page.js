export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <form className="bg-white shadow-md p-8 rounded-lg w-80">
        <h1 className="font-semibold text-center mb-4 text-gray-800">Login</h1>
        <div className="mb-4">
          <label className="block mb-2 text-gray-800">Username</label>
          <input type="text" className="w-full border rounded px-3 py-2 text-gray-800 border-gray-800" />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-gray-800">Password</label>
          <input type="password" className="w-full border rounded px-3 py-2 text-gray-800 border-gray-800" />
        </div>
        <div className="text-center">
          <button className="bg-gray-800 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}
