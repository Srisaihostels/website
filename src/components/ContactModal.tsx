import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, MessageCircle, X, Send } from "lucide-react";
import { useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  hostelName?: string;
}

const ContactModal = ({ isOpen, onClose, hostelName }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    hostel: hostelName || '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can add form submission logic
    console.log('Form submitted:', formData);
    // For now, just close the modal
    onClose();
  };

  const handleCall = () => {
    window.open('tel:9346764466');
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hi! I'm interested in accommodation at ${hostelName || 'Sri Sai Hostels'}. Could you please provide more details?`);
    window.open(`https://wa.me/919346764466?text=${message}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl mx-4">
        <Card className="border border-border shadow-2xl">
          <CardHeader className="relative pb-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="absolute right-4 top-4 h-8 w-8 p-0 hover:bg-muted"
            >
              <X className="h-4 w-4" />
            </Button>
            <CardTitle className="text-2xl text-center">Contact Us</CardTitle>
            <CardDescription className="text-center">
              Get in touch with us for accommodation details and bookings
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Quick Contact Options */}
            <div className="grid grid-cols-2 gap-4">
              <Button 
                onClick={handleCall}
                className="w-full bg-hero-gradient hover:opacity-90 transition-opacity"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
              <Button 
                onClick={handleWhatsApp}
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </div>

            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Or fill out the form below and we'll get back to you
              </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hostel">Preferred Hostel</Label>
                  <Select
                    value={formData.hostel}
                    onValueChange={(value) => setFormData({ ...formData, hostel: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a hostel" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Sri Sai Women's Hostel - Pragathi Nagar">
                        Sri Sai Women's Hostel - Pragathi Nagar
                      </SelectItem>
                      <SelectItem value="Sri Sai Men's Hostel - Ramanthapur near DMart">
                        Sri Sai Men's Hostel - Ramanthapur near DMart
                      </SelectItem>
                      <SelectItem value="Sri Sai Women's Hostel - Ramanthapur">
                        Sri Sai Women's Hostel - Ramanthapur
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your requirements, preferred move-in date, or any questions you have..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div className="flex gap-4 pt-4">
                <Button
                  type="submit"
                  className="flex-1 bg-hero-gradient hover:opacity-90 transition-opacity"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            </form>

            {/* Contact Information */}
            <div className="border-t pt-6">
              <div className="text-center space-y-2">
                <p className="text-sm font-medium text-foreground">Need immediate assistance?</p>
                <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                  <span>📞 9346764466</span>
                  <span>📍 Hyderabad, Telangana</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactModal;
