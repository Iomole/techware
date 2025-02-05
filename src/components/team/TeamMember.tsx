
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Linkedin, Mail, ChevronDown, ChevronUp } from "lucide-react";
import { TeamMemberType } from "./types";

interface TeamMemberProps {
  member: TeamMemberType;
  isExpanded: boolean;
  onToggle: () => void;
  index: number;
}

export const TeamMember = ({ member, isExpanded, onToggle, index }: TeamMemberProps) => {
  return (
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
                  animate={{ height: isExpanded ? "auto" : 0 }}
                  className="overflow-hidden"
                >
                  <p className="whitespace-pre-line mt-2">{member.extendedBio}</p>
                </motion.div>
                <button
                  onClick={onToggle}
                  className="flex items-center justify-center w-full mt-2 text-primary hover:text-primary/80 transition-colors"
                >
                  {isExpanded ? (
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
  );
};
