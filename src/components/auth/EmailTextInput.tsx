import { NextComponentType } from "next";
import Image from "next/image";
import EmailIcon from "../../assets/svgs/icons/Email";
import { useState } from "react";

const EmailTextInput: NextComponentType = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <>
      <label className="font-medium text-sm mb-1">Email</label>
      <div className="relative text-[#4D4D4D]">
        <input
          type="text"
          className="h-12 p-4 pr-12 rounded border-[1px] border-[#D9D9D9] outline-auth-border"
          placeholder="Enter Email"
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
        />
        <EmailIcon
          className={`${
            isActive ? "text-[#434343]" : "text-[#7B7B7B]"
          } absolute top-[25%] right-[16px]`}
        />
      </div>
    </>
  );
};

export default EmailTextInput;
