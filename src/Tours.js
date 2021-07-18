import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTourHandler }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return (
            <Tour
              key={tour.id} {...tour}
              removeTourHandler={removeTourHandler}
            ></Tour>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
