import Image from "next/image";
import menu from "/public/menu.svg";
import search from "/public/search.svg";
import profile from "/public/profile.svg";
import cross from "/public/cross.svg";
import NavBar from "./NavBar";
import { useState } from "react";
import Wrapper from "./Wrapper";

export default function Header() {
  const [open, setOpen] = useState(false);
  function handleClick() {
    console.log("open", open);
    setOpen(!open);
  }
  console.log(open);
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40">
        <Wrapper>
          <div className={`flex justify-between relative  ${!open && 'shadow-small'} items-center bg-white  h-[60px] sm:h-[75px]`}>
            {open && <div className="absolute inset-0 w-full h-full bg-white z-10"></div>}
            <div className="w-[164.44px] h-10 sm:w-[185px] sm:h-[45px] relative ml-5 sm:ml-[30px]">
              <Image
                src="https://vu.nl/assets/images/VU-logo-nobg.svg"
                alt=""
                fill
              />
            </div>
            <div className="flex items-center px-5 sm:px-[30px] gap-3 bg-[#f2efed] h-[60px] z-40 sm:h-[75px]">
              <span className={`${open && "hidden"} text-2xl font-light text-[#333]`}>NL</span>
              <Image src={profile} alt="" width={30} height={30} className={`${open && "hidden"}`} />
              <Image src={search} alt="" width={30} height={30} className={`${open && "hidden"}`} />
              <button onClick={handleClick} className={""}>
                {!open ? <Image src={menu} alt="" width={30} height={30} /> :
                <Image src={cross} alt="" width={30} height={30} className={`${open && 'rotate-180'} duration-700`} />}
              </button>
            </div>
          </div>
        </Wrapper>
      </header>
      {open && <NavBar />}
    </>
  );
}
