import Image from "next/image";
import IWrapper from "./IWrapper";
import blueRight from "/public/blue-right.svg";
import whiteSearch from "/public/white-search.svg";


export default function Hero() {
  return (
    <div className="bg-[#fff] pt-[65px] md:pt-20">
      <IWrapper>
        <h1 className="font-light text-[33px] leading-[40px] md:-mb-[43px] md:text-[45px] lg:ml-[8.333%] md:leading-[60px] text-dark pt-[25px]">
          You don’t just become something, you become someone
        </h1>
      </IWrapper>
      <IWrapper full>
        <div className="w-full md:translate-y-1/2 mt-[30px] md:mt-[54px]">
          <div className="flex flex-col md:flex-row shadow-small bg-white">
            <div className="bg-primary flex-[3] flex p-5 md:px-10 md:py-[30px] relative">
              <input
                placeholder="Search..."
                className="bg-transparent w-full border-b border-white placeholder:text-white font-light leading-[33px] text-lg lg:text-[22px] lg:leading-[34px]"
              />
              <Image
                src={whiteSearch}
                className="absolute right-5 md:right-[40px] top-6 md:top-9"
                alt=""
              />
            </div>
            <div className="flex-[2] flex p-5 items-center">
              <p className="flex text-primary justify-between w-full text-lg leading-[30px] md:text-[22px] md:leading-[30px] font-light">
                <span>About VU Amsterdam</span>
                <Image alt="" src={blueRight} />
              </p>
            </div>
          </div>
        </div>
      </IWrapper>
    </div>
  );
}
