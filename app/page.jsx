import Hero from "@/components/Hero";
import HomeProperties from "@/components/HomeProperties";
import Infoboxes from "@/components/Infoboxes";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Homepage",
  description: "Property Pulse layout for the application",
  keywords: "property, rentals, real estate, property pulse",
};

const Homepage = () => {
  return (
    <>
      <Hero />
      <Infoboxes />
      <HomeProperties />
    </>
  );
};

export default Homepage;
