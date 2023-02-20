import Image from "next/image";
import hat from "/public/hat.svg";
import medal from "/public/medal.svg";
import puzzle from "/public/puzzle.svg";
import globe from "/public/globe.svg";
import blueArrow from "/public/blue-right.svg";
import blackArrow from "/public/black-right.svg";
import Link from "next/link";

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
      title: "Education",
      items: [
        "Bachelors programmes",
        "Masters programmes",
        "Honours programme",
        "Education for professionals",
        "Study guide",
      ],
    },
  ];
  return (
    <div className="lg:-mt-20 bg-[#FEFEFE] px-5 sm:px-0 md:px-[30px]">
      <div className="flex gap-x-8 md:flex-wrap justify-center items-center py-[30px] md:px-6">
        {data.map((el, i) => {
          return (
            <div key={i} className="flex flex-col md:flex-row items-center gap-2">
              <Image
                src={el.img}
                width={30}
                className="object-cover"
                height={30}
                alt=""
              />
              <span className="md:text-lg md:font-medium text-center md:text-left">{el.text}</span>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col md:flex-row mt-[30px] pb-[60px] gap-5">
        {programs.map((el, i) => {
          return (
            <div key={i} className={"shadow-small flex-1 p-[30px]"}>
              <h2 className="text-[38px] text-primary mb-5 leading-[56px] flex w-full justify-between">
                {el.title}{" "}
                <Image src={blueArrow} width={50} height={40} alt="" />
              </h2>
              <div className="flex flex-col">
                {el.items.map((item, e) => {
                  return (
                    <Link
                      key={e}
                      href="/"
                      className="flex w-full justify-between text-lg text-dark"
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
      <div className="bg-primary flex flex-col md:flex-row  py-[45px] px-[30px] justify-center gap-3 md:justify-between my-10 items-center text-dark">
        <h3 className="text-white text-2xl font-medium w-max">
          Do you also want to change your world?
        </h3>
        <button className="py-[15px] px-[30px] bg-white text-2xl font-medium">
          Visit the VU Master’s Event
        </button>
      </div>
    </div>
  );
}
