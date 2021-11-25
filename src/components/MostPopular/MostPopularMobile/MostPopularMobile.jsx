import React from "react";
import "./MostPopularMobile.css";
import { mobilepopuplar } from "../../../data/data";
export const MostPopularMobile = () => {
  return (
    <div className="mb-mp-contain">
      <ul className="mb-mp-ul">
        {mobilepopuplar.map((data) => (
          <li className="li-grid">
            <div className="li-content">
              <div className="li-text">
                <span class="li-text-name">{data.name}</span>
                <span class="li-text-value">{data.value}</span>
              </div>
              <div className="li-img">
                <div className="image-container">
                  <img src={data.img} />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
