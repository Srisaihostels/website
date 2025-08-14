import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Amenities from "@/components/Amenities";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Amenities />
      <Reviews />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
