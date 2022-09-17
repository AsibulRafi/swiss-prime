import React from "react";
import { Data } from "./data";
const Index = ({ letter }) => {
  return (
    <div className="trading__text">
      <h2 className="trading__text-heading">{letter}</h2>
      <div className="trading__text-content">
        {Data[letter].map((item) => {
          return (
            <>
              <div key={item.id} className="trading__text-content-single">
                <div className="trading__text-content-single-flex">
                  <h2>{item.question}</h2>
                  <p>{item.answer}</p>
                </div>
                <hr />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
