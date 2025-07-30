import { Button } from "./ui/button";
import { Play, CheckCircle, Gift, Users, Clock, Star } from "lucide-react";

const TrialSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const trialBenefits = [
    "One-on-one session with expert teacher",
    "Personalized learning assessment",
    "Custom study plan recommendation",
    "No payment required - Completely FREE",
    "Available for all courses",
    "Flexible scheduling"
  ];

  const steps = [
    {
      step: "1",
      title: "Book Your Slot",
      description: "Choose your preferred time and course interest"
    },
    {
      step: "2", 
      title: "Meet Your Teacher",
      description: "Connect with our qualified Islamic scholar"
    },
    {
      step: "3",
      title: "Start Learning",
      description: "Begin your beautiful journey of Quranic education"
    }
  ];

  return (
    <section id="trial" className="py-20 bg-gradient-to-br from-primary/5 via-background to-gold/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 geometric-pattern opacity-30"></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-2 text-sm text-gold font-medium">
            <Gift className="w-4 h-4" />
            Limited Time Offer
          </div>
          <h2 className="text-section text-primary">
            Start Your FREE Trial Class Today
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Experience the quality of our teaching with a complimentary one-on-one session. 
            No commitments, no hidden fees - just pure Islamic learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Benefits & Process */}
          <div className="space-y-8">
            {/* Trial Benefits */}
            <div className="card-elegant p-8 bg-background/80 backdrop-blur-sm">
              <h3 className="text-card-title text-primary mb-6 flex items-center gap-2">
                <Star className="w-6 h-6 text-gold" fill="currentColor" />
                What's Included in Your FREE Trial
              </h3>
              <div className="space-y-4">
                {trialBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* How It Works */}
            <div className="space-y-6">
              <h3 className="text-card-title text-primary">How It Works</h3>
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-gold rounded-full flex items-center justify-center text-white font-bold shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: CTA Card */}
          <div className="lg:flex justify-center">
            <div className="card-elegant p-8 max-w-md w-full bg-gradient-to-br from-background to-background/95 backdrop-blur-sm">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Play className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-card-title text-primary mb-2">Book Your FREE Trial</h3>
                <p className="text-muted-foreground">Join thousands of satisfied students</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-3 bg-muted/50 rounded-xl">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-lg font-bold text-primary">1000+</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Students Enrolled</p>
                </div>
                <div className="text-center p-3 bg-muted/50 rounded-xl">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Star className="w-4 h-4 text-gold" fill="currentColor" />
                    <span className="text-lg font-bold text-primary">4.9</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Average Rating</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  onClick={() => scrollToSection('contact')}
                >
                  <Play className="w-5 h-5 mr-2" />
                  Book FREE Trial Now
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full"
                  onClick={() => scrollToSection('contact')}
                >
                  <Clock className="w-5 h-5 mr-2" />
                  Schedule Later
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="text-center mt-6 pt-6 border-t border-border/50">
                <p className="text-xs text-muted-foreground mb-2">
                  ✓ No credit card required  ✓ Instant confirmation
                </p>
                <div className="flex justify-center items-center gap-1">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-3 h-3 text-gold" fill="currentColor" />
                  ))}
                  <span className="text-xs text-muted-foreground ml-2">Trusted by families worldwide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrialSection;