import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  User, 
  Users,
  CheckCircle
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
    studentAge: "",
    preferredTime: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "",
        message: "",
        studentAge: "",
        preferredTime: ""
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const whatsappNumber = "+1234567890"; // Replace with actual WhatsApp number
  const whatsappMessage = encodeURIComponent(
    "Assalamu Alaikum! I'm interested in learning more about Noor Al-Quran Academy courses. Could you please provide more information?"
  );

  const contactInfo = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+1 (555) 123-4567",
      action: "Chat Now",
      href: `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
      color: "text-green-600"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      action: "Call Now", 
      href: "tel:+15551234567",
      color: "text-primary"
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@nooralquran.com",
      action: "Send Email",
      href: "mailto:info@nooralquran.com",
      color: "text-gold"
    }
  ];

  const teamMembers = [
    {
      name: "Sheikh Ahmed Al-Rahman",
      title: "CEO & Head Teacher",
      expertise: "Tajweed & Hifz Specialist",
      experience: "15+ years",
      contact: "ahmed@nooralquran.com"
    },
    {
      name: "Dr. Fatima Al-Zahra",
      title: "Academic Partner",
      expertise: "Islamic Studies & Quran Translation",
      experience: "12+ years",
      contact: "fatima@nooralquran.com"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm text-primary font-medium">
            <MessageCircle className="w-4 h-4" />
            Get In Touch
          </div>
          <h2 className="text-section text-primary">
            Contact Noor Al-Quran Academy
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ready to begin your Islamic learning journey? We're here to help! 
            Reach out to us for course information, scheduling, or any questions you may have.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card-elegant p-8 bg-background">
              <h3 className="text-card-title text-primary mb-6">Send Us a Message</h3>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-primary mb-2">Message Sent Successfully!</h3>
                  <p className="text-muted-foreground">
                    Thank you for your interest. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Course Interest *
                      </label>
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        required
                        className="w-full h-12 px-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                      >
                        <option value="">Select a course</option>
                        <option value="nazra">Nazra (Quran Reading)</option>
                        <option value="tajweed">Tajweed Course</option>
                        <option value="hifz">Hifz-ul-Quran</option>
                        <option value="all">All Courses</option>
                        <option value="consultation">Free Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Student Age
                      </label>
                      <Input
                        name="studentAge"
                        value={formData.studentAge}
                        onChange={handleChange}
                        placeholder="Age of the student"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Preferred Class Time
                      </label>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full h-12 px-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                      >
                        <option value="">Select preferred time</option>
                        <option value="morning">Morning (6AM - 8AM)</option>
                        <option value="afternoon">Afternoon (4PM - 6PM)</option>
                        <option value="evening">Evening (8PM - 10PM)</option>
                        <option value="weekend">Weekend Classes</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your learning goals or any specific questions..."
                      rows={5}
                      className="resize-none"
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info & Team */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="card-elegant p-6 bg-background">
              <h3 className="text-card-title text-primary mb-6">Quick Contact</h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <a
                      key={index}
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors group"
                    >
                      <div className={`w-10 h-10 ${contact.color} bg-current/10 rounded-lg flex items-center justify-center`}>
                        <Icon className={`w-5 h-5 ${contact.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-foreground text-sm">{contact.title}</div>
                        <div className="text-muted-foreground text-sm">{contact.value}</div>
                      </div>
                      <div className="text-xs text-primary group-hover:translate-x-1 transition-transform">
                        {contact.action}
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Office Hours */}
            <div className="card-elegant p-6 bg-background">
              <h3 className="text-card-title text-primary mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Office Hours
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="text-foreground font-medium">9:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="text-foreground font-medium">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="text-foreground font-medium">12:00 PM - 5:00 PM</span>
                </div>
                <div className="pt-3 border-t border-border/50">
                  <p className="text-xs text-muted-foreground">
                    * All times are EST. We respond to WhatsApp messages 24/7
                  </p>
                </div>
              </div>
            </div>

            {/* Team Members */}
            <div className="card-elegant p-6 bg-background">
              <h3 className="text-card-title text-primary mb-6 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Meet Our Leadership
              </h3>
              <div className="space-y-6">
                {teamMembers.map((member, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-gold rounded-full flex items-center justify-center text-white font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground text-sm">{member.name}</h4>
                        <p className="text-primary text-xs font-medium">{member.title}</p>
                        <p className="text-muted-foreground text-xs">{member.expertise}</p>
                        <p className="text-muted-foreground text-xs">{member.experience} experience</p>
                      </div>
                    </div>
                    <a 
                      href={`mailto:${member.contact}`}
                      className="text-xs text-primary hover:underline"
                    >
                      {member.contact}
                    </a>
                    {index < teamMembers.length - 1 && <hr className="border-border/50" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;