import { Button } from "./ui/button";
import { Play, Star, Users, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Islamic Academy" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
        <div className="absolute inset-0 hero-pattern"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <div className="text-center lg:text-left space-y-8 animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm text-primary font-medium">
              <Star className="w-4 h-4 text-gold" fill="currentColor" />
              Trusted by 1000+ Students Worldwide
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-hero bg-gradient-to-r from-primary via-primary-light to-gold bg-clip-text text-transparent">
                Noor Al-Quran Academy
              </h1>
              <p className="text-xl md:text-2xl text-gold font-heading font-medium">
                Empowering Minds with Quranic Knowledge
              </p>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Join our professional online Islamic institute and embark on a transformative journey 
              of Quranic learning. Expert teachers, personalized attention, and flexible schedules 
              designed for modern Muslim families.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="w-5 h-5 text-primary" />
                <span><strong className="text-foreground">1000+</strong> Active Students</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <BookOpen className="w-5 h-5 text-primary" />
                <span><strong className="text-foreground">50+</strong> Expert Teachers</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Star className="w-5 h-5 text-gold" fill="currentColor" />
                <span><strong className="text-foreground">4.9/5</strong> Student Rating</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => scrollToSection('trial')}
                className="group"
              >
                Start Your Free Trial
                <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="elegant" 
                size="xl"
                onClick={() => scrollToSection('services')}
              >
                Explore Courses
              </Button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative lg:flex justify-center items-center hidden">
            <div className="relative">
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-gold to-secondary rounded-2xl animate-float opacity-80 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-xl animate-float opacity-90 flex items-center justify-center" style={{animationDelay: '1s'}}>
                <Star className="w-6 h-6 text-white" fill="currentColor" />
              </div>
              
              {/* Main Card */}
              <div className="card-elegant p-8 max-w-sm bg-background/90 backdrop-blur-sm">
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-gold rounded-full mx-auto flex items-center justify-center">
                    <span className="text-white font-heading font-bold text-2xl">ق</span>
                  </div>
                  <div>
                    <h3 className="text-card-title text-primary mb-2">Learn Quran Online</h3>
                    <p className="text-muted-foreground">Experience personalized Islamic education with our certified teachers</p>
                  </div>
                  <div className="flex justify-center gap-1">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="w-4 h-4 text-gold" fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;