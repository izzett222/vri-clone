import Image from "next/image";
import blackArrow from "/public/black-right.svg";
export default function Tour() {
  const data = [
    {
      title: "VU Campus Tour",
    },
  ];
  return (
    <div className="bg-[#FAF7F5] px-5 sm:px-[30px] py-[30px] md:py-[60px]">
      <h2 className="text-[#008053] text-[30px] leading-[36px] md:text-[38px] md:leading-[56px] font-light mb-[15px] md:mb-[25px] 2xl:mx-[130px]">
        Take a look
      </h2>
      <div className="2xl:mx-[130px]">
        {data.map((el, i) => {
          return (
            <div
              key={i}
              className=" shadow-small justify-between h-40 md:h-[240px]  flex flex-col w-full sm:w-[50%] lg:w-[33.3333%] bg-white p-[30px]"
            >
              <h3 className="text-[22px] leading-[32px] md:text-2xl font-light text-[#008053]">{el.title}</h3>
              <div className="flex justify-end">
                <Image src={blackArrow} width={16} height={16} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
