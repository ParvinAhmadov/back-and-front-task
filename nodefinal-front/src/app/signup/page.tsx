"use client";
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const Signup = () => {
  const router = useRouter();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = (): boolean => {
    const { firstName, lastName, email, password } = data;
    if (!firstName || !lastName || !email || !password) {
      setError("All fields are required.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    if (!validateForm()) return;

    setLoading(true);
    try {
      const url = "http://localhost:3001/api/users";
      const { data: res } = await axios.post(url, data);
      console.log(res.message);
      router.push("/");
    } catch (error: any) {
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError("An error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <div className="grid md:h-screen md:grid-cols-2">
        <div className="flex flex-col items-center justify-center bg-white">
          <div className="max-w-lg px-5 py-16 text-center md:px-10 md:py-24 lg:py-32">
            <h2 className="mb-8 text-3xl font-bold md:mb-12 md:text-5xl">
              ALUKAS & CO
            </h2>
            <form
              className="mx-auto mb-4 max-w-sm pb-4"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                className="mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 pl-4 text-sm text-[#333333]"
                name="firstName"
                placeholder="First Name"
                value={data.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                className="mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 pl-4 text-sm text-[#333333]"
                name="lastName"
                placeholder="Last Name"
                value={data.lastName}
                onChange={handleChange}
                required
              />
              <div className="relative mb-4">
                <img
                  alt=""
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f190b7e37f878_EnvelopeSimple.svg"
                  className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block"
                />
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
                <img
                  alt=""
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f19601037f879_Lock-2.svg"
                  className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block"
                />
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
              <label className="mb-6 flex items-center pb-12 font-medium lg:mb-1">
                <input type="checkbox" name="checkbox" />
                <span className="ml-4 inline-block cursor-pointer text-sm">
                  I agree with the{" "}
                  <Link href="#" className="font-bold text-[#0b0b1f]">
                    Terms &amp; Conditions
                  </Link>
                </span>
              </label>
              {error && (
                <div className="text-red-500 bg-red-100 border border-red-300 p-4 rounded mb-4">
                  {error}
                </div>
              )}
              <button
                type="submit"
                className="flex w-full gap-2 items-center justify-center bg-[#222222] px-8 py-4 text-center font-semibold text-white transition hover:[box-shadow:rgb(0,0,0)_-8px_8px]"
                disabled={loading}
              >
                {loading ? "Signing up..." : "Sign up"}
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
              Already have an account?{" "}
              <Link href="/" className="text-sm font-bold text-black">
                Login now
              </Link>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center bg-[#f2f2f7]">
          <div className="max-w-lg px-5 py-16 md:px-10 md:py-24 lg:py-32">
            <div className="mb-6 ml-2 flex h-14 w-14 items-center justify-center bg-[#222222] [box-shadow:rgb(0,0,0)_-8px_8px]">
              <picture>
                {" "}
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358f5ec37c8c32b17d1c725_Vector-9.svg"
                  alt=""
                  className="inline-block"
                />
              </picture>
            </div>
            <div className="flex flex-col gap-2 mb-10">
              <p className=" text-xl text-[#647084] ">ALUKAS & CO</p>
              <p>SIGN UP</p>
            </div>
            <p className="font-bold">Parvin Ahmadov</p>
            <p className="text-sm">Front end Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
