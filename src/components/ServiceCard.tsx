import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, Icon }) => {
  return (
    <div className="bg-[#1B263B] p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
      <div className="flex flex-col items-center text-center">
        <Icon className="h-12 w-12 text-[#FFB703] mb-4" />
        <h3 className="text-[#FFFFFF] text-xl font-semibold mb-3">{title}</h3>
        <p className="text-[#FFFFFF] opacity-90">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;