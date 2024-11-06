import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { IoMdCheckbox } from "react-icons/io";
import { BiHide } from "react-icons/bi";
import { BiShowAlt } from "react-icons/bi";

const Login = () => {
  const [checked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="rounded-md bg-zinc-900 h-[500px] w-[350px]">
        <h1 className="text-[26px] flex justify-center pt-3 font-bold font-serif">
          Log In
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setEmail("");
            setPassword("");
          }}
          className="flex flex-col justify-center pt-[35%] gap-5 "
        >
          <div className="relative pl-[19px] flex items-center">
            <CgProfile className="absolute left-7" />
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              required
              className="bg-zinc-900 pl-8 py-1 outline-none border w-[300px] rounded-[30px] border-red-400"
              type="text"
              placeholder="Email"
            />
          </div>

          <div className="pl-[19px] flex items-center">
            <div className="relative flex items-center">
              <RiLockPasswordFill className="absolute left-2" />
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                required
                className="bg-zinc-900 pl-8 py-1 outline-none border w-[300px] rounded-[30px] border-red-400"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />
              <p
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
                className="absolute left-[86%] text-xs cursor-pointer hover:text-gray-500"
              >
                {showPassword ? (
                  <BiHide className="text-2xl" />
                ) : (
                  <BiShowAlt className="text-2xl" />
                )}
              </p>
            </div>
          </div>

          <div className="flex justify-around">
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => setIsChecked(!checked)}
            >
              {checked ? <IoMdCheckbox /> : <MdOutlineCheckBoxOutlineBlank />}
              <p className="cursor-pointer">Remember Me</p>
            </div>
            <p className="cursor-pointer text-red-600">Forget Password</p>
          </div>

          <button className="bg-red-500 px-3 py-2 rounded-[30px] w-[85%] ml-6 hover:bg-red-800">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
