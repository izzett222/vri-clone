import Image from "next/image";
import Link from "next/link";
import blog from "/public/blog.webp";
import blackArrow from "/public/black-right.svg";
import right from "/public/right-small.svg";
import IWrapper from "./IWrapper";
export default function Blog() {
  const data = [
    {
      img: blog,
      title: " Vrije Schrijver (Writer in Residence) ",
    },
    {
      img: blog,
      title: " Vrije Schrijver (Writer in Residence) ",
    },
    {
      img: blog,
      title: " Vrije Schrijver (Writer in Residence) ",
    },
    {
      img: blog,
      title: " Vrije Schrijver (Writer in Residence) ",
    },
  ];
  return (
    <div className="bg-white py-[30px] md:py-[60px]">
      <IWrapper>
        <h2 className="text-sec text-[30px] leading-[36px] md:text-[38px] md:leading-[56px] font-light mb-[15px] md:mb-[25px] ">
        We are VU Amsterdam
        </h2>
        <div className="flex -mx-5 overflow-hidden xl:justify-center 2xl:justify-start pb-[60px] ">
          {data.map((el, i) => {
            return (
              <Link
                key={i}
                href={"/"}
                className="block hover:shadow-small duration-200 w-[91.6666667%] md:w-1/2 flex-shrink-0 flex-grow-0 p-5 xl:w-[33.3333%] lg:w-[41.666666%]"
              >
                <Image src={el.img} alt="" />
                <h3 className="text-2xl text-sec font-light mt-[30px]">
                  {el.title}
                </h3>
                <p className="text-lg text-dark flex justify-between mt-2.5">
                  Read more <Image src={blackArrow} className={"w-4"} alt="" />
                </p>
              </Link>
            );
          })}
        </div>
        <div className="flex justify-end ">
          <div className="bg-[#fcd3b6] justify-between px-4 flex w-[120px] h-[60px]">
            <Image
              src={right}
              width={20}
              height={24}
              className={"rotate-180"}
              alt=""
            />
            <Image src={right} alt="" width={20} height={24} />
          </div>
        </div>
      </IWrapper>
    </div>
  );
}
