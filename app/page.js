import Link from "next/link";
import React from "react";

export default function HomePage() {
  return (
    <div>
      <h1 className="text-7xl mb-8 font-bold">Home Page</h1>
      <Link href="/drinks" className="btn btn-accent">
        Get Started
      </Link>
    </div>
  );
}
