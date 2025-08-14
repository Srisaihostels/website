import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Clock, Train, Users, Star, Home, ChevronRight, Users2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

const Locations = () => {
  const navigate = useNavigate();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedHostel, setSelectedHostel] = useState<string>('');

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const locations = [
    {
      id: 1,
      name: "Sri Sai Women's Hostel - Pragathi Nagar",
      address: "Pragathi Nagar, Ramanthapur, Hyderabad, Telangana 500013",
      description: "Our flagship location in the heart of Hyderabad, offering premium accommodation for working women and students. Located in a peaceful residential area with easy access to IT corridors and shopping centers.",
      features: [
        "Peaceful residential environment",
        "Easy access to IT hubs",
        "Well-connected public transport",
        "Nearby shopping centers",
        "24/7 security",
        "Modern amenities"
      ],
      nearby: [
        "NSL (Walking Distance)",
        "IT Corridors (Easy Access)",
        "Public Transport (Well Connected)",
        "Shopping Centers (Nearby)"
      ],
      capacity: "100+ students",
      rating: "4.8/5",
      gender: "Women Only",
      googleMapsUrl: "https://www.google.com/maps/place/Sri+Sai+Womens+Hostel/@17.3959865,78.543188,16z/data=!4m15!1m8!3m7!1s0x3bcb9918037b1483:0xa33ea3b8398a01a9!2sPragathi+Nagar,+Ramanthapur,+Hyderabad,+Telangana,+India!3b1!8m2!3d17.3930072!4d78.5423233!16s%2Fg%2F1hm6s24lz!3m5!1s0x3bcb9901509cfd63:0xfec327defb324644!8m2!3d17.3969989!4d78.5417328!16s%2Fg%2F11ns900j1m"
    },
    {
      id: 2,
      name: "Sri Sai Men's Hostel - Ramanthapur near DMart",
      address: "Ramanthapur, Hyderabad, Telangana 500013",
      description: "Located in Ramanthapur near DMart, this hostel is perfect for students and professionals. Offers modern facilities in a convenient location with easy access to shopping and public transport.",
             features: [
         "Convenient location near DMart",
         "Easy access to shopping centers",
         "Modern infrastructure",
         "High-speed internet",
         "Study rooms and libraries",
         "24/7 security"
       ],
      nearby: [
        "NSL (Walking Distance)",
        "IT Corridors (Easy Access)",
        "Public Transport (Well Connected)",
        "Shopping Centers (Nearby)"
      ],
      capacity: "40+ students",
      rating: "4.9/5",
      gender: "Men Only",
      googleMapsUrl: "https://www.google.com/maps/place/Ramanthapur,+Hyderabad,+Telangana"
    },
    {
      id: 3,
      name: "Sri Sai Women's Hostel - Ramanthapur",
      address: "Ramanthapur, Hyderabad, Telangana 500013",
      description: "Our newest location in Ramanthapur, combining traditional charm with modern amenities. Perfect for students attending nearby universities and colleges. Located in a vibrant area with easy access to educational institutions.",
             features: [
         "Vibrant Ramanthapur location",
         "Near major universities",
         "Traditional yet modern facilities",
         "Cultural diversity",
         "Affordable pricing",
         "Community atmosphere"
       ],
      nearby: [
        "Universities (Walking Distance)",
        "Railway Station (Easy Access)",
        "Bus Stand (Well Connected)",
        "Markets and Bazaars (Nearby)"
      ],
      capacity: "35+ students",
      rating: "4.7/5",
      gender: "Women Only",
      googleMapsUrl: "https://www.google.com/maps/place/Ramanthapur,+Hyderabad,+Telangana"
    }
  ];

  const openGoogleMaps = (url: string) => {
    window.open(url, '_blank');
  };

  const openContactModal = (hostelName: string) => {
    setSelectedHostel(hostelName);
    setIsContactModalOpen(true);
  };

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
            <span>Locations</span>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Our Hostel Locations
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
              Discover our premium hostel accommodations across Hyderabad, including women-only and men-only facilities, strategically located for your convenience and comfort.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <span className="bg-white/20 px-4 py-2 rounded-full text-white text-sm font-medium">Women Only</span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-white text-sm font-medium">Men Only</span>
            </div>
          </div>
        </div>
      </div>

      {/* Locations Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {locations.map((location) => (
              <Card key={location.id} className="border border-border shadow-card hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <CardTitle className="text-xl text-foreground leading-tight">
                      {location.name}
                    </CardTitle>
                    <div className="flex items-center space-x-1 bg-primary/10 px-2 py-1 rounded-full">
                      <Star className="h-4 w-4 text-primary fill-current" />
                      <span className="text-sm font-semibold text-primary">{location.rating}</span>
                    </div>
                  </div>
                  <CardDescription className="text-base text-muted-foreground">
                    {location.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Address</p>
                      <p className="text-sm text-muted-foreground">{location.address}</p>
                    </div>
                  </div>

                                     {/* Capacity */}
                   <div className="flex items-center space-x-3">
                     <Users className="h-5 w-5 text-primary" />
                     <div>
                       <p className="font-medium text-foreground">Capacity</p>
                       <p className="text-sm text-muted-foreground">{location.capacity}</p>
                     </div>
                   </div>

                   {/* Gender */}
                   <div className="flex items-center space-x-3">
                     <Users2 className="h-5 w-5 text-primary" />
                     <div>
                       <p className="font-medium text-foreground">Accommodation Type</p>
                       <p className="text-sm text-muted-foreground">{location.gender}</p>
                     </div>
                   </div>

                  {/* Features */}
                  <div>
                    <p className="font-medium text-foreground mb-2">Key Features</p>
                    <div className="grid grid-cols-2 gap-2">
                      {location.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Nearby Landmarks */}
                  <div>
                    <p className="font-medium text-foreground mb-2">Nearby Landmarks</p>
                    <div className="space-y-1">
                      {location.nearby.map((landmark, index) => (
                        <div key={index} className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">{landmark.split(' (')[0]}</span>
                          <span className="text-primary font-medium">{landmark.match(/\((.*?)\)/)?.[1]}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-4">
                    <Button 
                      onClick={() => openGoogleMaps(location.googleMapsUrl)}
                      className="flex-1 bg-hero-gradient hover:opacity-90 transition-opacity"
                    >
                      <Navigation className="h-4 w-4 mr-2" />
                      Get Directions
                    </Button>
                                         <Button 
                       variant="outline"
                       onClick={() => openContactModal(location.name)}
                       className="flex-1"
                     >
                       Contact Us
                     </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="border border-border shadow-card max-w-2xl mx-auto">
              <CardContent className="py-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Can't Decide Which Location?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Our team is here to help you choose the perfect location based on your needs, budget, preferences, and accommodation type requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                     <Button 
                     onClick={() => openContactModal('')}
                     className="bg-hero-gradient hover:opacity-90 transition-opacity"
                   >
                     Get Personalized Guidance
                   </Button>
                  <Button 
                    variant="outline"
                    onClick={() => navigate('/')}
                  >
                    Back to Home
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        hostelName={selectedHostel}
      />
    </div>
  );
};

export default Locations;
