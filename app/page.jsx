import Hero from "@/components/Hero";
import HomeProperties from "@/components/HomeProperties";
import Infoboxes from "@/components/Infoboxes";
import Link from "next/link";
import React from "react";
import connectDB from "@/config/database";

export const metadata = {
  title: "Homepage",
  description: "Property Pulse layout for the application",
  keywords: "property, rentals, real estate, property pulse",
};

const Homepage = async () => {
  // console.log(process.env.MONGODB_URI);
  await connectDB();
  return (
    <>
      <Hero />
      <Infoboxes />
      <HomeProperties />
    </>
  );
};

export default Homepage;
