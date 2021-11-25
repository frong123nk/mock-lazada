import React, { useEffect } from "react";
import "./FlashSale.css";
import { Title } from "../Title/Title";
import { flasesales } from "../../data/data";
import { useMediaQuery } from "react-responsive";
import { FlashSaleMobile } from "./FlashSaleMobile/FlashSaleMobile";
const { useState } = React;

export const FlashSale = () => {
  const title = "Flash Sale";
  const [hour, setHour] = React.useState(5);
  const [minute, setMinute] = React.useState(30);
  const [seconds, setSeconds] = React.useState(50);
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  const CountSeconds = () => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds(60);
    }
  };
  const CountMinute = () => {
    if (minute == 0) {
      setMinute(59);
    } else if (seconds == 0) {
      setMinute(minute - 1);
    }
  };

  const CountHour = () => {
    if (hour == 0) {
      setHour(4);
    }
    if (minute == 0) {
      setHour(hour - 1);
    }
  };

  useEffect(() => {
    CountSeconds();
    CountMinute();
    CountHour();
  });
  if (isMobile) {
    return (
      <>
        <Title title={title} />
        <FlashSaleMobile hour={hour} minute={minute} seconds={seconds} />
      </>
    );
  }
  if (!isMobile) {
    return (
      <>
        <Title title={title} />
        <div className="fs-container">
          <div className="fs-header">
            <div className="fs-header-left">
              <div className="fs-status-name">On Sale Now</div>
              <div className="fs-time">
                <div className="fs-time-text">Ending in</div>
                <div className="fs-time-count">{hour}</div>
                <span class="colon">:</span>
                <div className="fs-time-count">{minute}</div>
                <span class="colon">:</span>
                <div className="fs-time-count">{seconds}</div>
              </div>
            </div>
            <button className="fs-button">SHOP ALL PRODUCTS</button>
          </div>
          <div className="fs-body">
            {flasesales.map((flasesale, index) => (
              <div className="fs-body-unit" id={index}>
                <div className="unit-img-contain">
                  <img
                    className="unit-img"
                    alt={flasesale.title}
                    src={flasesale.img}
                  />
                </div>
                <div className="unit-card-text">
                  <div className="unit-card-title">{flasesale.title}</div>
                  <div className="unit-card-price">
                    <span class="currency">฿</span>
                    <span class="price">{flasesale.price}</span>
                  </div>
                  <div className="unit-card-original-price">
                    <div className="original-price">
                      <span class="currency">฿</span>
                      <span class="price">{flasesale.original_price}</span>
                    </div>
                    <div className="fs-discount">{flasesale.discount}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
};
