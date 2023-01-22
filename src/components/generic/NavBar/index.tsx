import { NextComponentType } from "next";
// import Image from "next/image";
import SearchIcon from "../../../assets/svgs/navbar/search.svg";

const iconStyle = {
  position: "absolute !important",
  height: "auto",
};

const NavBar: NextComponentType = () => {
  return (
    <div className="h-[120px] bg-white w-full shadow-2xl shadow-gray-200 flex items-center justify-between px-14">
      <div className="relative">
        <svg
          className="absolute top-[11px] left-5"
          width="40"
          height="41"
          viewBox="0 0 40 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.168 29.8191C26.7069 28.1852 29.8061 22.1456 28.0904 16.3294C26.3746 10.5132 20.4936 7.12282 14.9548 8.75674C9.41596 10.3907 6.31672 16.4302 8.03246 22.2464C9.7482 28.0626 15.6292 31.453 21.168 29.8191Z"
            stroke="#BFBABA"
            strokeWidth="0.833756"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M34.4809 28.7538L27.3384 24.6361"
            stroke="#BFBABA"
            strokeWidth="0.833756"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <input
          type="text"
          className="w-[400px] h-16 bg-grey-30 rounded-[10px] outline-0 p-5 pl-[76px] text-2xl placeholder-grey-40 font-normal"
          placeholder="Search"
        />
      </div>
      <div className="flex items-center">
        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.377 2.04315C11.7565 2.04624 9.24421 3.0886 7.39123 4.94158C5.53826 6.79455 4.4959 9.30684 4.49281 11.9273C4.48967 14.0688 5.18918 16.1522 6.48402 17.8578C6.48402 17.8578 6.75359 18.2128 6.79762 18.264L14.377 27.2029L21.96 18.2595C21.9995 18.2119 22.27 17.8578 22.27 17.8578L22.2709 17.8552C23.5651 16.1502 24.2642 14.0678 24.2612 11.9273C24.2581 9.30684 23.2157 6.79455 21.3628 4.94158C19.5098 3.0886 16.9975 2.04624 14.377 2.04315ZM14.377 15.5216C13.6661 15.5216 12.9712 15.3108 12.3801 14.9158C11.7891 14.5209 11.3284 13.9596 11.0563 13.3028C10.7843 12.646 10.7131 11.9234 10.8518 11.2261C10.9905 10.5289 11.3328 9.88848 11.8355 9.38582C12.3381 8.88315 12.9786 8.54083 13.6758 8.40215C14.373 8.26347 15.0957 8.33464 15.7525 8.60668C16.4092 8.87872 16.9706 9.33941 17.3655 9.93048C17.7604 10.5216 17.9712 11.2165 17.9712 11.9273C17.9701 12.8802 17.591 13.7937 16.9172 14.4675C16.2434 15.1413 15.3299 15.5204 14.377 15.5216Z" fill="#F47777"/>
        </svg>
        <p className="font-medium text-2xl font-normal ml-4">Lagos, Nigeria</p>
      </div>
    </div>
  );
};

export default NavBar;
