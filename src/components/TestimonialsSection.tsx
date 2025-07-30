import { Star, Quote, User, MapPin } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Fatima Ahmed",
      location: "London, UK",
      avatar: "FA",
      rating: 5,
      course: "Tajweed Course",
      testimonial: "The teachers at Noor Al-Quran Academy are exceptional. My daughter has improved her Quran recitation tremendously. The one-on-one attention and patient teaching method made all the difference.",
      highlight: "Exceptional teachers and patient method"
    },
    {
      id: 2,
      name: "Mohammed Hassan",
      location: "Toronto, Canada", 
      avatar: "MH",
      rating: 5,
      course: "Hifz Program",
      testimonial: "I was skeptical about online Quran learning, but this academy proved me wrong. The structured Hifz program and dedicated teacher helped my son memorize 10 chapters in just 6 months.",
      highlight: "Structured program with amazing results"
    },
    {
      id: 3,
      name: "Aisha Rahman",
      location: "Sydney, Australia",
      avatar: "AR", 
      rating: 5,
      course: "Nazra Course",
      testimonial: "As a working mother, the flexible timing was perfect for us. The teacher is very understanding and accommodating. My twins are now reading Quran fluently. Highly recommended!",
      highlight: "Perfect flexibility for busy families"
    },
    {
      id: 4,
      name: "Ibrahim Khan",
      location: "Dubai, UAE",
      avatar: "IK",
      rating: 5,
      course: "Complete Package",
      testimonial: "The quality of education here is outstanding. From basic reading to advanced Tajweed, every aspect is covered professionally. The progress tracking system keeps us informed.",
      highlight: "Outstanding quality and comprehensive coverage"
    },
    {
      id: 5,
      name: "Maryam Ali",
      location: "New York, USA",
      avatar: "MA",
      rating: 5,
      course: "Family Package",
      testimonial: "Enrolled all three of my children and myself. The academy offers family discounts and coordinated scheduling. All of us are learning together - it's a beautiful experience.",
      highlight: "Perfect for the whole family"
    },
    {
      id: 6,
      name: "Yusuf Abdullah",
      location: "Manchester, UK",
      avatar: "YA",
      rating: 5,
      course: "Tajweed Advanced",
      testimonial: "The attention to detail in Tajweed rules is remarkable. My recitation has become more beautiful and accurate. The teacher corrects even the smallest mistakes with love and patience.",
      highlight: "Remarkable attention to detail"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-background to-muted/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 geometric-pattern opacity-20"></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-2 text-sm text-gold font-medium">
            <Quote className="w-4 h-4" />
            Student Stories
          </div>
          <h2 className="text-section text-primary">
            What Our Students Say
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Join thousands of satisfied families who have transformed their Islamic learning journey with us. 
            Read their inspiring stories and experiences.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="card-elegant p-6 bg-background/80 backdrop-blur-sm hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-primary/30" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[1,2,3,4,5].map(i => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i <= testimonial.rating ? 'text-gold' : 'text-muted'}`} 
                    fill="currentColor" 
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-muted-foreground leading-relaxed mb-6 text-sm">
                "{testimonial.testimonial}"
              </blockquote>

              {/* Highlight */}
              <div className="bg-primary/10 border-l-4 border-primary px-3 py-2 mb-4">
                <p className="text-sm font-medium text-primary">
                  "{testimonial.highlight}"
                </p>
              </div>

              {/* Student Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-gold rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  {testimonial.avatar}
                </div>
                <div className="flex-1">
                  <div className="font-medium text-foreground text-sm">{testimonial.name}</div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    {testimonial.location}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-medium text-primary">{testimonial.course}</div>
                  <div className="text-xs text-muted-foreground">Student</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="card-elegant p-8 bg-gradient-to-r from-primary/5 to-gold/5 border-primary/20">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">1000+</div>
              <div className="text-sm text-muted-foreground">Happy Students</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Expert Teachers</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">4.9</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">25+</div>
              <div className="text-sm text-muted-foreground">Countries Served</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Ready to join our community of successful learners? Start your journey today 
            and experience the same quality education that our students love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                const element = document.getElementById('trial');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary px-8 py-3 rounded-xl font-semibold transition-[var(--transition-smooth)] hover:scale-105"
            >
              Start Your Free Trial
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="border border-border bg-background text-foreground hover:bg-muted px-8 py-3 rounded-xl font-semibold transition-[var(--transition-smooth)]"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;