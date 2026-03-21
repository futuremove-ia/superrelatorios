import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import ReportExamples from "@/components/ReportExamples";
import ReportShowcase from "@/components/ReportShowcase";
import Benefits from "@/components/Benefits";
import Trust from "@/components/Trust";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";
import { useTranslation } from "react-i18next";


const Index = () => {
  const { t } = useTranslation();
  return (

    <div className="min-h-screen">
      <SEO 
        title={t('seo.index_title')} 
        description={t('seo.index_desc')}
      />

      <StructuredData />
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <ReportShowcase />
      <ReportExamples />
      <Benefits />
      <Trust />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
