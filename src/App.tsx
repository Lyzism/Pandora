import './App.css'

function App() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-96">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800">PANDORA</h1>
      </div>
      <p className="text-center text-gray-600 mb-6">
        Welcome back! Login to Pandora account.
      </p>
      <form>
        <div className="mb-4">
          <label className="block text-gray-200 mb-2" htmlFor="email">
          </label>
          <input
            className="w-full bg-gray-300 px-3 py-2 border rounded-lg text-black placeholder:text-black"
            type="text"
            id="username"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="password">
          </label>
          <input
            className="w-full bg-gray-300 px-3 py-2 border rounded-lg text-black placeholder:text-black"
            type="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <button
          className="w-full bg-black-300 text-white py-2 rounded-lg mb-4"
          type="submit"
        >
          Login
        </button>
        <button
          className="w-full bg-white text-gray-700 py-2 rounded-lg border"
          type="button"
        >
          Reset password
        </button>
      </form>
    </div>
  );
}

export default App
