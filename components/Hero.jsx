import Image from "next/image";
import Wrapper from "./Wrapper";
import blueRight from "/public/blue-right.svg";
import whiteSearch from "/public/white-search.svg";

export default function Hero() {
  return (
    <div className="bg-[#fff] pt-20">
      <h1 className="font-light lg:mx-[130px] text-[45px] leading-[60px] text-dark pt-[30px] px-5 sm:px-[30px]">
        You don’t just become something, you become someone
      </h1>
      <div className="w-full translate-y-1/2 lg:px-[30px]">
        <div className="flex flex-col md:flex-row shadow-small bg-white">
          <div className="bg-primary flex-[3] flex px-10 py-[30px] relative">
            <input
              placeholder="Search..."
              className="bg-transparent w-full border-b border-white placeholder:text-white text-[22px] leading-[34px]"
            />
            <Image
              src={whiteSearch}
              className="absolute right-[40px] top-10"
              alt=""
            />
          </div>
          <div className="flex-[2] flex p-5 items-center">
            <p className="flex text-primary justify-between w-full text-[22px] leading-[30px] font-light">
              <span>About VU Amsterdam</span>
              <Image alt="" src={blueRight} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
