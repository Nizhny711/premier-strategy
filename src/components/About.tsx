import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Target, Eye, Award } from 'lucide-react';
import teamImage from '@/assets/team-collaboration.jpg';

const About = () => {
  const whyWorkWithUs = [
    "Deep contextual MSME experience across diverse sectors",
    "Multi-sectoral reach spanning public and private domains",
    "Results-driven methodology with measurable outcomes",
    "Evidence-based solutions tailored to African contexts",
    "Strategic partnerships with leading development organizations",
    "Proven track record of institutional transformation"
  ];

  return (
    <section id="about" className="section-padding bg-secondary/50">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            About Premier Strategic Consultants
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Established with a vision to drive meaningful change across Africa's institutional landscape
          </p>
        </div>

        {/* Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Our Story
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Premier Strategic Consultants is a Kenyan-based consulting firm with over 12 years 
              of experience in strategic development and enterprise transformation. We specialize 
              in providing innovative, evidence-driven solutions that empower institutions and 
              enterprises across Africa.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our deep understanding of the African business landscape, combined with international 
              best practices, enables us to deliver sustainable solutions that drive real impact 
              for our clients.
            </p>
          </div>
          <div className="relative">
            <img
              src={teamImage}
              alt="Our team at work"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 bg-gradient-to-br from-primary to-primary-light text-white">
            <CardContent className="p-0">
              <div className="flex items-center mb-4">
                <Target className="mr-3 text-accent" size={32} />
                <h3 className="text-2xl font-semibold">Our Mission</h3>
              </div>
              <p className="text-lg text-white/90 leading-relaxed">
                To provide innovative, evidence-driven solutions that empower institutions 
                and enterprises to achieve sustainable growth and meaningful impact.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-accent to-accent-dark text-accent-foreground">
            <CardContent className="p-0">
              <div className="flex items-center mb-4">
                <Eye className="mr-3 text-primary" size={32} />
                <h3 className="text-2xl font-semibold">Our Vision</h3>
              </div>
              <p className="text-lg leading-relaxed">
                To be a premier partner in strategic development and enterprise 
                transformation in Africa, recognized for excellence and innovation.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Why Work With Us */}
        <Card className="p-8 bg-white shadow-lg">
          <CardContent className="p-0">
            <div className="flex items-center mb-6">
              <Award className="mr-3 text-accent" size={32} />
              <h3 className="text-3xl font-semibold text-primary">
                Why Work With Us
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {whyWorkWithUs.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="text-accent mt-1 flex-shrink-0" size={20} />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;