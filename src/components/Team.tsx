import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Users, Mail, Linkedin } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Felix Edwine Luutsa",
      role: "Managing Director & CEO",
      specialization: "Strategic planning, organizational leadership, business development, and stakeholder engagement.",
      initials: "FL",
      bio: "Provides strategic leadership for the firm, steering its vision, mission, and growth. Oversees all operations, ensures service excellence, and drives partnerships that align with client needs and industry trends.",
      email: "felix@premierstrategicconsultants.com",
      linkedin: "#",
      // Replace this URL with Sarah's actual photo
      photo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Eliud Luutsa",
      role: "Senior Projects & Operations Manager",
      specialization: "Project management, operational strategy, resource optimization, and process improvement.",
      initials: "EL",
      bio: "Leads the planning, execution, and monitoring of projects to ensure they meet timelines, budgets, and quality standards. Coordinates operational processes to maintain efficiency across the consultancy’s portfolio",
      email: "eliud@premierstrategicconsultants.com",
      linkedin: "#",
      // Replace this URL with Michael's actual photo
      photo: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Boniface Odena ",
      role: "Personal Assistant to the MD & CEO",
      specialization: "Executive coordination, scheduling, and communication management.",
      initials: "BO",
      bio: "Provides executive-level administrative support, manages schedules, coordinates communications, and ensures smooth day-to-day operations for the leadership office.",
      email: "boniface@premierstrategicconsultants.com",
      linkedin: "#",
      // Replace this URL with Grace's actual photo
      photo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Joseph Okello",
      role: "Research Junior Associate",
      specialization: "Data collection and analysis, market research, and report preparation.",
      initials: "JO",
      bio: "Supports the research team by gathering, analyzing, and synthesizing data to inform client strategies and reports. Contributes to drafting research briefs and monitoring sector-specific developments.",
      email: "joseph@premierstrategicconsultants.com",
      linkedin: "#",
      // Replace this URL with David's actual photo
      photo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Nixon Barasa",
      role: "Digitalization Junior Associate",
      specialization: "Digital transformation, systems support, and technology adoption in organizational settings.",
      initials: "NB",
      bio: "Assists in implementing digital tools and solutions that enhance project delivery and operational workflows. Supports the integration of technology into consultancy processes.",
      email: "nixon@premierstrategicconsultants.com",
      linkedin: "#",
      // Replace this URL with Amina's actual photo
      photo: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Mercyline Luutsa",
      role: "Project Administrative Assistant",
      specialization: "Project documentation, logistics coordination, and administrative support",
      initials: "ML",
      bio: "Offers administrative support to project teams, handling documentation, logistics, and project tracking to ensure smooth execution of tasks.",
      email: "mercyline@premierstrategicconsultants.com",
      linkedin: "#",
      // Replace this URL with Peter's actual photo
      photo: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <section id="team" className="section-padding bg-background">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Users className="mr-3 text-accent" size={40} />
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Meet Our Team
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our diverse team of strategic consultants brings together decades of experience 
            and deep expertise across multiple sectors to deliver exceptional results for our clients.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-white border-2 hover:border-accent/30">
              <CardContent className="p-6">
                {/* Avatar and Basic Info */}
                <div className="text-center mb-4">
                  <Avatar className="w-20 h-20 mx-auto mb-4 ring-2 ring-accent/20 group-hover:ring-accent/50 transition-all duration-300">
                    <AvatarImage src={member.photo} alt={member.name} />
                    <AvatarFallback className="bg-gradient-to-br from-primary to-primary-light text-white text-lg font-semibold">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold text-primary mb-1">
                    {member.name}
                  </h3>
                  <p className="text-accent font-medium mb-2">
                    {member.role}
                  </p>
                  <Badge variant="secondary" className="bg-accent-light text-accent-foreground">
                    {member.specialization}
                  </Badge>
                </div>

                {/* Bio */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>

                {/* Contact Info */}
                <div className="flex items-center justify-center space-x-4 pt-4 border-t border-border">
                  <a 
                    href={`mailto:${member.email}`}
                    className="flex items-center text-muted-foreground hover:text-accent transition-colors duration-200"
                    title="Send Email"
                  >
                    <Mail size={16} />
                  </a>
                  <a 
                    href={member.linkedin}
                    className="flex items-center text-muted-foreground hover:text-accent transition-colors duration-200"
                    title="LinkedIn Profile"
                  >
                    <Linkedin size={16} />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="p-8 bg-gradient-to-br from-primary to-primary-light text-white">
            <CardContent className="p-0">
              <h3 className="text-2xl font-semibold mb-4">
                Ready to Work with Our Expert Team?
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Our experienced consultants are ready to help your organization achieve 
                its strategic objectives and drive meaningful impact.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent-dark transition-colors duration-200 shadow-[var(--shadow-accent)]"
              >
                Get in Touch
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Team;