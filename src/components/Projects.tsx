import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Calendar, Users, Building2, Building, Globe2, BadgeDollarSign, GraduationCap, Landmark } from 'lucide-react';
import strategyImage from '@/assets/strategy-meeting.jpg';

const Projects = () => {
  const featuredProjects = [
    {
      title: "MSME Development Program",
      partner: "Mastercard Foundation",
      description: "Comprehensive business development program supporting 500+ micro and small enterprises across Kenya with mentorship, training, and access to finance.",
      outcomes: ["500+ businesses supported", "70% revenue growth", "1,200 jobs created"],
      status: "Completed",
      year: "2023"
    },
    {
      title: "Digital Trade Platform Development",
      partner: "KNCCI",
      description: "Strategic planning and implementation support for Kenya's premier digital trade platform connecting SMEs to global markets.",
      outcomes: ["Platform launched", "200+ SMEs onboarded", "International partnerships"],
      status: "Ongoing",
      year: "2024"
    },
    {
      title: "Policy Framework for MSME Growth",
      partner: "USAID",
      description: "Development of comprehensive policy recommendations to enhance the MSME ecosystem in Kenya, focusing on regulatory improvements and access to finance.",
      outcomes: ["Policy framework delivered", "Stakeholder engagement", "Implementation roadmap"],
      status: "Completed",
      year: "2023"
    }
  ];

  const partners = [
    { 
      name: "Mastercard Foundation", 
      sector: "Development Finance",
      icon: BadgeDollarSign
    },
    { 
      name: "KNCCI", 
      sector: "Trade & Commerce",
      icon: Building
    },
    { 
      name: "USAID", 
      sector: "Development Cooperation",
      icon: Globe2
    },
    { 
      name: "GIZ", 
      sector: "International Development",
      icon: Globe2
    },
    { 
      name: "World Bank", 
      sector: "Development Finance",
      icon: Landmark
    },
    { 
      name: "African Development Bank", 
      sector: "Development Finance",
      icon: BadgeDollarSign
    },
    { 
      name: "Kenya Ministry of Trade", 
      sector: "Government",
      icon: Building2
    },
    { 
      name: "Private Sector Alliance", 
      sector: "Private Sector",
      icon: Building
    }
  ];

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming institutions and enterprises through strategic partnerships and innovative solutions
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-primary mb-8 text-center">
            Featured Recent Engagements
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-white border-0 shadow-md">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={project.status === "Completed" ? "default" : "secondary"} className="bg-accent text-accent-foreground">
                      {project.status}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar size={14} className="mr-1" />
                      {project.year}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-primary group-hover:text-primary-light transition-colors">
                    {project.title}
                  </CardTitle>
                  <div className="flex items-center text-accent font-medium">
                    <Users size={16} className="mr-2" />
                    {project.partner}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary text-sm">Key Outcomes:</h4>
                    <ul className="space-y-1">
                      {project.outcomes.map((outcome, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Clients & Partners Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-6">
                Trusted by Leading Organizations
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We work with a diverse range of clients across sectors, from development 
                partners and government institutions to NGOs and private enterprises, 
                delivering measurable impact and sustainable solutions.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-secondary rounded-lg">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Businesses Supported</div>
                </div>
                <div className="text-center p-4 bg-secondary rounded-lg">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
              </div>
            </div>
            
            <div>
              <img
                src={strategyImage}
                alt="Strategic planning session"
                className="rounded-xl shadow-md w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-primary mb-8 text-center">
            Our Partners & Clients
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <Card key={index} className="p-4 text-center hover:shadow-md transition-shadow bg-white border border-border/50">
                <CardContent className="p-0">
                  <div className="flex flex-col items-center">
                    <partner.icon size={24} className="text-primary mb-2" />
                    <h4 className="font-semibold text-primary text-sm mb-1">
                      {partner.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {partner.sector}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;