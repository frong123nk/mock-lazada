import React from "react";
import "./Title.css";

export const Title = ({ title }) => {
  return (
    <div className="card-title">
      <h3 className="title">{title}</h3>
    </div>
  );
};
