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
    name: "Adekanmbi Adetunji Isaac",
    role: "Key Account Manager – Banking & Financial Services",
    image: "/lovable-uploads/905abfcd-82ac-44b8-aa36-751244886c3e.png",
    bio: "A results-driven professional with a multifaceted career spanning banking, fintech, oil and gas, and IT solutions, Adekanmbi combines sector-specific expertise with strategic account management to deliver value-driven outcomes for financial institutions.",
    extendedBio: `Focus Area: Banking & Financial Institutions

Key Responsibilities:
• Market Expansion: Identify and capitalize on high-potential market opportunities, crafting tailored sales strategies to exceed revenue targets and drive sustainable growth.
• Client-Centric Solutions: Assess clients' IT infrastructure needs, design customized product recommendations, and align solutions to enhance operational efficiency and digital transformation.
• Relationship Leadership: Cultivate long-term partnerships with key stakeholders, ensuring alignment between client objectives and Techware's innovative IT offerings.

Professional Journey:
• Banking Foundations: Launched career as an E-channel Assistant & Customer Service Officer, honing expertise in digital banking solutions and client relationship management.
• Fintech Innovation: Transitioned to a Quality Assurance Analyst role, optimizing customer experience through rigorous process audits and resolution quality improvements.
• Financial Acumen: Advanced to Accountant in the oil and gas sector, overseeing financial reporting, budgeting, and compliance, while contributing to data-driven decision-making.
• Strategic Account Management: Now excelling as a Key Account Manager at Techware, leveraging cross-industry insights to bridge technology gaps for banking clients and accelerate sales performance.

Education & Expertise:
• Bachelor of Science (B.Sc.) in Purchasing and Supply Management
• Core Competencies: Strategic sales planning, client lifecycle management, financial systems analysis, and IT solution integration.`,
    linkedin: "https://www.linkedin.com/in/adekanmbi-adetunji-b83839102?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "adetunji@techware.ng"
  },
  {
    name: "Benjamin Igelle",
    role: "Head of Marketing and Business Development",
    image: "/lovable-uploads/950dec39-5fd5-4391-8fc0-353e38fb9463.png",
    bio: "",
    extendedBio: `Benjamin is a dynamic and fast-rising business consultant, recognized for his expertise in Sales, Business Development, and Digital Marketing. He holds a Bachelor's degree in Marketing from the prestigious University of Calabar and an MBA from the renowned Ahmadu Bello University, Zaria, where he honed his skills in strategic marketing and business leadership. Known for his innovative approach and results-driven mindset`,
    linkedin: "https://www.linkedin.com/in/benjamin-igelle-a137a9218?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "benjamin@techware.ng"
  },
  {
    name: "ADAHGLAMA ADA BLESSING",
    role: "Marketing and Communication Executive",
    image: "/lovable-uploads/fad62f42-580a-42c4-b11b-de857c362dfb.png",
    bio: "She thrives at the intersection of security and communication.",
    extendedBio: `With hands-on experience in risk analysis, security audits, and crafting engaging cybersecurity awareness programs, she brings both technical expertise and creative flair to everything she does. Her focus is enhancing cyber resilience while making complex security topics accessible to all. She holds a Bachelor's degree in Cyber Security.

Key Responsibilities:
• Crafting Compelling Content: Develops dynamic content that not only informs but also engages and empowers audiences.
• Driving Lead Generation & Conversion: Builds and nurtures relationships to convert prospects into long-term customers.
• Managing Social Media: Creates buzz-worthy posts and campaigns that amplify brand presence and cybersecurity awareness.
• Front Desk Excellence: Serves as the welcoming face of the company, providing exceptional service and managing key communications.`,
    email: "blessing@techware.ng"
  },
  {
    name: "Abdulazeez Omole",
    role: "Product Manager",
    image: "/lovable-uploads/772b3f5e-f252-480e-9c0c-6e71ec5751b4.png",
    bio: "Bridging Technology and Business Excellence",
    extendedBio: `Academic Background
Abdulazeez Omole holds a Degree in Computer Science, equipping him with a robust foundation in computational theory, programming, and systems design. His academic rigor and passion for emerging technologies laid the groundwork for a dynamic career in tech leadership.

Professional Expertise
As a Product Manager at Techware, Abdulazeez orchestrates the end-to-end lifecycle of innovative solutions, merging technical expertise with strategic vision. His core competencies include:

• Software Development: Designing user-centric applications that streamline operations and enhance user experiences.
• AI & Machine Learning: Spearheading AI-driven projects that automate processes, predict trends, and deliver actionable insights.`,
    linkedin: "https://www.linkedin.com/in/abdulazeez-omole-0ba3311bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "abdulazeez@techware.ng"
  }
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
