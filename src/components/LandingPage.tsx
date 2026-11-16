import { Navbar, Footer } from "./layout";
import { Hero, Problem, FeatureSections, TechStrip, CallToAction } from "./sections";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <FeatureSections />
        <TechStrip />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
