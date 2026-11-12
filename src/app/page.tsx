import { About } from "@/components/About";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Method } from "@/components/Method";
import { Pain } from "@/components/Pain";
import { Portfolio } from "@/components/Portfolio";
import { Results } from "@/components/Results";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { WhyUs } from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Pain />
        <Results />
        <WhyUs />
        <Method />
        <Services />
        <Portfolio />
        <Testimonials />
        <About />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
