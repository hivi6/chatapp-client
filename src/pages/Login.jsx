import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    // make a query to the backend using the usernameInput and passwordInput
  };

  return (
    <div className="h-screen bg-gradient-to-b from-indigo-400 to-indigo-800 flex justify-center items-center transition-all">
      <form
        onSubmit={handleLogin}
        className="bg-gray-700 w-[480px] p-8 gap-5 flex flex-col items-center rounded-md"
      >
        <div className="flex flex-col items-center gap-2">
          <div className="text-2xl text-gray-100">Welcome back!</div>
          <div className="text-sm text-gray-200">
            We're so excited to see you again!
          </div>
        </div>

        <div className="w-full flex flex-col gap-1">
          <div className="text-xs text-gray-300 font-semibold">
            USERNAME <span className="text-red-500">*</span>
          </div>
          <input
            type="text"
            value={usernameInput}
            onChange={(event) => setUsernameInput(event.target.value)}
            className="w-full bg-gray-800 p-2 rounded-sm text-gray-300 outline-none"
          />
        </div>

        <div className="w-full flex flex-col gap-1">
          <div className="text-xs text-gray-300 font-semibold">
            PASSWORD <span className="text-red-500">*</span>
          </div>
          <input
            type="password"
            value={passwordInput}
            onChange={(event) => setPasswordInput(event.target.value)}
            className="w-full bg-gray-800 p-2 rounded-sm text-gray-300 outline-none"
          />
          <div className="text-sm text-indigo-500 hover:underline cursor-pointer w-fit">
            Forgot your password?
          </div>
        </div>

        <div className="w-full gap-1 flex flex-col">
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 transition-all duration-200 w-full p-2 rounded-sm text-gray-100"
          >
            Log in
          </button>
          <div className="text-sm text-gray-400">
            Need an account?{" "}
            <Link
              to="/register"
              className="text-indigo-500 hover:underline cursor-pointer"
            >
              Register
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
