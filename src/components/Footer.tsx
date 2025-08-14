import { MapPin, Phone, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Sri Sai Hostels</h3>
            <p className="text-primary-foreground/80 mb-4">
              Premium accommodation for working professionals and students in Hyderabad. 
              Where comfort meets community.
            </p>
            <div className="flex items-center space-x-2 text-primary-foreground/80">
              <Heart className="h-4 w-4 fill-current" />
              <span className="text-sm">Made with care for our residents</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <button 
                  onClick={() => document.getElementById('amenities')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary-foreground transition-colors"
                >
                  Amenities
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary-foreground transition-colors"
                >
                  Reviews
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/locations')}
                  className="hover:text-primary-foreground transition-colors"
                >
                  Locations
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary-foreground transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Pragathi Nagar, Ramanthapur,<br />
                  Hyderabad, Telangana 500013
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a 
                  href="tel:9346764466" 
                  className="text-sm hover:text-primary-foreground transition-colors"
                >
                  9346764466
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Sri Sai Hostels. All rights reserved. | Designed for modern professionals and students.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;