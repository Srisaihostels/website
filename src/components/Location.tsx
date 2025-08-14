import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Clock, Train, Map as MapIcon } from "lucide-react";
import Map from "@/components/Map";
import { useNavigate } from "react-router-dom";

const Location = () => {
  const navigate = useNavigate();
  
  const openGoogleMaps = () => {
    window.open('https://www.google.com/maps/place/Sri+Sai+Womens+Hostel/@17.3959865,78.543188,16z/data=!4m15!1m8!3m7!1s0x3bcb9918037b1483:0xa33ea3b8398a01a9!2sPragathi+Nagar,+Ramanthapur,+Hyderabad,+Telangana,+India!3b1!8m2!3d17.3930072!4d78.5423233!16s%2Fg%2F11ns900j1m', '_blank');
  };

  return (
    <section id="location" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Main Location - Pragathi Nagar (Women Only)
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            Conveniently located with easy access to IT corridors and educational institutions. This location is specifically designed for women and girls.
          </p>
          <Button 
            onClick={() => navigate('/locations')}
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white transition-colors"
          >
            <MapIcon className="h-4 w-4 mr-2" />
            View All Locations
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="border border-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span>Address</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-foreground mb-4">
                  Pragathi Nagar, Ramanthapur,<br />
                  Hyderabad, Telangana 500013, India
                </p>
                <Button 
                  onClick={openGoogleMaps}
                  className="bg-hero-gradient hover:opacity-90 transition-opacity"
                >
                  <Navigation className="h-4 w-4 mr-2" />
                  Get Directions
                </Button>
              </CardContent>
            </Card>

            <Card className="border border-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Train className="h-6 w-6 text-primary" />
                  <span>Nearby Landmarks</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-foreground">NSL (Nearby Area)</span>
                  <span className="text-muted-foreground">Walking Distance</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground">IT Corridors</span>
                  <span className="text-muted-foreground">Easy Access</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground">Public Transport</span>
                  <span className="text-muted-foreground">Well Connected</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground">Shopping Centers</span>
                  <span className="text-muted-foreground">Nearby</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Map />

            <Card className="border border-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-6 w-6 text-primary" />
                  <span>Why This Location?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Our strategic location in Pragathi Nagar offers the perfect balance of peaceful 
                  residential environment and convenient access to Hyderabad's major IT hubs, 
                  educational institutions, and commercial areas. Ideal for working professionals 
                  and students alike.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;