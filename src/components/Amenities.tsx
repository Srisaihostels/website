import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wifi, UtensilsCrossed, Users, Shield, Coffee, Flower2 } from "lucide-react";
import commonAreaImage from "@/assets/common-area.jpg";
import gardenImage from "@/assets/garden-area.jpg";

const Amenities = () => {
  const amenities = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Safe & Secure",
      description: "24/7 security with CCTV monitoring and secure entry system for complete peace of mind."
    },
    {
      icon: <Wifi className="h-8 w-8 text-primary" />,
      title: "High-Speed WiFi",
      description: "Reliable high-speed internet connection perfect for remote work and online studies."
    },
    {
      icon: <UtensilsCrossed className="h-8 w-8 text-primary" />,
      title: "Tasty Home Food",
      description: "Nutritious, homely meals prepared with care. Cooking facilities also available."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Professional Network",
      description: "Connect with like-minded working professionals and students. Build lasting friendships."
    },
    {
      icon: <Coffee className="h-8 w-8 text-primary" />,
      title: "Common Areas",
      description: "Comfortable shared spaces for relaxation, study, and social interaction."
    },
    {
      icon: <Flower2 className="h-8 w-8 text-primary" />,
      title: "Garden & Plants",
      description: "Peaceful garden area with beautiful plants creating a serene environment."
    }
  ];

  return (
    <section id="amenities" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Choose Sri Sai Hostels?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide everything you need for a comfortable, safe, and enriching living experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {amenities.map((amenity, index) => (
            <Card key={index} className="border border-border shadow-card hover:shadow-soft transition-shadow">
              <CardHeader>
                <div className="mb-4">{amenity.icon}</div>
                <CardTitle className="text-xl">{amenity.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{amenity.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="relative rounded-2xl overflow-hidden shadow-card">
            <img 
              src={commonAreaImage} 
              alt="Modern common area with dining and kitchen facilities"
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground">Common Areas</h3>
              <p className="text-sm text-muted-foreground">Spacious dining and kitchen facilities</p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-card">
            <img 
              src={gardenImage} 
              alt="Peaceful garden area with plants and outdoor seating"
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground">Garden Area</h3>
              <p className="text-sm text-muted-foreground">Serene outdoor space with lush greenery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;