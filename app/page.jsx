import Link from 'next/link';
import React from 'react'

export const metadata = {
  title: "Homepage",
  description: "Property Pulse layout for the application",
  keywords: "property, rentals, real estate, property pulse",
};

const Homepage = () => {
  return (
    <div>
      <div>
        <h1 className="text-3xl">Welcome</h1>
        <Link href='/properties'>Show all properties.</Link>
      </div>
    </div>
  );
}

export default Homepage