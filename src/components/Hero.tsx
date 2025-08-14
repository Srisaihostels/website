import { Button } from "@/components/ui/button";
import { MapPin, Phone, Star } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-soft-gradient">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary">
                <Star className="h-5 w-5 fill-current" />
                <span className="text-sm font-medium">Premium Student Accommodation</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Your <span className="text-primary">Home Away From Home</span> in Hyderabad
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Experience premium accommodation designed for working professionals and students. 
                Clean, comfortable, and connected - where professionals meet and friendships flourish.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-hero-gradient hover:opacity-90 transition-opacity text-lg px-8 py-6"
                onClick={() => window.open('tel:9346764466')}
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <MapPin className="h-5 w-5 mr-2" />
                View Location
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>Pragathi Nagar, Hyderabad</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span>Highly Rated</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-soft">
              <img 
                src={heroImage} 
                alt="Modern hostel room with plants and natural lighting"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-card border border-border">
              <div className="text-2xl font-bold text-primary">100+</div>
              <div className="text-sm text-muted-foreground">Happy Residents</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;