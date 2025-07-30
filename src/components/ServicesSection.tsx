import { Button } from "./ui/button";
import { BookOpen, Volume2, Award, Users, Clock, Star } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      id: "nazra",
      icon: BookOpen,
      title: "Nazra (Quran Reading)",
      description: "Learn to read the Holy Quran with proper pronunciation and fluency. Perfect for beginners and those wanting to improve their reading skills.",
      features: [
        "Arabic alphabets and pronunciation",
        "Basic reading with Harakat",
        "Fluent Quran reading",
        "Interactive learning sessions"
      ],
      duration: "3-6 months",
      level: "Beginner to Intermediate",
      color: "from-primary to-primary-glow"
    },
    {
      id: "tajweed",
      icon: Volume2,
      title: "Tajweed (Quranic Recitation)",
      description: "Master the art of beautiful Quranic recitation with proper rules and melodious voice. Learn from expert Qaris with traditional methods.",
      features: [
        "Rules of Tajweed",
        "Proper pronunciation (Makharij)",
        "Melodious recitation techniques",
        "Classical recitation styles"
      ],
      duration: "6-12 months",
      level: "Intermediate to Advanced",
      color: "from-gold to-secondary"
    },
    {
      id: "hifz",
      icon: Award,
      title: "Hifz-ul-Quran (Memorization)",
      description: "Complete memorization of the Holy Quran with expert guidance and proven techniques. Join our prestigious Hifz program.",
      features: [
        "Systematic memorization plan",
        "Regular revision sessions",
        "Memory techniques and tips",
        "Graduation ceremony"
      ],
      duration: "2-4 years",
      level: "All Levels",
      color: "from-primary-light to-gold"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm text-primary font-medium">
            <BookOpen className="w-4 h-4" />
            Our Islamic Courses
          </div>
          <h2 className="text-section text-primary">
            Comprehensive Quranic Education
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover our carefully designed courses that cater to students of all ages and skill levels. 
            Each program is crafted with traditional Islamic teaching methods combined with modern learning techniques.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id}
                className="service-card p-8 h-full bg-background group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Service Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Service Content */}
                <div className="space-y-4 flex-1">
                  <div>
                    <h3 className="text-card-title text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-foreground">What You'll Learn:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Star className="w-3 h-3 text-gold shrink-0" fill="currentColor" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Course Info */}
                  <div className="pt-4 border-t border-border/50 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>Duration: <strong className="text-foreground">{service.duration}</strong></span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4 text-primary" />
                      <span>Level: <strong className="text-foreground">{service.level}</strong></span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button 
                    variant="outline" 
                    className="w-full mt-6 group-hover:border-primary/50 group-hover:bg-primary/5"
                    onClick={() => scrollToSection('contact')}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="card-elegant p-8 max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-gold/5 border-primary/20">
            <h3 className="text-2xl font-heading font-semibold text-primary mb-4">
              Not Sure Which Course to Choose?
            </h3>
            <p className="text-muted-foreground mb-6">
              Book a free consultation with our expert teachers. They'll assess your current level 
              and recommend the perfect course to start your Islamic learning journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero"
                onClick={() => scrollToSection('trial')}
              >
                Book Free Trial Class
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('contact')}
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;