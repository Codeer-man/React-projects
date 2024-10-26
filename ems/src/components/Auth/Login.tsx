import { useState } from "react";

export default function Login({ handleLogin }: { handleLogin: (email: string, password: string) => void }) {
  const [email, setemail] = useState("");
  const [password, Setpassword] = useState("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleLogin(email,password)
    Setpassword("");
    setemail("");
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="border-2 border-emerald-600 p-20">
        <form
          action=""
          onSubmit={submitHandler}
          className="flex flex-col gap-3 items-center justify-center"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            className="border-2 border-emerald-600 rounded-full py-3 px-5 
           outline-none bg-transparent placeholder:text-gray-400"
            placeholder="Enter Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => {
              Setpassword(e.target.value);
            }}
            placeholder="Enter Password"
            required
            className="border-2 border-emerald-600 rounded-full py-3 px-5
           outline-none bg-transparent placeholder:text-gray-400"
          />

          <button
            className="mt-3 rounded-full bg-emerald-600 py-3 px-5
        text-white outline-none placeholder:text-white"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
