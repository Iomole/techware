import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Linkedin, Mail, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface TeamMember {
  name: string;
  role: string;
  image?: string;
  bio: string;
  extendedBio?: string;
  linkedin?: string;
  email?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Nasiru IZEGWIRE",
    role: "Managing Director & Chief Executive Officer",
    image: "/lovable-uploads/b3b36ab0-1f66-4560-903e-106836d607ab.png",
    bio: "A visionary leader with over 15 years of distinguished experience in the Computer Technology (CompTech) sector across West Africa and global markets.",
    extendedBio: `Nasiru brings a wealth of expertise in strategic leadership, digital innovation, and cross-industry collaboration. His career spans executive roles with leading IT enterprises in Nigeria, India, and the United Kingdom, where he consistently drove transformative growth, operational excellence, and market expansion.

Professional Highlights:
• Appointed in 2020 by Nigeria's Honourable Minister of Communications and Digital Economy to the Ministerial Committee on Performance Improvement for Galaxy Backbone Limited
• Proven track record in building high-performing teams and fostering strategic partnerships
• Serves as Chief Sales Officer (CSO), spearheading revenue growth initiatives

Education & Accreditations:
• Master of Business Administration (MBA)
• Fellow, Institute of Management Consultants United Kingdom (FIMC)`,
    linkedin: "https://www.linkedin.com/in/nasiru-izegwire-911aa817?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "nasiru@techware.ng"
  },
  {
    name: "Sarah Johnson",
    role: "Technical Director",
    bio: "Sarah brings extensive expertise in enterprise solutions and cybersecurity implementation.",
    linkedin: "https://linkedin.com",
    email: "sarah@example.com"
  },
  {
    name: "Michael Chen",
    role: "Solutions Architect",
    bio: "Michael specializes in designing scalable infrastructure solutions for enterprise clients.",
    linkedin: "https://linkedin.com",
    email: "michael@example.com"
  },
];

export const TeamSection = () => {
  const [expandedMember, setExpandedMember] = useState<string | null>(null);

  const toggleBio = (name: string) => {
    setExpandedMember(expandedMember === name ? null : name);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            The experts behind our success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={member.image} />
                    <AvatarFallback className="bg-primary/10 dark:bg-primary/20">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <div className="text-gray-600 dark:text-gray-300 mb-4">
                    <p className="mb-2">{member.bio}</p>
                    {member.extendedBio && (
                      <>
                        <motion.div
                          initial={false}
                          animate={{ height: expandedMember === member.name ? "auto" : 0 }}
                          className="overflow-hidden"
                        >
                          <p className="whitespace-pre-line mt-2">{member.extendedBio}</p>
                        </motion.div>
                        <button
                          onClick={() => toggleBio(member.name)}
                          className="flex items-center justify-center w-full mt-2 text-primary hover:text-primary/80 transition-colors"
                        >
                          {expandedMember === member.name ? (
                            <>Show Less <ChevronUp className="ml-1 w-4 h-4" /></>
                          ) : (
                            <>Read More <ChevronDown className="ml-1 w-4 h-4" /></>
                          )}
                        </button>
                      </>
                    )}
                  </div>
                  <div className="flex justify-center space-x-4">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
