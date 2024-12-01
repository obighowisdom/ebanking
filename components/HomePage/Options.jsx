'use client'
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  CreditCard,
  Home,
  Car,
  Briefcase,
  CreditCard as Check,
} from "lucide-react";

const items = [
  {
    title: "Checking Accounts",
    icon: Check,
    id: 1,
  },
  {
    title: "Find a credit card",
    icon: CreditCard,
    id: 2,
  },
  {
    title: "Home Lending",
    icon: Home,
    id: 3,
  },
  {
    title: "Car Buying & Loans",
    icon: Car,
    id: 4,
  },
  {
    title: "Ever green trust co Bank for Business",
    icon: Briefcase,
    id: 5,
  },
];

export function CarouselSize() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-[#003087] mb-12">
        Choose what&apos;s right for you
        <div className="w-20 h-1 bg-[#003087] mx-auto mt-2"></div>
      </h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-sm"
      >
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div key={item.id} className="w-full flex-shrink-0 px-4">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div className="flex flex-col items-center space-y-4">
                      <item.icon className="w-16 h-16 text-[#003087]" />
                      <h3 className="text-lg font-semibold text-[#003087] text-center">
                        {item.title}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
