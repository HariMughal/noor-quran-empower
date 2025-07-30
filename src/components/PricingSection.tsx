import { Button } from "./ui/button";
import { Check, Star, Crown, Users, Clock, MessageCircle } from "lucide-react";

const PricingSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const plans = [
    {
      id: "basic",
      name: "Basic Package",
      price: "$30",
      period: "per month",
      description: "Perfect for beginners starting their Quranic journey",
      features: [
        "2 Classes per week (30 min each)",
        "Nazra (Quran Reading)",
        "Basic Tajweed rules",
        "WhatsApp support",
        "Progress tracking",
        "Digital learning materials"
      ],
      popular: false,
      color: "border-border",
      buttonVariant: "outline" as const
    },
    {
      id: "standard",
      name: "Standard Package",
      price: "$50",
      period: "per month",
      description: "Most popular choice for serious learners",
      features: [
        "3 Classes per week (45 min each)",
        "All Basic Package features",
        "Advanced Tajweed training",
        "Quran translation lessons",
        "Monthly assessment",
        "Flexible rescheduling",
        "Priority teacher support"
      ],
      popular: true,
      color: "border-primary ring-2 ring-primary/20",
      buttonVariant: "hero" as const
    },
    {
      id: "premium",
      name: "Premium Package",
      price: "$80",
      period: "per month", 
      description: "Comprehensive program for dedicated students",
      features: [
        "5 Classes per week (60 min each)",
        "All Standard Package features",
        "Hifz-ul-Quran program",
        "Islamic studies integration",
        "Weekly progress reports",
        "Family consultation sessions",
        "Dedicated teacher assignment",
        "Certificate upon completion"
      ],
      popular: false,
      color: "border-gold ring-2 ring-gold/20",
      buttonVariant: "gold" as const
    }
  ];

  const schedules = [
    {
      time: "6:00 AM - 8:00 AM",
      zone: "Perfect for early risers",
      availability: "High"
    },
    {
      time: "4:00 PM - 6:00 PM", 
      zone: "After school hours",
      availability: "Medium"
    },
    {
      time: "8:00 PM - 10:00 PM",
      zone: "Evening classes",
      availability: "High"
    },
    {
      time: "Weekend Sessions",
      zone: "Saturday & Sunday",
      availability: "High"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm text-primary font-medium">
            <Crown className="w-4 h-4" />
            Affordable Excellence
          </div>
          <h2 className="text-section text-primary">
            Choose Your Learning Path
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Flexible pricing plans designed to fit every family's needs and budget. 
            All packages include expert teachers, personalized attention, and comprehensive learning materials.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div 
              key={plan.id}
              className={`card-elegant p-8 relative ${plan.color} ${plan.popular ? 'scale-105 lg:scale-110' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-gold px-4 py-1 rounded-full text-white text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-card-title text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period.split(' ')[1]}</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button 
                variant={plan.buttonVariant}
                size="lg"
                className="w-full"
                onClick={() => scrollToSection('contact')}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        {/* Class Schedules */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Schedule Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-card-title text-primary mb-4 flex items-center gap-2">
                <Clock className="w-6 h-6" />
                Flexible Class Schedules
              </h3>
              <p className="text-muted-foreground mb-6">
                Choose from various time slots that work best for your family. 
                All times are in your local timezone.
              </p>
            </div>

            <div className="space-y-4">
              {schedules.map((schedule, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
                  <div>
                    <div className="font-medium text-foreground">{schedule.time}</div>
                    <div className="text-sm text-muted-foreground">{schedule.zone}</div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    schedule.availability === 'High' ? 'bg-primary/20 text-primary' :
                    schedule.availability === 'Medium' ? 'bg-gold/20 text-gold' :
                    'bg-muted text-muted-foreground'
                  }`}>
                    {schedule.availability} Availability
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="card-elegant p-8 bg-gradient-to-br from-primary/5 to-gold/5 border-primary/20">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-gold rounded-full mx-auto flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              
              <div>
                <h3 className="text-card-title text-primary mb-3">
                  Need a Custom Plan?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Have specific requirements? Contact us for personalized pricing 
                  and scheduling options tailored to your family's needs.
                </p>
              </div>

              <div className="space-y-4">
                <Button 
                  variant="hero"
                  size="lg"
                  className="w-full"
                  onClick={() => scrollToSection('contact')}
                >
                  Contact Us
                </Button>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    💬 WhatsApp: <span className="text-primary font-medium">+1 (555) 123-4567</span>
                  </p>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-border/50">
                <div className="flex justify-center items-center gap-1 mb-2">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-4 h-4 text-gold" fill="currentColor" />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">
                  Money-back guarantee • Flexible cancellation • Family discounts available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;