
import { motion } from "framer-motion";
import { Code, Server, Smartphone, Globe, Database, Cloud, Cog } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const BespokeDevelopment = () => {
  const features = [
    {
      icon: Globe,
      title: "Custom Web Applications",
      description: "Modern, responsive, and user-friendly solutions built with the latest web technologies."
    },
    {
      icon: Server,
      title: "Enterprise Software",
      description: "Scalable applications that streamline business processes and boost productivity."
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile solutions for iOS and Android devices."
    },
    {
      icon: Database,
      title: "System Integration",
      description: "Seamless connectivity between different platforms and services."
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Cloud-native applications leveraging AWS, Azure, or Google Cloud."
    },
    {
      icon: Cog,
      title: "API Development",
      description: "Robust and secure APIs for system interconnectivity and data exchange."
    }
  ];

  const techStacks = {
    frontend: ["React", "Angular", "Vue.js", "Next.js", "TypeScript"],
    backend: ["Node.js", "Python", "Java", "Go", ".NET Core"],
    database: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
    cloud: ["AWS", "Azure", "Google Cloud"],
    devops: ["Docker", "Kubernetes", "Jenkins", "GitLab CI/CD"]
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with Background Image */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-24 pb-16 px-4 bg-gradient-to-br from-[#ea384c] to-[#d02e40] relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1920&q=80"
            alt="Software developer coding"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[#ea384c]/70"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <Code className="w-16 h-16 text-white mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Bespoke Development Solutions
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Transform your business ideas into powerful, custom-built software solutions
            that drive growth and efficiency.
          </p>
          <Button 
            variant="secondary"
            size="lg"
            className="bg-white text-[#ea384c] hover:bg-white/90"
          >
            Start Your Project
          </Button>
        </div>
      </motion.section>

      {/* Features Grid */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Development Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <feature.icon className="w-12 h-12 text-[#ea384c] mb-4" />
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {["Discovery", "Design", "Development", "Delivery"].map((phase, index) => (
              <motion.div
                key={phase}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#ea384c] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{phase}</h3>
                <p className="text-muted-foreground">
                  {index === 0 && "Understanding requirements and planning"}
                  {index === 1 && "Creating architecture and UI/UX"}
                  {index === 2 && "Agile development and testing"}
                  {index === 3 && "Deployment and maintenance"}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {Object.entries(techStacks).map(([category, technologies], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="capitalize">{category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {technologies.map((tech) => (
                        <li key={tech} className="flex items-center space-x-2">
                          <Code className="w-4 h-4 text-[#ea384c]" />
                          <span>{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BespokeDevelopment;
