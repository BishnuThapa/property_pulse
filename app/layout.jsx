import React from "react";
import '@/assets/styles/globals.css';

export const metadata = {
    title: "Property Pulse | Find the perfect rentals.",
    description: "Property Pulse layout for the application",
    keywords: "property, rentals, real estate, property pulse",
}

const MainLayout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
