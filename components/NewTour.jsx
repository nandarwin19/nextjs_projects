"use client";
import React from "react";
import TourInfo from "./TourInfo";

const NewTour = () => {
  const handleSubmit = (e) => {
    // Prevents the default form behavior.
    e.preventDefault();

    // Creates a new FormData object using the form that triggered the submit event.
    const formData = new FormData(e.currentTarget);

    // Converts the FormData object to an object using Object.fromEntries.
    const destination = Object.fromEntries(formData.entries());

    // Logs the resulting object to the console.
    console.log(destination);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-2xl">
        <h2 className="mb-4">Select your dream destination</h2>
        <div className="join w-full">
          <input
            type="text"
            className="input input-bordered join-item w-full"
            placeholder="city"
            name="city"
            required
          />
          <input
            type="text"
            className="input input-bordered join-item w-full"
            placeholder="country"
            name="country"
            required
          />
          <button className="btn btn-primary join-item" type="submit">
            generate tour
          </button>
        </div>
      </form>
      <TourInfo />
    </>
  );
};

export default NewTour;
