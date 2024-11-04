import React from "react";
import { CgProfile } from "react-icons/cg";
import { RiLockPasswordFill } from "react-icons/ri";
const Login = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="border-2 border-red-500">
        <form>
          <div>
            <CgProfile />
            <input type="text" placeholder="Email" />
          </div>

          <div>
            <div>
              <RiLockPasswordFill />
              <input type="password" placeholder="Password" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
