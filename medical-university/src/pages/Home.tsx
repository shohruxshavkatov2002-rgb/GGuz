import { Hero } from "../components/Hero";
import {
  QuickSection,
  AboutSection,
  ProgramsSection,
  CampusSection,
  InternationalSection,
  NewsSection,
  CustomBlocksSection,
  AppSection,
  FAQSection,
} from "../components/sections";
import { ApplyForm } from "../components/ApplyForm";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickSection />
      <AboutSection />
      <ProgramsSection />
      <CampusSection />
      <InternationalSection />
      <NewsSection />
      <CustomBlocksSection />
      <AppSection />
      <FAQSection />
      <ApplyForm />
    </>
  );
}
