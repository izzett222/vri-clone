import IWrapper from "./IWrapper";

export default function Careers() {
  return (
    <div className="bg-[#FAF7F5] py-[30px] md:py-[45px] lg:py-[60px]">
      <IWrapper>
        <div className="bg-primary flex flex-col md:flex-row 2xl:mx-[130px]  py-[45px] px-5 md:px-[30px] lg:px-[60px] justify-center gap-3 md:justify-between my-10- items-center text-dark">
          <h3 className="text-white text-[22px] leading-[33px] md:text-2xl font-medium w-max">
            Working at VU Amsterdam?
          </h3>
          <button className="w-full md:w-auto py-[15px] px-[30px] bg-white text-2xl font-medium">
            Take a look at our vacancies!
          </button>
        </div>
      </IWrapper>
    </div>
  );
}
