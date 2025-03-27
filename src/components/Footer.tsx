import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1B263B] text-[#FFFFFF] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm">© 2025 Taxi Primjer. Sva prava pridržana.</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end space-y-2">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2 text-[#FFB703]" />
              <a href="tel:(023)456-7890" className="hover:text-[#FFB703] transition-colors">
                (023) 456-7890
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2 text-[#FFB703]" />
              <a href="mailto:info@taxiprimjer.hr" className="hover:text-[#FFB703] transition-colors">
                info@taxiprimjer.hr
              </a>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2 text-[#FFB703]" />
              <span>Ulica kralja Petra Krešimira IV 10, 23000 Zadar</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;