import Link from "next/link";
import React from "react";
import properties from "@/properties.json";
import PropertyCard from "@/components/PropertyCard";


async function fetchProperties() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/properties`);
    
  } catch (error) {
    
  }
}

const Propertiespage = () => {
  return (
    <>
      {/* <!-- All Listings --> */}
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto px-4 py-6">
          {properties.length === 0 ? (
            <p>No properties found</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* <!-- Listing 1 --> */}
              {properties.map((property, index) => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Propertiespage;
