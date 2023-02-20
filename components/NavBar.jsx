import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Wrapper from "./Wrapper";
import right from "/public/black-right.svg";
import plus from "/public/plus.svg";
import minus from "/public/minus.svg";
import home from "/public/home.svg";
import rightSmall from "/public/right-small.svg";

export default function NavBar() {
  const [extra, setExtra] = useState(0);
  const data = [
    { text: "About VU Amsterdam", link: "/about" },
    { text: "VU press office", link: "/office" },
    { text: "Alumni", link: "/alumni" },
    { text: "Student", link: "/student" },
    { text: "Employee", link: "/employee" },
  ];
  const links = [
    [
      { text: "Bachelors degree programmes", link: "/" },
      { text: "Masters degree programmes", link: "/" },
      { text: "Masters degree programmes", link: "/" },
      { text: "Exchange Programme", link: "/" },
    ],
    [
      { text: "Home Research", link: "/research" },
      { text: "Scientists of VU Amsterdam", link: "/scientists" },
    ],
  ];
  const createHandle = (position) => {
    return () => {
      setExtra(position);
    };
  };
  return (
    <div className="fixed top-[60px] bg-[#EEEBE9] z-50 sm:top-[75px] left-0 right-0">
      <Wrapper>
        <div className="bg-white h-screen text-2xl text-dark font-light">
          <div className="px-[30px] 2xl:px-[132px] pt-16">
            <div className="flex">
              <div className="flex-1 md:pr-[100px] flex flex-col gap-10">
                <div className={`${extra === 1 && 'text-primary'} flex justify-between`} onClick={createHandle(1)}>
                  Study at VU Amsterdam {extra === 1 ? <Image src={minus} alt="" /> : <Image src={plus} alt="" />}
                </div>
                <div className={`${extra === 2 && 'text-primary'} flex justify-between`} onClick={createHandle(2)}>
                  Research {extra === 2 ? <Image src={minus} alt="" /> : <Image src={plus} alt="" />}
                </div>
                {data.map((el, i) => {
                  return (
                    <Link
                      href={el.link}
                      className="flex justify-between"
                      key={i}
                    >
                      {el.text}
                      <Image src={right} alt="" />
                    </Link>
                  );
                })}
              </div>
              {
                <div className="flex-1 hidden pr-[100px]  md:flex flex-col gap-10">
                  {!!extra &&
                    links[extra - 1].map((el, i) => {
                      return (
                        <Link
                          href={el.link}
                          className="flex justify-between font-medium"
                          key={i}
                        >
                          {el.text}
                          <Image src={right} alt="" />
                        </Link>
                      );
                    })}
                </div>
              }
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
