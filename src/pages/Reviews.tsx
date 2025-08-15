import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Home, ChevronRight, Quote } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Reviews = () => {
  const navigate = useNavigate();
  
  const reviews = [
    {
      text: "My sister joined this hostel last month and she's really happy here. The administration is very cooperative and it's a great place to work from home. If you're near NSL, this is definitely worth considering.",
      rating: 5,
      author: "Priya Sharma",
      date: "January 2025"
    },
    {
      text: "Food quality is good and the atmosphere feels very homely. The place is peaceful and the fees are reasonable compared to other hostels in the area. Would recommend for students.",
      rating: 4,
      author: "Anjali Patel",
      date: "December 2024"
    },
    {
      text: "I've been staying here for 6 months now and overall it's been a positive experience. The rooms are clean and well-maintained. The staff is friendly and helpful. The location is convenient for both work and studies. The WiFi is reliable which is important for my remote work.",
      rating: 4,
      author: "Meera Reddy",
      date: "November 2024"
    },
    {
      text: "Good facilities and the staff is quite helpful. The location is convenient for students and working professionals. The security is good and I feel safe here. The common areas are well-maintained.",
      rating: 4,
      author: "Kavya Singh",
      date: "October 2024"
    },
    {
      text: "The rooms are clean and the food is decent. The community here is supportive and I've made some good friends. The garden area is nice for relaxation. The hostel has exceeded my expectations.",
      rating: 5,
      author: "Riya Gupta",
      date: "September 2024"
    },
    {
      text: "Value for money is good. The amenities are satisfactory and the security makes me feel safe. The common areas are nice for socializing with other residents. The location is convenient for daily commute.",
      rating: 4,
      author: "Zara Khan",
      date: "August 2024"
    },
    {
      text: "I've been here for 3 months and it's been okay. The rooms are basic but clean. The food could be better sometimes, but overall it's manageable. The staff is friendly and the location is good.",
      rating: 3,
      author: "Aditi Verma",
      date: "July 2024"
    },
    {
      text: "The hostel is well-located and the facilities are adequate. The staff is helpful and the environment is peaceful. Good for students who want a quiet place to study. The WiFi works well.",
      rating: 4,
      author: "Sneha Iyer",
      date: "June 2024"
    },
    {
      text: "I'm really happy with my stay here. The rooms are spacious and clean. The food is tasty and the staff is very caring. The location is perfect for my college. Highly recommend for female students!",
      rating: 5,
      author: "Tanvi Joshi",
      date: "May 2024"
    }
  ];

  const stats = [
    { label: "Overall Rating", value: "4.3", icon: <Star className="h-6 w-6 text-primary fill-current" /> },
    { label: "Total Reviews", value: "45+", icon: <Quote className="h-6 w-6 text-primary" /> },
    { label: "Satisfaction Rate", value: "89%", icon: <Star className="h-6 w-6 text-primary fill-current" /> }
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
            <span>Reviews</span>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              What Our Residents Say
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
              Real reviews from our happy residents who have experienced the Sri Sai Hostels difference.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-soft-gradient">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-foreground">{review.author}</span>
                    <span className="text-muted-foreground">{review.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Card className="inline-block border border-border shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Join Our Happy Community
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md">
                  Experience the comfort and community that our residents love. 
                  Book your stay today and become part of the Sri Sai Hostels family.
                </p>
                <button 
                  onClick={() => navigate('/contact')}
                  className="bg-hero-gradient hover:opacity-90 transition-opacity text-white px-8 py-3 rounded-lg font-medium"
                >
                  Contact Us Today
                </button>
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

export default Reviews;
