import React from "react";

export default function List({ children, data }) {
   return(
    data &&
    <div>
      <h1>
        <div>{`${data.condition} and ${data.temperature} Grad C`}</div>
        {data.isGoodWeather
          ? "The weather is awesome! Go outside and:"
          : "Bad weather outside! Here's what you can do now."
        }
      </h1>
      {children}
    </div>
  );
}
