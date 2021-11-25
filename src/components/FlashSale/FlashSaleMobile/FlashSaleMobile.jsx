import React from "react";
import "./FlashSaleMobile.css";
import { flasesales, m_flasesales } from "../../../data/data";

export const FlashSaleMobile = (props) => {
  const { hour, minute, seconds } = props;
  return (
    <div className="fs-m-container">
      <div className="fs-m-content-time">
        <div className="fs-m-time">
          <span className="m-time-text">Ending in</span>
          <span className="m-time">{hour}</span>
          <span class="m-colon">:</span>
          <span className="m-time">{minute}</span>
          <span class="m-colon">:</span>
          <span className="m-time">{seconds}</span>
        </div>
      </div>
      <div className="fs-m-content-body">
        <div className="fs-m-left-unit">
          <div className="m-card-unit">
            <div className="m-card-unit-img">
              <img
                className="fs-m-img"
                src="https://th-test-11.slatic.net/p/5c1c7d0b5cae1959ab70e44df87b8281.jpg_260x260q80.jpg"
              />
            </div>
            <div className="m-card-unit-text">
              <div className="m-sale-price">
                <span>฿4.00</span>
              </div>
              <div className="m-card-discount">
                <span className="m-line">฿29.00</span>
                <span className="m-discount"> -86%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="fs-m-right-unit">
          {m_flasesales.map((flasesale) => (
            <div className="m-card-unit">
              <div className="m-card-unit-img">
                <img
                  className="fs-m-img"
                  src={flasesale.img}
                  alt={flasesale.img}
                />
              </div>
              <div className="m-card-unit-text">
                <div className="m-sale-price">
                  <span>฿{flasesale.price}</span>
                </div>
                <div className="m-card-discount">
                  <span className="m-line">฿{flasesale.original_price}</span>
                  <span className="m-discount"> {flasesale.discount}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
