import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wifi, UtensilsCrossed, Users, Shield, Coffee, Flower2, Home, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import commonAreaImage from "@/assets/common-area.jpg";
import gardenImage from "@/assets/garden-area.jpg";

const Amenities = () => {
  const navigate = useNavigate();
  
  const amenities = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Safe & Secure Hostel",
      description: "24/7 security with CCTV monitoring and gated entry system. Safe accommodation for girls and boys hostel in Ramanthapur."
    },
    {
      icon: <Wifi className="h-8 w-8 text-primary" />,
      title: "High-Speed WiFi",
      description: "Reliable high-speed internet connection perfect for remote work and online studies. Hostel with WiFi in Hyderabad."
    },
    {
      icon: <UtensilsCrossed className="h-8 w-8 text-primary" />,
      title: "Mess Facility & Food",
      description: "Nutritious, homely meals prepared with care. Hostel with mess facility Hyderabad. Cooking facilities also available."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Student & Professional Network",
      description: "Connect with like-minded students and working professionals. Perfect for student hostel and corporate PG in Ramanthapur."
    },
    {
      icon: <Coffee className="h-8 w-8 text-primary" />,
      title: "Common Areas & Attached Bathrooms",
      description: "Comfortable shared spaces with attached bathrooms. Hostel with attached bathroom Hyderabad for your convenience."
    },
    {
      icon: <Flower2 className="h-8 w-8 text-primary" />,
      title: "Garden & 24/7 Water Supply",
      description: "Peaceful garden area with beautiful plants. Hostel with 24/7 water supply Hyderabad for uninterrupted comfort."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />
      
      {/* Header Section */}
      <div className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-white/80 mb-8 max-w-4xl mx-auto">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center space-x-1 hover:text-white transition-colors"
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </button>
            <ChevronRight className="h-4 w-4" />
            <span>Amenities</span>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Hostel Amenities in Ramanthapur Hyderabad
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
              Modern hostel with WiFi, AC rooms, attached bathrooms, mess facility & 24/7 water supply. 
              Safe accommodation for students & working professionals near Osmania University.
            </p>
          </div>
        </div>
      </div>

      {/* Amenities Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
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
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Amenities;
