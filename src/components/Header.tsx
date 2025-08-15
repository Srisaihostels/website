import { Button } from "@/components/ui/button";
import { Phone, MapPin, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => {
              navigate('/');
              // Scroll to hero section after navigation
              setTimeout(() => {
                window.scrollTo(0, 0);
              }, 100);
            }}
            className="hover:opacity-80 transition-opacity"
          >
            <div className="flex items-center space-x-3">
              <img 
                src="/Logo.jpg" 
                alt="SRI SAI HOSTELS Logo" 
                className="h-12 w-auto"
              />
              <h1 className="text-2xl font-bold text-primary hidden sm:block">Sri Sai Hostels</h1>
            </div>
          </button>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => navigate('/amenities')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Amenities
          </button>
          <button 
            onClick={() => navigate('/reviews')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Reviews
          </button>
          <button 
            onClick={() => navigate('/locations')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Locations
          </button>
          <Button 
            onClick={() => navigate('/contact')}
            className="bg-hero-gradient hover:opacity-90 transition-opacity"
          >
            Contact Us
          </Button>
        </nav>

        <div className="md:hidden flex items-center space-x-2">
          <Button 
            size="sm" 
            onClick={() => window.open('tel:9346764466')}
            className="bg-hero-gradient hover:opacity-90"
          >
            <Phone className="h-4 w-4" />
          </Button>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2"
          >
            {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <button 
                onClick={() => { navigate('/amenities'); setIsMobileMenuOpen(false); }}
                className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Amenities
              </button>
              <button 
                onClick={() => { navigate('/reviews'); setIsMobileMenuOpen(false); }}
                className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Reviews
              </button>
              <button 
                onClick={() => { navigate('/locations'); setIsMobileMenuOpen(false); }}
                className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Locations
              </button>
              <Button 
                onClick={() => { navigate('/contact'); setIsMobileMenuOpen(false); }}
                className="w-full bg-hero-gradient hover:opacity-90 transition-opacity"
              >
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;