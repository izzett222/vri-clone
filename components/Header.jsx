import Image from "next/image";
import menu from "/public/menu.svg";
import search from "/public/search.svg";
import profile from "/public/profile.svg";
import NavBar from "./NavBar";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  function handleClick() {
    console.log("open", open);
    setOpen(!open);
  }
  console.log(open);
  return (
    <header className="bg-white z-40 shadow-small">
      <div className="flex justify-between items-center  h-[60px] sm:h-[75px] shadow-small-">
        <div className="w-[164.44px] h-10 sm:w-[185px] sm:h-[45px] relative ml-5 sm:ml-[30px]">
          <Image
            src="https://vu.nl/assets/images/VU-logo-nobg.svg"
            alt=""
            fill
          />
        </div>
        <div className="flex items-center px-5 sm:px-[30px] gap-3 bg-[#f2efed] h-[60px] sm:h-[75px]">
          <span className="text-2xl font-light text-[#333]">NL</span>
          <Image src={profile} alt="" width={30} height={30} />
          <Image src={search} alt="" width={30} height={30} />
          <button onClick={handleClick}>
            <Image src={menu} alt="" width={30} height={30} />
          </button>
        </div>
      </div>
      {open && <NavBar />}
    </header>
  );
}
