import Image from "next/image";
import Link from "next/link";
import down from "/public/down.svg";
import blackArrow from "/public/black-right.svg";
import IWrapper from "./IWrapper";

export default function Calendar() {
  const data = [
    {
      text: "All categories",
    },
    {
      text: "Date",
    },
  ];
  const events = [
    {
      title: "PhD Defences",
      date: "20 February 2023",
      text: "PhD defence by T.J.H. Jonkers",
    },
    {
      title: "Lectures",
      date: "20 February 2023",
      text: "ABRI lunch seminar Dr. Paula Jarzabkowski",
    },
    {
      title: "Social events",
      date: "20 February 2023",
      text: "Board game night - Life is Better in 3D",
    },
    {
      title: "Other events",
      date: "20 February 2023",
      text: "VU Pride TalkS!",
    },
    {
      title: "PhD Defences",
      date: "20 February 2023",
      text: "PhD defence by T.J.H. Jonkers",
    },
    {
      title: "PhD Defences",
      date: "20 February 2023",
      text: "PhD defence by T.J.H. Jonkers",
    },
    {
      title: "PhD Defences",
      date: "20 February 2023",
      text: "PhD defence by T.J.H. Jonkers",
    },
    {
      title: "PhD Defences",
      date: "20 February 2023",
      text: "PhD defence by T.J.H. Jonkers",
    },
    {
      title: "PhD Defences",
      date: "20 February 2023",
      text: "PhD defence by T.J.H. Jonkers",
    },
    {
      title: "PhD Defences",
      date: "20 February 2023",
      text: "PhD defence by T.J.H. Jonkers",
    },
  ];
  return (
    <div className="bg-white pb-[45px]">
      <IWrapper>
        <div className="flex flex-col md:flex-row md:justify-between py-[45px] gap-6">
          <h2 className="text-[#0077b3] text-[38px] leading-[56px] font-light flex-1">
            Calendar
          </h2>
          <div className="flex gap-5">
            {data.map((el, i) => {
              return (
                <div
                  key={i}
                  className="flex-1 bg-white shadow-small flex justify-between md:w-[232px] py-2.5 px-5 items-center"
                >
                  <span className="text-lg font-medium text-dark">
                    {el.text}
                  </span>
                  <Image src={down} alt="" width={20} height={20} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="">
          <div className="flex overflow-auto hide-scroll">
            {events.map((el, i) => {
              return (
                <div
                  key={i}
                  className={`min-w-[220px] mr-[35px] lg:mr-[75px] 2xl:mr-5 ${
                    i > 3 ? "2xl:hidden" : ""
                  }`}
                >
                  <Link
                    href={"/"}
                    className="underline font-light text-lg text-dark"
                  >
                    {el.title}
                  </Link>
                  <h3 className="text-[#0077b3] text-lg font-bold">
                    {el.date}
                  </h3>
                  <p className="text-dark md:text-2xl text-lg leading-[30px] md:leading-[30px] font-light">{el.text}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            href="/"
            className="flex text-lg font-medium text-dark items-center gap-2 mt-[120px]"
          >
            View calendar <Image src={blackArrow} className={"w-4"} alt="" />
          </Link>
        </div>
      </IWrapper>
    </div>
  );
}
