import right from "/public/white-right.svg"
import Image from "next/image";
export default function Footer() {
  const data = [
    "Privacy Statement",
    "Disclaimer",
    "Safety at VU Amsterdam",
    "Colofon",
    "Cookie Settings",
    "Web archive",
  ];
  return <footer className="bg-primary py-[30px] px-5 sm:px-[30px]">
    <div className="flex gap-x-3 gap--1 flex-wrap 2xl:mx-[130px]">
        {data.map((el, i) => {
            return <div key={i} className="text-white leading-[27px] flex items-center gap-1">
                <span>{el}</span>
                <Image src={right} className="w-4" alt="" />
            </div>
        })}
    </div>
    <p className="text-white mt-5 2xl:mx-[130px]">Copyright © 2023 - Vrije Universiteit Amsterdam</p>
  </footer>;
}
