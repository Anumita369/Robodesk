import React, { useState } from "react";
import { login } from "../services/api";
import glogo from "../assets/cossmic-logo.png";

interface Props {
  onLogin: (token: string, robotId: string) => void;
}

const Login: React.FC<Props> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // --------------------------
  // FIXED: handle login function
  // --------------------------
  const handleLogin = async () => {
    const data = await login(email, password);
    onLogin(data.token, data.robotId);
  };

  // --------------------------
  // FIXED: handle submit
  // --------------------------
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleLogin();
  };

  // --------------------------
  // ✔️ RETURN MUST BE HERE — NOT inside handleSubmit
  // --------------------------
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 px-4">
      <div className="mx-auto w-full max-w-3xl rounded-xl bg-white shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* Left Panel */}
        <div className="hidden md:flex flex-col items-center justify-center bg-gray-50 px-8 py-10">
          <h2 className="mb-6 text-2xl font-semibold">Welcome to COSSMIC!</h2>

          <div className="text-5xl font-extrabold flex items-center gap-3">
            {/* <img src={glogo} alt="Cossmic Logo" className="h-20 w-20 object-contain" /> */}
            <span className="inline-block h-20 w-20 rounded-full bg-emerald-200 flex items-center justify-center">
              <span role="img" aria-label="smile" className="text-3xl">
                😊
              </span>
            </span>
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex flex-col gap-8 px-8 py-10">
          <h3 className="text-xl font-semibold">Log in</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1">
              <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500">
                Email
              </label>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border px-4 py-2 text-sm focus:border-black bg-[#4e4f52] focus:outline-none text-gray-100"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md border px-4 py-2 text-sm focus:border-black bg-[#4e4f52] focus:outline-none text-gray-100"
              />
            </div>

            <div className="flex items-center gap-2 text-sm">
              <input type="checkbox" id="keep" className="h-4 w-4 rounded border-gray-300" />
              <label htmlFor="keep" className="text-gray-700">
                Keep me logged in
              </label>
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-green-700 py-3 text-white text-sm font-medium hover:bg-[#041b7a] border border-transparent hover:border-white-500 transition"
            >
              Log in now
            </button>
          </form>

          <div className="text-right text-xs">
            <a href="/forgot" className="underline">
              Forgot your password?
            </a>
          </div>

          <div className="space-y-4">
            <p className="text-center text-xs text-gray-500">Or log in with</p>

            <div className="grid grid-cols-3 gap-3">
              <button className="flex items-center justify-center rounded-md border px-3 py-2 text-xs bg-slate-200 hover:bg-gray-50">
                {/* <img src={glogo} alt="Google Logo" className="w-19 h-6" /> */}
              </button>

              <button className="flex items-center justify-center rounded-md border px-3 py-2 text-xs text-blue-800 bg-slate-200 hover:bg-gray-50">
                Facebook
              </button>

              <button className="flex items-center justify-center rounded-md border px-3 py-2 text-xs text-blue-800 bg-slate-200 hover:bg-gray-50">
                LinkedIn
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;
