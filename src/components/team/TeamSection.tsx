
import { motion } from "framer-motion";
import { useState } from "react";
import { TeamMember } from "./TeamMember";
import { teamMembers } from "./teamData";

export const TeamSection = () => {
  const [expandedMember, setExpandedMember] = useState<string | null>(null);

  const toggleBio = (name: string) => {
    setExpandedMember(expandedMember === name ? null : name);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Tech Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1920&q=80"
          alt="Technology team collaboration"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <TeamMember
              key={member.name}
              member={member}
              isExpanded={expandedMember === member.name}
              onToggle={() => toggleBio(member.name)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
