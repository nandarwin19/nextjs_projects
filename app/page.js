import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center flex flex-col">
        <h1 className="text-6xl font-bold text-primary">NextJSGPT</h1>
        <p className="py-6 text-lg leading-loose">
          In the dance of life, every step is a chance to create a beautiful
          rhythm."
        </p>
        <Link href="/chat" className="btn btn-secondary">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
