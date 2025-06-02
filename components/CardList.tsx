import React from "react";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";

const popularContent = [
  {
    id: 1,
    title: "Top 10 Design Trends",
    badge: "Design",
    image: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg",
    count: 15200,
  },
  {
    id: 2,
    title: "Ultimate React Guide",
    badge: "Development",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    count: 9800,
  },
  {
    id: 3,
    title: "AI in Everyday Life",
    badge: "Technology",
    image: "https://images.pexels.com/photos/5632396/pexels-photo-5632396.jpeg",
    count: 13400,
  },
  {
    id: 4,
    title: "Building UI with Tailwind",
    badge: "Frontend",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
    count: 8700,
  },
];

const latestTransaction = [
  {
    id: 101,
    title: "Payment to John",
    badge: "Transfer",
    image: "https://images.pexels.com/photos/3943720/pexels-photo-3943720.jpeg",
    count: 12000,
  },
  {
    id: 102,
    title: "Grocery Shopping",
    badge: "Expense",
    image: "https://images.pexels.com/photos/5632396/pexels-photo-5632396.jpeg",
    count: 4300,
  },
  {
    id: 103,
    title: "Freelance Income",
    badge: "Income",
    image: "https://images.pexels.com/photos/3184301/pexels-photo-3184301.jpeg",
    count: 9600,
  },
  {
    id: 104,
    title: "Gym Membership",
    badge: "Subscription",
    image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg",
    count: 2900,
  },
];

const CardList = ({ title }: { title: string }) => {
  const list = title === "Popular Content" ? popularContent : latestTransaction;
  return (
    <div>
      <h1 className="text-lg font-medium mb-6">{title}</h1>
      <div className="flex flex-col gap-2">
        {list.map((item) => (
          <Card
            key={item.id}
            className="flex-row items-center justify-between gap-4 p-4"
          >
            <div className="w-12 h-12 rounded-sm relative overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="flex-1 p-0">
              <CardTitle className="text-sm font-medium">
                {item.title}
              </CardTitle>
              <Badge variant="secondary">{item.badge}</Badge>
            </CardContent>
            <CardFooter>{item.count / 1000}</CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardList;
