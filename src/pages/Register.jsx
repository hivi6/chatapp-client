import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [termsAndConditionCheck, setTermsAndConditionCheck] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    // Handle registration process
  };

  return (
    <div className="h-screen bg-gradient-to-b from-indigo-400 to-indigo-800 flex justify-center items-center transition-all">
      <form
        onSubmit={handleRegister}
        className="bg-gray-700 w-[480px] p-8 gap-5 flex flex-col items-center rounded-md"
      >
        <div className="flex flex-col items-center gap-2">
          <div className="text-2xl text-gray-100">Create an account!</div>
        </div>

        <div className="w-full flex flex-col gap-1">
          <div className="text-xs text-gray-300 font-semibold">
            USERNAME <span className="text-red-500">*</span>
          </div>
          <input
            type="text"
            className="w-full bg-gray-800 p-2 rounded-sm text-gray-300 outline-none"
          />
        </div>

        <div className="w-full flex flex-col gap-1">
          <div className="text-xs text-gray-300 font-semibold">
            DISPLAY NAME <span className="text-red-500">*</span>
          </div>
          <input
            type="text"
            className="w-full bg-gray-800 p-2 rounded-sm text-gray-300 outline-none"
          />
        </div>

        <div className="w-full flex flex-col gap-1">
          <div className="text-xs text-gray-300 font-semibold">
            PASSWORD <span className="text-red-500">*</span>
          </div>
          <input
            type="password"
            className="w-full bg-gray-800 p-2 rounded-sm text-gray-300 outline-none"
          />
        </div>

        <div className="w-full flex items-center gap-2">
          <input
            checked={termsAndConditionCheck}
            onChange={(event) => {
              setTermsAndConditionCheck(event.target.checked);
            }}
            type="checkbox"
            className="w-4 h-4"
          />
          <span className="text-sm text-gray-300">
            Accept{" "}
            <Link to="/terms" className="text-indigo-500 hover:underline">
              terms
            </Link>{" "}
            and{" "}
            <Link to="/conditions" className="text-indigo-500 hover:underline">
              conditions
            </Link>
          </span>
        </div>

        <div className="w-full gap-1 flex flex-col">
          <button
            disabled={!termsAndConditionCheck}
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 transition-all duration-200 w-full p-2 rounded-sm text-gray-100 disabled:bg-gray-500"
          >
            Register
          </button>
        </div>

        <div className="w-full">
        <Link to="/login" className="text-sm text-indigo-500 hover:underline">Already have an account?</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
