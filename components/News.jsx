import impact from "/public/impact.webp";
import blackArrow from "/public/black-right.svg";
import Link from "next/link";
import Image from "next/image";
export default function News() {
  const data = [
    {
      img: impact,
      date: "08 Feb 2023",
      text: "Earthquakes Turkey and Syria",
    },
    {
      img: impact,
      date: "08 Feb 2023",
      text: "Earthquakes Turkey and Syria",
    },
  ];
  const data1 = [
    {
      img: impact,
      date: "08 Feb 2023",
      text: "Earthquakes Turkey and Syria",
    },
    {
      img: impact,
      date: "08 Feb 2023",
      text: "Earthquakes Turkey and Syria",
    },
    {
      img: impact,
      date: "08 Feb 2023",
      text: "Earthquakes Turkey and Syria",
    },
  ];
  return (
    <div className="bg-[#FAF7F5] px-5 sm:px-[30px] py-[45px]">
      <h3 className="text-[#3b2171] text-[38px] font-light leading-[56px] mb-[25px]">
        news
      </h3>
      <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row">
        <div className="md:w-[57%] flex flex-col gap-5">
          {data.map((el, i) => {
            return (
              <div key={i} className={"flex gap-5"}>
              <div className="md:w-[284px] md:h-[215px] flex-1 md:flex-initial">
                <Image src={impact} widthd={284} className="w-full h-full object-cover" heightd={215} alt="" />
              </div>
                
                <div className="flex-1 md:flex-initial">
                  <h5 className="font-medium md:font-bold text-lg text-[#3b2171]">
                    {el.date}
                  </h5>
                  <p className="text-2xl font-light md:font-normal text-dark">{el.text}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex-1 flex flex-col md:flex-row lg:flex-col lg:flex-initial justify-between gap-5 lg:gap-0 lg:pl-[60px]">
          {data1.map((el, i) => {
            return (
              <div key={i} className={"flex flex-1 flex-row md:flex-col lg:flex-row gap-5"}>
                <div className="relative  flex-1 w-[284px]  md:w-full md:h-[231px] lg:w-[114px] lg:h-[86px]">
                  <Image src={impact} alt="" className="object-cover w-full h-full" />
                </div>

                <div className="flex-1">
                  <h5 className="font-medium text-lg text-[#3b2171]">
                    {el.date}
                  </h5>
                  <p className="text-2xl font-light text-dark">{el.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center">
        <Link href="/" className="flex text-lg font-medium text-dark items-center gap-2 mt-28">News overview <Image src={blackArrow} className={"w-4"} alt="" /></Link>
      </div>
    </div>
  );
}
