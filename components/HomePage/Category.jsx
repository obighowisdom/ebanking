import React from "react";
import { ChevronRight } from "lucide-react";

const ServiceCard = ({ title, description, color }) => (
  <div
    className={`${color} px-8 py-12 transition-transform hover:scale-105 cursor-pointer`}
  >
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <ChevronRight className="w-6 h-6 text-white" />
    </div>
    <p className="text-white/90 text-sm leading-relaxed">{description}</p>
  </div>
);

const BankingServices = () => {
  const services = [
    {
      title: "Bank Accounts",
      description:
        "Discover the benefits of a bank account from Ever green trust co Bank.",
      color: "bg-blue-800",
    },
    {
      title: "Mortgages",
      description: "Find one that's right for your needs and circumstances.",
      color: "bg-red-500",
    },
    {
      title: "Travel Money",
      description: "Check rates and order online now.",
      color: "bg-blue-800",
    },
    {
      title: "Savings",
      description: "See how we could help your money work harder.",
      color: "bg-red-500",
    },
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            color={service.color}
          />
        ))}
      </div>
    </div>
  );
};

export default BankingServices;
