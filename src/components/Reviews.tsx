import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      text: "My sister joined this hostel, which has great administration and a good place to work from home. If you are near NSL, it's a great place to live.",
      rating: 5
    },
    {
      text: "Food is tasty. Homely atmosphere. The place is really calm and peaceful. It's worth living here. Fees is comparatively less.",
      rating: 5
    },
    {
      text: "I've been staying here for a while, and it's been a great experience. The place is clean, well-maintained, and has a friendly environment. The people here are welcoming, and it feels safe and comfortable. It's especially good for working professionals and students because of the peaceful atmosphere, reliable facilities, and convenient location. Highly recommend it if you're looking for a nice place to stay.",
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-soft-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What Our Residents Say
          </h2>
          <p className="text-xl text-muted-foreground">
            Real reviews from our happy residents
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="border border-border shadow-card hover:shadow-soft transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-primary fill-current" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground leading-relaxed">
                  "{review.text}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-card px-6 py-3 rounded-full shadow-card border border-border">
            <Star className="h-5 w-5 text-primary fill-current" />
            <span className="text-lg font-semibold text-foreground">5.0</span>
            <span className="text-muted-foreground">Average Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;