import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Users, 
  Target, 
  FileText, 
  GraduationCap, 
  Briefcase,
  ArrowRight,
  CheckCircle,
  Clock,
  DollarSign
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Business Mentorship & Development",
      description: "Comprehensive support for MSMEs including business planning, market analysis, and growth strategies tailored to local contexts.",
      features: ["Business plan development", "Market entry strategies", "Financial planning", "Growth acceleration"],
      detailedInfo: {
        overview: "Our Business Mentorship & Development service provides end-to-end support for Micro, Small, and Medium Enterprises (MSMEs) looking to establish, grow, or transform their operations. We combine deep industry knowledge with practical implementation strategies.",
        process: [
          "Initial business assessment and gap analysis",
          "Market research and competitive landscape evaluation", 
          "Business model optimization and revenue stream development",
          "Implementation roadmap creation and execution support"
        ],
        outcomes: ["Improved business performance", "Enhanced market positioning", "Sustainable growth strategies", "Increased operational efficiency"]
      }
    },
    {
      icon: Target,
      title: "Strategic Planning & Organizational Development",
      description: "End-to-end strategic planning services that align organizational capabilities with market opportunities.",
      features: ["Strategic planning", "Organizational restructuring", "Performance management", "Change management"],
      detailedInfo: {
        overview: "Transform your organization through comprehensive strategic planning that aligns vision, capabilities, and market realities. Our approach ensures sustainable competitive advantage and organizational excellence.",
        process: [
          "Strategic visioning and goal-setting workshops",
          "Organizational capability assessment",
          "Strategic framework development and alignment",
          "Implementation planning and change management"
        ],
        outcomes: ["Clear strategic direction", "Aligned organizational structure", "Enhanced performance metrics", "Improved stakeholder engagement"]
      }
    },
    {
      icon: FileText,
      title: "Public Policy Development",
      description: "Evidence-based policy research and development to support effective governance and regulatory frameworks.",
      features: ["Policy research", "Regulatory frameworks", "Impact assessment", "Stakeholder engagement"],
      detailedInfo: {
        overview: "Develop robust public policies through comprehensive research, stakeholder engagement, and evidence-based analysis. We help governments and institutions create effective regulatory frameworks.",
        process: [
          "Policy landscape analysis and gap identification",
          "Stakeholder consultation and engagement",
          "Evidence gathering and impact assessment",
          "Policy drafting and implementation framework design"
        ],
        outcomes: ["Evidence-based policy recommendations", "Stakeholder-aligned frameworks", "Implementation roadmaps", "Monitoring and evaluation systems"]
      }
    },
    {
      icon: GraduationCap,
      title: "Capacity Building & Training",
      description: "Customized training programs designed to enhance institutional capabilities and individual competencies.",
      features: ["Leadership development", "Skills training", "Institutional strengthening", "Knowledge transfer"],
      detailedInfo: {
        overview: "Build sustainable capacity through targeted training programs that enhance both individual competencies and institutional capabilities. Our approach ensures long-term knowledge retention and practical application.",
        process: [
          "Training needs assessment and gap analysis",
          "Customized curriculum development",
          "Interactive training delivery and workshops",
          "Progress monitoring and continuous improvement"
        ],
        outcomes: ["Enhanced skill sets", "Improved performance metrics", "Stronger institutional capacity", "Knowledge retention and transfer"]
      }
    },
    {
      icon: Briefcase,
      title: "Project Management & Evaluation",
      description: "Comprehensive project lifecycle management from design through implementation and evaluation.",
      features: ["Project design", "Implementation support", "Monitoring & evaluation", "Impact measurement"],
      detailedInfo: {
        overview: "Ensure project success through professional project management and comprehensive evaluation services. We manage complex initiatives from conception to completion with measurable outcomes.",
        process: [
          "Project scoping and design development",
          "Implementation planning and resource allocation",
          "Real-time monitoring and adaptive management",
          "Impact evaluation and lessons learned documentation"
        ],
        outcomes: ["Successful project delivery", "Measurable impact achievement", "Risk mitigation", "Organizational learning"]
      }
    }
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive consulting solutions designed to drive sustainable growth and transformation
          </p>
        </div>

        {/* Services with Expandable Details */}
        <Accordion type="single" collapsible className="space-y-8">
          {services.map((service, index) => (
            <AccordionItem key={index} value={`service-${index}`} className="border-0">
              <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-white overflow-hidden">
                <AccordionTrigger className="hover:no-underline p-0 [&[data-state=open]]:pb-0">
                  <div className="w-full p-6">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-dark rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <service.icon size={32} className="text-accent-foreground" />
                      </div>
                      <div className="flex-1 text-left">
                        <CardTitle className="text-xl text-primary group-hover:text-primary-light transition-colors mb-3">
                          {service.title}
                        </CardTitle>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {service.description}
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="text-sm text-muted-foreground flex items-center">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0" />
                              <span className="truncate">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center text-accent">
                        <span className="text-sm font-semibold mr-2 hidden sm:inline">Learn More</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                
                <AccordionContent className="px-6 pb-6">
                  <div className="border-t border-border pt-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Overview */}
                      <div>
                        <h4 className="font-semibold text-primary mb-3 flex items-center">
                          <FileText size={18} className="mr-2 text-accent" />
                          Service Overview
                        </h4>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {service.detailedInfo.overview}
                        </p>
                        
                        {/* Process */}
                        <h4 className="font-semibold text-primary mb-3 flex items-center">
                          <CheckCircle size={18} className="mr-2 text-accent" />
                          Our Process
                        </h4>
                        <ul className="space-y-2">
                          {service.detailedInfo.process.map((step, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start">
                              <span className="bg-accent text-accent-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold mr-3 mt-0.5 flex-shrink-0">
                                {idx + 1}
                              </span>
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Details */}
                      <div>
                        {/* Expected Outcomes */}
                        <h4 className="font-semibold text-primary mb-3 flex items-center">
                          <Target size={18} className="mr-2 text-accent" />
                          Expected Outcomes
                        </h4>
                        <ul className="space-y-2 mb-6">
                          {service.detailedInfo.outcomes.map((outcome, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-center">
                              <CheckCircle size={14} className="text-accent mr-2 flex-shrink-0" />
                              {outcome}
                            </li>
                          ))}
                        </ul>
                        
                        {/* CTA */}
                        <div className="mt-6">
                          <Button variant="accent" className="w-full">
                            Get Started with {service.title}
                            <ArrowRight size={16} className="ml-2" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </Card>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-primary to-primary-light text-white p-8 md:p-12">
            <CardContent className="p-0">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Transform Your Organization?
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how our expertise can drive your strategic objectives forward.
              </p>
              <Button
                variant="accent"
                size="lg"
                className="text-lg px-8 py-4"
                onClick={() => {
                  document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Schedule a Consultation
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;