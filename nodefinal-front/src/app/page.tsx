"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const Login = () => {
  const [data, setData] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: res } = await axios.post(
        "http://localhost:3001/api/auth",
        data
      );
      sessionStorage.setItem("token", res.token);
      router.push("/home");
      console.log(res.message);
    } catch (error: any) {
      const errorMessage =
        axios.isAxiosError(error) && error.response?.data?.message
          ? error.response.data.message
          : "An unexpected error occurred.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <div className="grid md:h-screen md:grid-cols-2">
        <div className="flex flex-col items-center justify-center bg-[#f2f2f7]">
          <div className="max-w-lg px-5 py-16 md:px-10 md:py-24 lg:py-32">
            <h2 className="mb-8 text-3xl font-bold md:mb-12 md:text-5xl">
              ALUKAS & CO
            </h2>
            <form
              className="mx-auto mb-4 max-w-sm pb-4"
              onSubmit={handleSubmit}
            >
              <div className="relative mb-4">
               <picture> <img
                  alt=""
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f190b7e37f878_EnvelopeSimple.svg"
                  className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block"
                /></picture>
                <input
                  type="email"
                  className="mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 pl-14 text-sm text-[#333333]"
                  name="email"
                  placeholder="Email Address"
                  value={data.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="relative mb-4">
               <picture> <img
                  alt=""
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f19601037f879_Lock-2.svg"
                  className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block"
                /></picture>
                <input
                  type="password"
                  className="mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 pl-14 text-sm text-[#333333]"
                  name="password"
                  placeholder="Password"
                  value={data.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex justify-between mb-6">
                <label className="flex items-center font-medium">
                  <input type="checkbox" name="checkbox" />
                  <span className="ml-4 text-sm">Remember me</span>
                </label>
                <Link href="#" className="text-sm font-bold text-[#0b0b1f]">
                  Forgot your password?
                </Link>
              </div>
              {error && (
                <div className="text-red-500 bg-red-100 border border-red-300 p-4 rounded mb-4">
                  {error}
                </div>
              )}
              <button
                type="submit"
                className="flex w-full gap-2 items-center justify-center bg-[#222222] px-8 py-4 text-center font-semibold text-white transition hover:[box-shadow:rgb(0,0,0)_-8px_8px] "
                disabled={loading}
              >
                {loading ? <span>Loading...</span> : <>Sign in</>}
                <svg
                  className="h-4 w-4 flex-none"
                  fill="currentColor"
                  viewBox="0 0 20 21"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Arrow Right</title>
                  <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
                </svg>
              </button>
            </form>
            <p className="text-sm text-[#636262]">
              Don’t have an account?{" "}
              <Link href="/signup" className="text-sm font-bold text-black">
                Sign up now
              </Link>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center bg-white">
          <div className="max-w-lg px-5 py-16 md:px-10 md:py-24 lg:py-32">
            <div className="mb-6 ml-2 flex h-14 w-14 items-center justify-center bg-[#222222] [box-shadow:rgb(0,0,0)_-8px_8px]">
             <picture> <img
                src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358f5ec37c8c32b17d1c725_Vector-9.svg"
                alt=""
                className="inline-block"
              /></picture>
            </div>
            <div className="flex flex-col gap-2 mb-10">
            <p className=" text-xl text-[#647084] ">
              ALUKAS & CO
              
            </p>
            <p>
            SIGN IN
            </p>
          </div>
            <p className="font-bold">Parvin Ahmadov</p>
            <p className="text-sm">Front end Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
