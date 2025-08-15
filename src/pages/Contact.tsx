import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Clock, Users, Home, ChevronRight, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  
  const handleCall = () => {
    window.open('tel:+919346764466');
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in accommodation at Sri Sai Hostels. Could you please provide more details?");
    window.open(`https://wa.me/919346764466?text=${message}`, '_blank');
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
            <span>Contact</span>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Contact Hostel in Ramanthapur Hyderabad
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
              Book your stay at the best hostel in Ramanthapur. Contact us for men's & women's hostel accommodation near Osmania University, bus depot & metro station.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="text-center border border-border shadow-card hover:shadow-soft transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4">
                  <Phone className="h-12 w-12 text-primary" />
                </div>
                <CardTitle>Call Us Directly</CardTitle>
                <CardDescription>Speak with our team immediately</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary mb-4">+919346764466</div>
                <Button 
                  onClick={handleCall}
                  className="w-full bg-hero-gradient hover:opacity-90 transition-opacity"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border border-border shadow-card hover:shadow-soft transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4">
                  <MessageCircle className="h-12 w-12 text-primary" />
                </div>
                <CardTitle>WhatsApp Chat</CardTitle>
                <CardDescription>Quick responses via message</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-semibold text-foreground mb-4">Instant Messaging</div>
                <Button 
                  onClick={handleWhatsApp}
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border border-border shadow-card hover:shadow-soft transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4">
                  <Clock className="h-12 w-12 text-primary" />
                </div>
                <CardTitle>Visit Us</CardTitle>
                <CardDescription>Schedule a personal tour</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-semibold text-foreground mb-4">Anytime</div>
                <Button 
                  onClick={handleCall}
                  variant="secondary"
                  className="w-full"
                >
                  <Users className="h-4 w-4 mr-2" />
                  Schedule Visit
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Location Info */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="border border-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span>Our Main Location</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Sri Sai Hostels - Ramanthapur</h4>
                    <p className="text-muted-foreground">
                      Ramanthapur, Hyderabad,<br />
                      Telangana 500013, India
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Nearby Landmarks</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Osmania University (Walking Distance)</li>
                      <li>• Ramanthapur Bus Depot (Nearby)</li>
                      <li>• Metro Station (Easy Access)</li>
                      <li>• Amberpet & Uppal (Well Connected)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border border-border shadow-card">
                <CardHeader>
                  <CardTitle>Why Choose Sri Sai Hostels in Ramanthapur?</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Our strategic location in Ramanthapur offers the perfect balance of peaceful 
                    residential environment and convenient access to Osmania University, bus depot, 
                    metro station, and major IT hubs. Ideal for students and working professionals 
                    seeking affordable hostel accommodation in Hyderabad.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border border-border shadow-card">
                <CardHeader>
                  <CardTitle>Business Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="font-medium">8:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-medium">10:00 AM - 4:00 PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="inline-block border border-border shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  🏡 Your New Home Awaits
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md">
                  Join our community of ambitious professionals and students who chose comfort, safety, and connection. 
                  Experience the difference of truly caring accommodation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={handleCall}
                    size="lg"
                    className="bg-hero-gradient hover:opacity-90 transition-opacity"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Book Your Stay
                  </Button>
                  <Button 
                    onClick={handleWhatsApp}
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Ask Questions
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
