import right from "/public/white-right.svg";
import Image from "next/image";
import IWrapper from "./IWrapper";
export default function Footer() {
  const data = [
    "Privacy Statement",
    "Disclaimer",
    "Safety at VU Amsterdam",
    "Colofon",
    "Cookie Settings",
    "Web archive",
  ];
  return (
    <footer className="bg-primary py-[30px]">
      <IWrapper>
        <div className="flex gap-x-3 gap--1 flex-wrap">
          {data.map((el, i) => {
            return (
              <div
                key={i}
                className="text-white leading-[27px] flex items-center gap-1"
              >
                <span>{el}</span>
                <Image src={right} className="w-4" alt="" />
              </div>
            );
          })}
        </div>
        <p className="text-white mt-5">
          Copyright © 2023 - Vrije Universiteit Amsterdam
        </p>
      </IWrapper>
    </footer>
  );
}
