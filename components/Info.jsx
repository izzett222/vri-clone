import Image from "next/image";
import hat from "/public/hat.svg";
import medal from "/public/medal.svg";
import puzzle from "/public/puzzle.svg";
import globe from "/public/globe.svg";
import blueArrow from "/public/blue-right.svg";
import blackArrow from "/public/black-right.svg";
import Link from "next/link";
import IWrapper from "./IWrapper";

export default function Info() {
  const data = [
    {
      img: hat,
      text: "31.704 students",
    },
    {
      img: globe,
      text: "5.190 international students",
    },
    {
      img: medal,
      text: "459 PhD defences",
    },
    {
      img: puzzle,
      text: "9 faculties",
    },
  ];
  const programs = [
    {
      title: "Education",
      items: [
        "Bachelors programmes",
        "Masters programmes",
        "Honours programme",
        "Education for professionals",
        "Study guide",
      ],
    },
    {
      title: "Research",
      items: [
        "Research highlights",
        "Valorisation",
        "Our scientists",
        "Prizes and distinctions",
        "Interdisciplinary research institutes",
      ],
    },
  ];
  return (
    <div className="lg:-mt-20 bg-[#FEFEFE] pb-[10px]">
      <IWrapper>
        <div className="flex gap-x-[15px] items-start md:gap-x-10 md:flex-wrap justify-center md:items-center py-[15px] md:py-[30px]">
          {data.map((el, i) => {
            return (
              <div
                key={i}
                className="flex flex-1 md:flex-initial flex-col md:flex-row items-center gap-2"
              >
                <div
                  className={
                    "w-[20px] h-[20px] md:w-[30px] md:h-[30px] relative"
                  }
                >
                  <Image
                    src={el.img}
                    // width={30}
                    className="object-contain"
                    fill
                    // height={30}
                    alt=""
                  />
                </div>

                <span className="md:text-lg font-medium md:font-normal text-dark text-center md:text-left">
                  {el.text}
                </span>
              </div>
            );
          })}
        </div>
      </IWrapper>
      <IWrapper>
        <div className="flex flex-col relative md:flex-row mt-[7.5px] md:mt-[30px] pb-[15px] gap-5">
          <div className="absolute top-[25%] md:top-[40%] translate-y-[30px] -right-5 -left-5 bottom-0 bg-[#f2efed]"></div>
          {programs.map((el, i) => {
            return (
              <div
                key={i}
                className={
                  "shadow-small flex-1 p-5 md:p-[30px] relative z-10 bg-white"
                }
              >
                <h2 className="text-[30px] leading-[36px] md:text-[38px] font-light text-primary mb-2.5 md:mb-[30px] md:leading-[56px] flex w-full items-center justify-between">
                  {el.title}{" "}
                  <Image
                    src={blueArrow}
                    width={40}
                    height={40}
                    alt=""
                    className={"translate-x-1.5 md:translate-x-1"}
                  />
                </h2>
                <div className="flex flex-col">
                  {el.items.map((item, e) => {
                    return (
                      <Link
                        key={e}
                        href="/"
                        className="flex w-full justify-between text-lg leading-[30px] text-dark"
                      >
                        <span>{item}</span>
                        <Image src={blackArrow} width={24} height={18} alt="" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </IWrapper>
      <IWrapper>
        <div className="bg-primary flex flex-col md:flex-row mt-[60px] md:mt-[75px] px-5 pt-[30px] pb-[45px]  md:py-[45px] md:px-[30px] lg:px-[60px] justify-center gap-[35px] md:justify-between mb-6 md:mb-10 items-center text-dark">
          <h3 className="text-white text-2xl font-medium text-center sm:text-left">
            Do you also want to change your world?
          </h3>
          <button className="py-[15px] px-[30px] bg-white text-left text-2xl font-medium">
            Visit the VU Master’s Event
          </button>
        </div>
      </IWrapper>
    </div>
  );
}
