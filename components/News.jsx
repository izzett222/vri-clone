import impact from "/public/impact.webp";
import blackArrow from "/public/black-right.svg";
import Link from "next/link";
import Image from "next/image";
import IWrapper from "./IWrapper";
export default function News() {
  const data = [
    {
      img: "https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/83279044-76f1-4736-8fe6-383f0530dae1/2N3337X.jpg?w=1250&h=600&fit=clip&rect=0,1254,6720,3226",
      date: "08 Feb 2023",
      text: "Earthquakes Turkey and Syria",
    },
    {
      img: "https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/d8e771d2-c135-499c-a67c-d1da825f453b/robofinch%20def.png",
      date: "15 Feb 2023",
      text: "Robot bird gives singing lessons to zebra finches",
    },
  ];
  const data1 = [
    {
      img: "https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/45e509b2-1cf3-49a7-b40d-53310c2e2219/7%20ton%20voor%20welzijn%20Oekrai%CC%88ne%20vluchtelingen_afb_1250x600.jpg",
      date: "06 Feb 2023",
      text: "EU grant to improve mental well-being of",
    },
    {
      img: "https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/c49919f7-968b-41d7-8776-e9e555f737c5/Sapiens_VUweb_2200x720.jpg?w=1250&h=600&fit=clip&rect=350,0,1500,720",
      date: "03 Feb 2023",
      text: "Sapiens' partnership ended",
    },
    {
      img: "https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/f9f7b751-4e22-4175-add9-3aec344e16ed/Wouter-Botzen.png",
      date: "31 Jan 2023",
      text: "ERC Consolidator Grant for Wouter Botzen",
    },
  ];
  return (
    <div className="bg-[#FAF7F5] py-[30px] md:py-[45px]">
      <IWrapper>
        <h3 className="text-[#3b2171] text-[30px] leading-[36px] md:text-[38px] font-light md:leading-[56px] mb-[15px] md:mb-[25px]">
          News
        </h3>
        <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row ">
          <div className="w-[100%] lg:w-[58%] flex flex-col gap-5">
            {data.map((el, i) => {
              return (
                <div key={i} className={"flex gap-5"}>
                  <div className="relative w-[41.666667%] flex-shrink-0 lg:w-1/2 aspect-[328/249]">
                    <Image src={el.img} className="object-cover" fill alt="" />
                  </div>

                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h5 className="font-medium md:font-bold text-lg leading-[30px] text-[#3b2171]">
                        {el.date}
                      </h5>
                      <p className="text-lg leading-[30px] md:text-2xl font-light text-dark">
                        {el.text}
                      </p>
                    </div>
                    <div className="w-full flex justify-end">
                      <Image src={blackArrow} width={24} height={18} alt="" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-[100%] lg:w-[42%] flex flex-col md:flex-row lg:flex-col lg:flex-initial justify-between gap-5 lg:gap-0 lg:pl-[60px]">
            {data1.map((el, i) => {
              return (
                <div
                  key={i}
                  className={
                    "flex flex-1 lg:flex-initial flex-row md:flex-col lg:flex-row gap-5"
                  }
                >
                  <div className="relative w-[41.666667%] sm:flex-initial lg:flex-initial -w-[284px] h--[224px] md:w-full h-[231px] lg:w-[114px] lg:h-[86px]">
                    <Image
                      src={el.img}
                      alt=""
                      fill
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div className="flex-1 relative">
                    <h5 className="font-medium text-lg text-[#3b2171]">
                      {el.date}
                    </h5>
                    <p className="text-lg font-light text-dark">{el.text}</p>
                    <Image src={blackArrow} width={24} className="absolute bottom-0 right-0" height={18} alt="" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            href="/"
            className="flex text-lg font-medium text-dark items-center gap-2 mt-[35px] md:mt-[70px]"
          >
            News overview <Image src={blackArrow} className={"w-4"} alt="" />
          </Link>
        </div>
      </IWrapper>
    </div>
  );
}
