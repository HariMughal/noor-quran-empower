import { MessageCircle, Phone, Mail, MapPin, Star, Heart, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: "Home", action: () => scrollToSection('home') },
    { name: "Services", action: () => scrollToSection('services') },
    { name: "Pricing", action: () => scrollToSection('pricing') },
    { name: "Testimonials", action: () => scrollToSection('testimonials') },
    { name: "Contact", action: () => scrollToSection('contact') }
  ];

  const courses = [
    { name: "Nazra (Quran Reading)", action: () => scrollToSection('services') },
    { name: "Tajweed Course", action: () => scrollToSection('services') },
    { name: "Hifz-ul-Quran", action: () => scrollToSection('services') },
    { name: "Free Trial Class", action: () => scrollToSection('trial') },
    { name: "Family Packages", action: () => scrollToSection('pricing') }
  ];

  const contactInfo = [
    {
      icon: MessageCircle,
      text: "+1 (555) 123-4567",
      href: "https://wa.me/1234567890",
      label: "WhatsApp"
    },
    {
      icon: Phone,
      text: "+1 (555) 123-4567", 
      href: "tel:+15551234567",
      label: "Phone"
    },
    {
      icon: Mail,
      text: "info@nooralquran.com",
      href: "mailto:info@nooralquran.com",
      label: "Email"
    },
    {
      icon: MapPin,
      text: "Online Islamic Academy",
      href: "#",
      label: "Address"
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-primary to-primary-light text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="geometric-pattern h-full"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Academy Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-gold to-secondary rounded-xl flex items-center justify-center">
                <span className="text-white font-heading font-bold text-2xl">ن</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl">Noor Al-Quran</h3>
                <p className="text-white/80 text-sm">Academy</p>
              </div>
            </div>
            
            <p className="text-white/90 leading-relaxed">
              Empowering minds with Quranic knowledge through professional online Islamic education. 
              Join our global community of learners.
            </p>

            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className="w-4 h-4 text-gold" fill="currentColor" />
              ))}
              <span className="ml-2 text-white/90 text-sm">4.9/5 from 1000+ students</span>
            </div>

            <p className="text-white/80 text-sm italic">
              "Empowering Minds with Quranic Knowledge"
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-heading font-semibold text-lg text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={link.action}
                    className="text-white/80 hover:text-gold transition-colors text-sm hover:translate-x-1 transform duration-200 block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div className="space-y-6">
            <h4 className="font-heading font-semibold text-lg text-white">Our Courses</h4>
            <ul className="space-y-3">
              {courses.map((course, index) => (
                <li key={index}>
                  <button
                    onClick={course.action}
                    className="text-white/80 hover:text-gold transition-colors text-sm hover:translate-x-1 transform duration-200 block text-left"
                  >
                    {course.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-heading font-semibold text-lg text-white">Contact Us</h4>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={index}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3 text-white/80 hover:text-gold transition-colors group"
                  >
                    <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="text-sm">{contact.text}</span>
                    {contact.href.startsWith('http') && (
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Office Hours */}
            <div className="pt-4 border-t border-white/20">
              <h5 className="font-medium text-white mb-2 text-sm">Office Hours</h5>
              <div className="text-white/80 text-xs space-y-1">
                <p>Mon-Fri: 9AM - 9PM EST</p>
                <p>Weekend: 10AM - 6PM EST</p>
                <p className="text-gold">WhatsApp: 24/7 Support</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/80 text-sm">
              © {currentYear} Noor Al-Quran Academy. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm text-white/80">
              <button className="hover:text-gold transition-colors">Privacy Policy</button>
              <button className="hover:text-gold transition-colors">Terms of Service</button>
              <button className="hover:text-gold transition-colors">Refund Policy</button>
            </div>

            <div className="flex items-center gap-2 text-white/80 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-gold" fill="currentColor" />
              <span>for Islamic Education</span>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="py-4 border-t border-white/10">
          <div className="flex flex-wrap justify-center items-center gap-6 text-white/60 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>SSL Secured</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gold rounded-full"></div>
              <span>Certified Teachers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>Global Community</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;