import React from "react";
import { Users, CreditCard, Gauge, PiggyBank, CheckSquare } from "lucide-react";

const Choice = () => {
  const services = [
    {
      icon: <Users className="w-12 h-12" />,
      title: "Ever green trust co",
      subtitle: "Bank Private Client",
    },
    {
      icon: <CreditCard className="w-12 h-12" />,
      title: "Invest",
      subtitle: "",
    },
    {
      icon: <Gauge className="w-12 h-12" />,
      title: "Free credit score",
      subtitle: "",
    },
    {
      icon: <PiggyBank className="w-12 h-12" />,
      title: "Savings Accounts",
      subtitle: "& CDs",
    },
    {
      icon: <CheckSquare className="w-12 h-12" />,
      title: "Checking Accounts",
      subtitle: "",
    },
  ];

  return (
    <div className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="mb-4 text-blue-800 transition-transform duration-300 transform group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-blue-800 font-semibold text-lg mb-1">
                {service.title}
              </h3>
              {service.subtitle && (
                <p className="text-blue-800 text-sm">{service.subtitle}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Choice;
