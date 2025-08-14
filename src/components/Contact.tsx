import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Clock, Users } from "lucide-react";

const Contact = () => {
  const handleCall = () => {
    window.open('tel:+919346764466');
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in accommodation at Sri Sai Hostels. Could you please provide more details?");
    window.open(`https://wa.me/919346764466?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-soft-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contact us today to book your accommodation or schedule a visit. We're here to help you find your perfect home away from home.
          </p>
        </div>

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

        <div className="text-center">
          <Card className="inline-block border border-border shadow-card">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
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
  );
};

export default Contact;