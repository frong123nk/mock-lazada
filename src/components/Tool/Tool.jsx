import React from "react";
import "./Tool.css";
import { tools } from "../../data/data";

export const Tool = () => {
  return (
    <div className="tool-container">
      {tools.map((tool) => (
        <div className="tool-button-container">
          <div className="tool-text-icon">
            <div className="tool-icon">
              <img className="image" src={tool.icon} />
            </div>
            <div class="tool-name">{tool.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
