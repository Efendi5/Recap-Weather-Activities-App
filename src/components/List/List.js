import React from "react";

export default function List({ children, isGoodWeather }) {
  return (
    <div>
      <h1>
        {isGoodWeather
          ? "Bad weather outside! Here's what you can do now."
          : "The weather is awesome! Go outside and:"}
      </h1>
      {children}
    </div>
  );
}
