import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Building, Globe } from 'lucide-react';
import heroImage from '@/assets/hero-consulting.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-primary via-primary-light to-primary-dark overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premier Strategic Consultants"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-light/80" />
      </div>

      {/* Content */}
      <div className="relative container-max section-padding">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Empowering Institutions.
            <span className="text-accent block">Advancing Enterprises.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Over 12 years of expertise in strategic consulting, driving transformation 
            across Africa's most dynamic sectors.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="accent" size="lg" className="text-lg px-8 py-4">
              Contact Us
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
              See Our Work
            </Button>
          </div>

          {/* Client Sectors */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-white/80 text-sm font-semibold uppercase tracking-wider mb-6">
              Our Client Sectors
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-accent rounded-lg">
                  <Users size={24} className="text-accent-foreground" />
                </div>
                <span className="text-white font-medium">MSMEs</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-accent rounded-lg">
                  <Building size={24} className="text-accent-foreground" />
                </div>
                <span className="text-white font-medium">Government</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-accent rounded-lg">
                  <Globe size={24} className="text-accent-foreground" />
                </div>
                <span className="text-white font-medium">Development Partners</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-accent/20 rounded-full blur-xl" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-white/10 rounded-full blur-xl" />
    </section>
  );
};

export default Hero;