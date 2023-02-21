import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import Info from "@/components/Info";
import Wrapper from "@/components/Wrapper";
import News from "@/components/News";
import Calendar from "@/components/Calendar";
import Careers from "@/components/Careers";
import Blog from "@/components/Blog";
import Tour from "@/components/Tour";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-[#EEEBE9] overflow-hidden">
      <Header />
      <Wrapper>
        <Hero />
      </Wrapper>
      <div className="bg-banner h-[170px] md:h-[346px] lg:h-[460px] bg-cover bg-center"></div>
      <Wrapper>
        <Info />
        <Impact />
        <News />
        <Calendar />
        <Careers />
        <Blog />
        <Tour />
        <Menu />
        <Footer />
      </Wrapper>
    </div>
  );
}
