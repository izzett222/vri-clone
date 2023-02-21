import Image from "next/image";
import menu from "/public/menu.svg";
import search from "/public/search.svg";
import cross from "/public/cross.svg";
import NavBar from "./NavBar";
import { useState } from "react";
import Wrapper from "./Wrapper";
import { CiUser } from 'react-icons/ci';


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
          <div className={`flex justify-between  shadow-small items-center bg-white  h-[60px] md:h-[75px]`}>
            <div className="w-[164.44px] h-10 md:w-[185px] md:h-[45px] relative ml-5 md:ml-[30px]">
              <Image
                src="https://vu.nl/assets/images/VU-logo-nobg.svg"
                alt=""
                fill
              />
            </div>
            <div className="flex items-center px-5 dm:px-[30px] gap-3 md:gap-6 bg-[#f2efed] h-[60px] z-40 md:h-[75px]">
              <span className={`${open && "hidden"} text-xl md:text-2xl font-light text-dark  opacity-85`}>NL</span>
              <CiUser className="w-6 h-6 text-dark opacity-85" />
              <Image src={search} alt="" width={25} height={25} className={`${open && "hidden"}  opacity-75`} />
              <button onClick={handleClick} className={""}>
                {!open ? <Image src={menu} alt="" width={30} height={30} className="opacity-75" /> :
                <Image src={cross} alt="" width={30} height={30} className={`${open && 'rotate-180'} duration-700 opacity-75`} />}
              </button>
            </div>
          </div>
        </Wrapper>
      </header>
      {open && <NavBar close={handleClick} />}
    </>
  );
}
 