import Image from "next/image";
import blackArrow from "/public/black-right.svg";
import Link from "next/link";
import instagram from "/public/instagram.svg";
import linkedin from "/public/linkedin.svg";
import facebook from "/public/facebook.svg";
import twitter from "/public/twitter.svg";
import youtube from "/public/youtube.svg";

export default function Menu() {
  const icons = [instagram, linkedin, facebook, twitter, youtube];
  const programs = [
    {
      title: "VU main menu",
      items: [
        "Home",
        "Education",
        "Research",
        "About VU Amsterdam",
        "University Library",
        "VU Press Office",
        "Alumni",
      ],
    },
    {
      title: "VU main menu",
      items: [
        "Home",
        "Education",
        "Research",
        "About VU Amsterdam",
        "University Library",
        "VU Press Office",
        "Alumni",
      ],
    },
  ];
  return (
    <div className="bg-white">
      <div className="flex flex-col  px-5 sm:px-[30px] md:flex-row flex-wrap py-[60px] 2xl:mx-[130px] gap-5">
        {programs.map((el, i) => {
           return (
            <div key={i} className={"flex-1 p-[30px]-"}>
              <h2 className="text-[38px] text-primary mb-5 leading-[56px] flex w-full justify-between">
                {el.title}
              </h2>
              <div className="flex md:shadow-small p-5 flex-col gap-1">
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
        <div className={"flex-1 flex flex-col min-w-full lg:min-w-0"}>
          <h2 className="text-[38px] text-primary mb-5 leading-[56px] flex w-full">
            Featured
          </h2>
          <div className="md:shadow-small p-5 flex-1 flex flex-col sm:flex-row gap-[60px] sm:items-center lg:items-stretch lg:flex-col justify-between">
            <div className="flex flex-col gap-1 flex-1 ">
              {["Home", "Education", "Research"].map((item, e) => {
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
            <div className="flex gap-2 flex-1">
              {icons.map((el, i) => {
                return (
                  <div
                    key={i}
                    className="bg-primary w-[45px] h-[45px] p-1 flex items-center justify-center"
                  >
                    <Image className="w-full h-full" src={el} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
