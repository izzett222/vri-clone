import Image from "next/image";
import right from "/public/right-small.svg";
import Link from "next/link";
import blackArrow from "/public/black-right.svg";
import IWrapper from "./IWrapper";
export default function Impact() {
  const data = [
    {
      title: "Ukraine",
      text: "Information and support",
    },
    {
      title: "VU & Corona",
      text: "",
    },
  ];
  return (
    <div className="pt-[30px] md:pt-[45px] bg-[#faf7f5]">
      <IWrapper>
        <h2 className="text-sec font-light text-[30px] leading-[36px] md:text-[38px] md:leading-[56px] mb-[15px] md:mb-[25px]">
          Impact
        </h2>
      </IWrapper>

      <div>
        <div className="relative w-full h-[188px] md:h-[431px] lg:h-[575px]">
          <Image src={"/impact.webp"} alt="" fill className="object-cover" />
          <div className="absolute bottom-0 right-0 bg-[#fcd3b6] md:hidden justify-between px-4 flex w-[120px] h-[60px]">
            <Image
              src={right}
              width={20}
              height={24}
              className={"rotate-180"}
              alt=""
            />
            <Image src={right} alt="" width={20} height={24} />
          </div>
        </div>
        <IWrapper full>
          <div className="lg:w-[58.333%] md:w-[75%]  relative px-[30px] pt-[55px] lg:pt-[15px] 2xl:pt-[45px] pb-[30px] md:pb-[60px] md:-translate-y-[30%] lg:-translate-y-[45%] 2xl:-translate-y-[83%] md:left-[17%] md:relative lg:left-1/4 bg-white shadow-small  2xl:pr-[70px] 2xl:pl-[45px]">
            <div className="absolute -top-[14.5px] left-0 right-0 h-[14px] hidden lg:flex overflow-hidden">
              <div className="w-[70px] h-full bg-white skew-x-[30deg] -translate-x-1"></div>
              <div className="flex-1 h-full bg-white ml-0.5 -skew-x-[30deg] translate-x-1"></div>
            </div>
            <h4 className="text-2xl leading-[36px] text-sec font-light">
              Science to Impact
            </h4>
            <p className="text-dark my-[15px] text-lg">
              An interview with entrepreneurial scientist Davide Iannuzzi, Chief
              Impact Officer of Vrije Universiteit Amsterdam
            </p>
            <Link
              href={"/"}
              className="flex text-lg font-medium mt-[30px] text-dark gap-4"
            >
              Read more{" "}
              <Image src={"/black-right.svg"} alt="" width={16} height={18} />
            </Link>

            <div className="absolute hidden md:flex justify-end bottom-0 left-0 right-0 gap-[25px]">
              <div className="flex gap-5 items-center">
                <div className="w-5 h-5 rounded-full bg-sec"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-sec"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-sec"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-sec"></div>
              </div>
              <div className="absolute- bottom-0 right-0 bg-[#fcd3b6] justify-between px-4 flex w-[120px] h-[60px]">
                <Image
                  src={right}
                  width={20}
                  height={24}
                  className={"rotate-180"}
                  alt=""
                />
                <Image src={right} alt="" width={20} height={24} />
              </div>
            </div>
          </div>
        </IWrapper>
      </div>
      <div>
        <div className="bg-white mt-7 md:-mt-10 lg:-mt-12 2xl:-mt-44">
          <IWrapper>
            <div className="py-[60px] flex flex-col 2xl:flex-row gap-5">
              {data.map((el, i) => {
                return (
                  <div
                    key={i}
                    className="py-[25px] hover:cursor-pointer shadow-small gap-5 flex 2xl:flex-1 flex-col bg-white px-[30px]"
                  >
                    <h3 className={`text-[22px] leading-[32px] md:text-2xl font-light ${i === 0 ? "text-[#008053]" : "text-[#3b2171]"}`}>
                      {el.title}
                    </h3>
                    <p className="text-lg text-dark font-light">{el.text}</p>
                    <div className="flex justify-end">
                      <Image src={blackArrow} width={16} height={16} alt="" />
                    </div>
                  </div>
                );
              })}
            </div>
          </IWrapper>
        </div>
      </div>
    </div>
  );
}
