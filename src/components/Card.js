import React from "react";

export function Card({ children, title }) {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold text-blue-700 text-center mb-6">
        {title}
      </h2>
      {children}
    </div>
  );
}
