import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import { Car, Plane, Map, Phone } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-16 min-h-[80vh] flex items-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600320254374-ce2d293c324e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        >
          <div className="absolute inset-0 bg-[#1B263B] bg-opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-4 drop-shadow-lg">
          Vaša Pouzdana Vožnja
          </h1>
          <p className="text-xl md:text-2xl text-[#FFB703] mb-8 animate-fade-in">
            Brza i sigurna taksi usluga u Zadru
          </p>
          <a
            href="/kontakt"
            className="inline-block bg-[#415A77] text-[#FFFFFF] px-8 py-4 rounded-lg text-xl font-semibold hover:bg-[#FFB703] hover:text-[#1B263B] transition-colors duration-300 shadow-lg"
          >
            Rezervirajte Vožnju
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-[#FFFFFF]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-[#1B263B] mb-12">
            Naše Usluge
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              Icon={Car}
              title="Gradski Prijevoz"
              description="Brz i pouzdan prijevoz unutar Zadra, dostupan 24/7."
            />
            <ServiceCard
              Icon={Plane}
              title="Transfer do Zračne Luke"
              description="Udoban prijevoz do zračne luke u Zadru i okolici."
            />
            <ServiceCard
              Icon={Map}
              title="Prilagođeni Prijevoz"
              description="Prilagođene vožnje za izlete, događanja ili posebne prilike."
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-[#FFFFFF]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-[#1B263B] mb-8">
            Zašto Odabrati Chupapi Munyanyo?
          </h2>
          <div className="max-w-2xl mx-auto">
            <ul className="space-y-4 text-[#415A77] text-lg">
              <li className="flex items-center">
                <span className="h-2 w-2 bg-[#FFB703] rounded-full mr-3"></span>
                15+ godina iskustva u taksi uslugama
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-[#FFB703] rounded-full mr-3"></span>
                Pouzdani vozači s licencom i lokalnim znanjem
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-[#FFB703] rounded-full mr-3"></span>
                Moderna vozila s visokim standardima udobnosti
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-[#FFB703] rounded-full mr-3"></span>
                Transparentne cijene bez skrivenih troškova
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Quick Booking Section */}
      <section className="py-12 bg-[#FFB703]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-[#1B263B] mb-4 animate-pulse">
            Rezervirajte Vožnju Odmah!
          </h2>
          <p className="text-lg text-[#415A77] mb-6">
            Nazovite nas ili pošaljite upit za brzu rezervaciju.
          </p>
          <a
            href="tel:(023)456-7890"
            className="inline-flex items-center bg-[#1B263B] text-[#FFFFFF] px-8 py-4 rounded-lg text-xl font-semibold hover:bg-[#415A77] transition-colors duration-300 shadow-lg"
          >
            <Phone className="mr-2 h-6 w-6" />
            Nazovite Sada
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
