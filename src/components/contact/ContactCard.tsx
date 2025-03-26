
import { Card } from "@/components/ui/card";
import { ReactNode } from "react";

interface ContactInfo {
  icon: ReactNode;
  title: string;
  description: string;
  action: string;
  link: string | null;
}

const ContactCard = ({ info }: { info: ContactInfo }) => {
  return (
    <Card className="p-6 border-none shadow-crisp hover-lift group">
      <div className="flex flex-col items-center text-center">
        <div className="p-3 bg-bw-orange/10 rounded-full mb-4 group-hover:bg-bw-orange/20 transition-colors">
          <div className="text-bw-orange">{info.icon}</div>
        </div>
        <h3 className="font-bold text-lg mb-1">{info.title}</h3>
        <p className="text-sm text-bw-black/70 mb-3">{info.description}</p>
        {info.link ? (
          <a 
            href={info.link}
            className="text-bw-orange font-medium hover:underline"
            target={info.link.startsWith('http') ? "_blank" : undefined}
            rel={info.link.startsWith('http') ? "noopener noreferrer" : undefined}
          >
            {info.action}
          </a>
        ) : (
          <span className="text-bw-black font-medium">{info.action}</span>
        )}
      </div>
    </Card>
  );
};

export default ContactCard;
