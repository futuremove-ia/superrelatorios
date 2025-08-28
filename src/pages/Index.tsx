import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DocumentExamples from "@/components/DocumentExamples";
import HowItWorks from "@/components/HowItWorks";
import ReportExamples from "@/components/ReportExamples";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <DocumentExamples />
      <HowItWorks />
      <ReportExamples />
      <Benefits />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
