import { useState } from "react";
import { NextComponentType } from "next";
import Image from "next/image";
import EyeHide from "../../assets/svgs/icons/EyeHide";
import EyeOpen from "../../assets/svgs/icons/EyeOpen";
import styles from "../../styles/login.module.css";

const PasswordInput: NextComponentType = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <>
      <label className="font-medium text-sm mb-1">Password</label>
      <div className="relative text-[#4D4D4D]">
        <input
          type={showPassword ? "text" : "password"}
          className="h-12 p-4 pr-12 rounded border-[1px] border-[#D9D9D9] outline-auth-border"
          placeholder="Enter Password"
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
        />

        <span
          className="cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <EyeHide
              className={`${
                isActive ? "text-[#434343]" : "text-[#7B7B7B]"
              } absolute top-[25%] right-[16px]`}
            />
          ) : (
            <EyeOpen
              className={`${
                isActive ? "text-[#434343]" : "text-[#7B7B7B]"
              } absolute top-[25%] right-[16px]`}
            />
          )}
        </span>
      </div>
    </>
  );
};

export default PasswordInput;
