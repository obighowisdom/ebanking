import React from 'react';
import { ChevronRight } from 'lucide-react';

const ServiceCard = ({
  title,
  description,
  imageUrl,
  link,
  additionalLinks = [],
}) => (
  <div className="flex flex-col gap-4 p-6 border-b last:border-b-0 md:border-b-0">
    <div className="w-full h-48 overflow-hidden rounded-lg transition-transform hover:scale-105">
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
    </div>

    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 text-blue-800 hover:text-blue-600 cursor-pointer group">
        <h2 className="text-xl font-semibold hover:text-red-600">{title}</h2>
        <ChevronRight className="w-5 h-5 text-red-600 transform group-hover:translate-x-1 transition-transform" />
      </div>

      <p className="text-gray-700 text-sm leading-relaxed">{description}</p>

      {additionalLinks.length > 0 && (
        <div className="flex flex-col gap-2 mt-4">
          <div className="flex gap-4">
            {additionalLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-blue-800 hover:text-blue-600 text-sm font-bold underline flex items-center gap-1 group"
              >
                {link.text}
                <ChevronRight className="w-4 h-4 text-red-900 transform group-hover:translate-x-1 transition-transform" />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  </div>
);

const BankingServiceCards = () => {
  const services = [
    {
      title: "Up to USD20,000 this tax year",
      description:
        "Make the most of your 2019/ ISA allowance with an bank Selection Stocks and Shares ISA.",
      imageUrl: "/images/img1.jpg",
      link: "#",
    },
    {
      title: "Book an appointment",
      description:
        "You can now book an appointment online. Existing customers may prefer to log on to Online Banking to make booking even simpler.",
      imageUrl: "/images/img2.jpg",
      additionalLinks: [
        { text: "Book Now", url: "#" },
        { text: "Login and book now", url: "#" },
      ],
    },
    {
      title: "Ring-fencing",
      description: "We're changing the way bank is structured in the EU.",
      imageUrl: "/images/img3.jpg",
      link: "#",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            imageUrl={service.imageUrl}
            link={service.link}
            additionalLinks={service.additionalLinks}
          />
        ))}
      </div>
    </div>
  );
};

export default BankingServiceCards;