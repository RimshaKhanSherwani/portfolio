import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Link href="/about">Go to About Page</Link>
    </div>
  );
};

export default HomePage;
