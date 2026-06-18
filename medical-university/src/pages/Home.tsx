import { Hero } from "../components/Hero";
import {
  FeaturesSection,
  AboutSection,
  ServicesSection,
  TimelineSection,
  TeamSection,
  ReviewsSection,
  CTASection,
  NewsletterSection,
  FAQSection,
} from "../components/sections";
import {
  FEATURES,
  ABOUT,
  SERVICES,
  TIMELINE,
  TEAM,
  REVIEWS,
  CTA,
  NEWSLETTER,
  FAQ,
} from "../data/content";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesSection {...FEATURES} />
      <AboutSection {...ABOUT} />
      <ServicesSection {...SERVICES} />
      <TimelineSection {...TIMELINE} />
      <TeamSection {...TEAM} />
      <ReviewsSection {...REVIEWS} />
      <CTASection {...CTA} />
      <NewsletterSection {...NEWSLETTER} />
      <FAQSection {...FAQ} />
    </>
  );
}
