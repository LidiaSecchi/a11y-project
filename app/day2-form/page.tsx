"use client";

import { useEffect, useRef } from "react";

const Day2Form = () => {
  useEffect(() => {}, []);
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4 dark:text-white">Day 2</h1>
      <div className="text-gray-700 dark:text-gray-300">
        <h2>Form</h2>
        <form id="sampleForm"></form>
      </div>
    </div>
  );
};

export default Day2Form;
