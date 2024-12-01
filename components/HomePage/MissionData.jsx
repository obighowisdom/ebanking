import React from "react";
import { ChevronRight } from "lucide-react";

const FeatureCard = ({ title, description, imageUrl }) => (
  <div className="relative group cursor-pointer">
    {/* Image Container */}
    <div className="w-full h-48 overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover transition-transform hover:scale-105"
      />
    </div>

    {/* Content Overlay */}
    <div className=" inset-0p-6 flex flex-col justify-end gap-3">
      <div className="space-y-2 mt-5">
        <div className="flex items-center gap-2 text-white group-hover:translate-x-1 transition-transform">
          <h2 className="text-xl font-semibold text-white hover:text-red-900">
            {title}
          </h2>
          <ChevronRight className="w-5 h-5 text-red-900" />
        </div>
        <p className="text-white/80 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

const BankingFeatures = () => {
  const features = [
    {
      title: "Insurance",
      description: "Protect your family and property.",
      imageUrl: "/images/bg1.jpg",
    },
    {
      title: "Activate your card",
      description:
        "There are several ways to easily activate your card. Choose the option that's best for you.",
      imageUrl: "/images/bg2.jpg",
    },
    {
      title: "Security centre",
      description: "Handy tips designed to help you stay safe online.",
      imageUrl: "/images/bg3.jpg",
    },
    {
      title: "Helpful guides",
      description:
        "A range of guides and articles from understanding APRs to saving tips.",
      imageUrl: "/images/bg4.jpg",
    },
  ];
const features1 = [
  {
    title: "Secure key",
    description:
      "Handy demos to help you activate, reset and use your Secure Key",
    imageUrl: "/images/img5.jpg",
  },
  {
    title: "Voice ID",
    description: "Make your voice your password for telephone banking",
    imageUrl: "/images/img6.jpg",
  },
  {
    title: "Card support",
    description: "Activate, lost or stolen, and general card support",
    imageUrl: "/images/img7.jpg",
  },
  {
    title: "PPI",
    description: "Payment Protection Insurance claim deadlines",
    imageUrl: "/images/img8.jpg",
  },
];

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              imageUrl={feature.imageUrl}
            />
          ))}
        </div>
        <div className="w-full h-[2px] bg-red-900 my-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features1.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              imageUrl={feature.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BankingFeatures;
