import Image from "next/image";
import right from "/public/right-small.svg";
import Link from "next/link";
import blackArrow from "/public/black-right.svg";
export default function Impact() {
    const data = [
        {
            title: "Ukraine",
            text: "Information and support"
        },
        {
            title: "Ukraine",
            text: "Information and support"
        }
    ]
  return (
    <div className="pt-10 bg-[#faf7f5]">
      <h2 className="px-5 sm:px-[30px] text-sec font-light text-[38px] leading-[56px] mb-[15px] md:mb-[25px]">
        impact
      </h2>
      <div>
        <div className="relative w-full h-[188px] md:h-[431px] lg:h-[575px]">
          <Image src={"/impact.webp"} alt="" fill className="object-cover" />
          <div className="absolute bottom-0 right-0 bg-[#fcd3b6] md:hidden justify-between px-4 flex w-[120px] h-[60px]">
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
        <div className="md:w-[576px] relative px-[30px] pt-[30px] pb-[60px] md:-translate-y-1/2 bg-white shadow-small mx-auto">
          <h4 className="text-2xl text-sec font-light">Science to Impact</h4>
          <p className="text-dark my-[15px]">
            An interview with entrepreneurial scientist Davide Iannuzzi, Chief
            Impact Officer of Vrije Universiteit Amsterdam
          </p>
          <Link href={"/"} className="flex text-lg font-medium text-dark gap-4">
            Read more{" "}
            <Image src={"/black-right.svg"} alt="" width={16} height={18} />
          </Link>
          
          <div className="absolute hidden md:flex justify-end bottom-0 left-0 right-0 gap-[25px]">
            <div className="flex gap-5 items-center">
              <div className="w-5 h-5 rounded-full bg-sec"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-sec"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-sec"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-sec"></div>
            </div>
            <div className="absolute- bottom-0 right-0 bg-[#fcd3b6] justify-between px-4 flex w-[120px] h-[60px]">
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
        </div>
      </div>
      <div className="bg-white py-[60px] px-5 flex flex-col gap-5">
        {data.map((el, i) => {
            return (
                <div key={i} className="py-[25px] shadow-small gap-5 flex flex-col bg-white px-[30px]">
                    <h3 className="text-2xl font-light text-[#008053]">{el.title}</h3>
                    <p className="text-lg text-dark font-light">{el.text}</p>
                    <div className="flex justify-end">
                        <Image src={blackArrow} width={16} height={16} alt="" />
                    </div>
                </div>
            )
        })}
      </div>
    </div>
  );
}
