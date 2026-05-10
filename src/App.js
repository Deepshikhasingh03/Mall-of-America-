import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { useAppStore, navigationSections } from "./store/useAppStore";
import { Sidebar } from "./components/Sidebar";
import { HeroSection } from "./sections/HeroSection";

const WhyMoaSection = lazy(() =>
  import("./sections/WhyMoaSection").then((m) => ({ default: m.WhyMoaSection }))
);
const RetailSection = lazy(() =>
  import("./sections/RetailSection").then((m) => ({ default: m.RetailSection }))
);
const LuxurySection = lazy(() =>
  import("./sections/LuxurySection").then((m) => ({ default: m.LuxurySection }))
);
const DiningSection = lazy(() =>
  import("./sections/DiningSection").then((m) => ({ default: m.DiningSection }))
);
const EntertainmentSection = lazy(() =>
  import("./sections/EntertainmentSection").then((m) => ({
    default: m.EntertainmentSection,
  }))
);
const EventsSection = lazy(() =>
  import("./sections/EventsSection").then((m) => ({ default: m.EventsSection }))
);
const VenuesSection = lazy(() =>
  import("./sections/VenuesSection").then((m) => ({ default: m.VenuesSection }))
);
const DemographicsSection = lazy(() =>
  import("./sections/DemographicsSection").then((m) => ({
    default: m.DemographicsSection,
  }))
);
const SponsorshipSection = lazy(() =>
  import("./sections/SponsorshipSection").then((m) => ({
    default: m.SponsorshipSection,
  }))
);
const LeasingSection = lazy(() =>
  import("./sections/LeasingSection").then((m) => ({ default: m.LeasingSection }))
);
const ContactSection = lazy(() =>
  import("./sections/ContactSection").then((m) => ({ default: m.ContactSection }))
);

const SectionLoader = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
  </div>
);

function App() {
  const { setActiveSection } = useAppStore();

  useEffect(() => {
    const sectionIds = navigationSections.map((s) => s.id);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);
            const section = navigationSections.find((s) => s.id === id);
            if (section) {
              window.history.replaceState(null, "", section.path);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const timer = setTimeout(() => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }, 500);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [setActiveSection]);

  // On load, scroll to section if URL has a path
  useEffect(() => {
    const path = window.location.pathname;
    const section = navigationSections.find((s) => s.path === path);
    if (section && section.id !== "hero") {
      const timer = setTimeout(() => {
        const el = document.getElementById(section.id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 800);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-dark min-h-screen">
        <Sidebar />
        <main>
          <HeroSection />
          <Suspense fallback={<SectionLoader />}>
            <WhyMoaSection />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <RetailSection />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <LuxurySection />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <DiningSection />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <EntertainmentSection />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <EventsSection />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <VenuesSection />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <DemographicsSection />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <SponsorshipSection />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <LeasingSection />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <ContactSection />
          </Suspense>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
