import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wifi, UtensilsCrossed, Users, Shield, Coffee, Flower2, Star, MapPin, Phone, MessageCircle } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    }
  ];

  const reviews = [
    {
      text: "My sister joined this hostel last month and she's really happy here. The administration is very cooperative and it's a great place to work from home.",
      rating: 5,
      author: "Priya S."
    },
    {
      text: "Food quality is good and the atmosphere feels very homely. The place is peaceful and the fees are reasonable compared to other hostels in the area.",
      rating: 4,
      author: "Anjali P."
    },
    {
      text: "I've been staying here for 6 months now and overall it's been a positive experience. The rooms are clean and the staff is friendly and helpful.",
      rating: 4,
      author: "Meera R."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      {/* Amenities Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
                     <div className="text-center mb-16">
             <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
               Best Hostels in Ramanthapur Hyderabad
             </h2>
             <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
               Affordable hostel accommodation with WiFi, food, AC rooms & 24/7 water supply. Safe men's & women's hostel near Osmania University, bus depot & metro station.
             </p>
           </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
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

          <div className="text-center">
            <Button 
              onClick={() => navigate('/amenities')}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              View All Amenities
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews Preview */}
      <section className="py-20 bg-soft-gradient">
        <div className="container mx-auto px-4">
                     <div className="text-center mb-16">
             <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
               Hostel Reviews in Ramanthapur Hyderabad
             </h2>
             <p className="text-xl text-muted-foreground">
               Real reviews from our happy residents - 4.3★ rated hostel accommodation
             </p>
           </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {reviews.map((review, index) => (
              <Card key={index} className="border border-border shadow-card hover:shadow-soft transition-shadow">
                                 <CardContent className="p-6">
                   <div className="flex items-center mb-4">
                     {[...Array(review.rating)].map((_, i) => (
                       <Star key={i} className="h-5 w-5 text-primary fill-current" />
                     ))}
                   </div>
                   <blockquote className="text-muted-foreground leading-relaxed mb-4">
                     "{review.text}"
                   </blockquote>
                   <div className="text-sm text-muted-foreground">
                     — {review.author}
                   </div>
                 </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={() => navigate('/reviews')}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Read All Reviews
            </Button>
          </div>
        </div>
      </section>

      <Location />
      
      {/* Contact Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
                     <div className="text-center mb-16">
             <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
               Contact Hostel in Ramanthapur Hyderabad
             </h2>
             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
               Book your stay at the best affordable hostel in Ramanthapur. Contact us for men's & women's hostel accommodation.
             </p>
           </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center border border-border shadow-card">
              <CardHeader>
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Call Us Directly</CardTitle>
                <CardDescription>Speak with our team immediately</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary mb-4">+919346764466</div>
                <Button 
                  onClick={() => window.open('tel:+919346764466')}
                  className="w-full bg-hero-gradient hover:opacity-90 transition-opacity"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border border-border shadow-card">
              <CardHeader>
                <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>WhatsApp Chat</CardTitle>
                <CardDescription>Quick responses via message</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => {
                    const message = encodeURIComponent("Hi! I'm interested in accommodation at Sri Sai Hostels. Could you please provide more details?");
                    window.open(`https://wa.me/919346764466?text=${message}`, '_blank');
                  }}
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={() => navigate('/contact')}
              size="lg"
              className="bg-hero-gradient hover:opacity-90 transition-opacity"
            >
              View Full Contact Page
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
