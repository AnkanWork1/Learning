"use client";

import React from "react";
import Card from "@/components/Card"; // adjust the path if needed
import Image from "next/image";

export default function Dashboard() {
  const cards = [
    {
      title: "Users",
      text: "150 active users",
      img: "/feature1.png",
    },
    {
      title: "Revenue",
      text: "$12,450 this month",
      img: "/feature2.png",
    },
    {
      title: "Orders",
      text: "320 pending orders",
      img: "/feature3.png",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 w-400 h-auto">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <Card key={index}>
            <div className="flex flex-col items-center">
              <Image
                src={card.img}
                alt={card.title}
                width={80}
                height={80}
                className="mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
              <p className="text-gray-500">{card.text}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
