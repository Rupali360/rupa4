import React, { useState } from "react";
import appLogo from "./../assets/consent.png";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState("");

  const handleSignin = () => {};
  return (
    <div className="flex items-center justify-center h-dvh">
      <div className="rounded-2xl border border-solid border-stone-300 w-[clamp(300px,90%,400px)]">
        <div className="flex flex-col p-4 items-center">
          <img src={appLogo} className="rounded-full mb-4" />
          <h1 className="mb-6 font-bold text-xl">Sign in to your account</h1>
          <div className="flex w-full flex-col mb-4">
            <label htmlFor="username">E-mail</label>
            <input
              type="text"
              id="username"
              className="input"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              defaultValue={email}
            />
          </div>
          <div className="flex w-full flex-col mb-4">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="input"
              onChange={(e) => {
                setPwd(e.target.value);
              }}
              defaultValue={pwd}
            />
          </div>
          <button
            className="bg-blue-gem-500 w-full px-4 py-2 rounded-md font-bold text-blue-gem-50"
            onClick={handleSignin}
          >
            Login
          </button>
          <div className="mt-4">
            <Link
              to={"/register"}
              className="hover:underline text-blue-gem-600"
            >
              Create new account.
            </Link>
          </div>
        </div>
      </div>
      {error && <div>{error}</div>}
    </div>
  );
};

export default Login;
