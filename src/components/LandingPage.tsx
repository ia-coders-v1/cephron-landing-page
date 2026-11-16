import { Navbar, Footer } from "./layout";
import { Hero, Problem, FeatureSections, CallToAction } from "./sections";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <FeatureSections />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
