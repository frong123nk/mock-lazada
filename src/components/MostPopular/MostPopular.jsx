import React from "react";
import "./MostPopular.css";
import { Title } from "../Title/Title";
import { mostpopular } from "../../data/data";
import { useMediaQuery } from "react-responsive";
import { MostPopularMobile } from "./MostPopularMobile/MostPopularMobile";
export const MostPopular = () => {
  const title = "Most Popular";
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  if(isMobile){
      return(
        <>
        <Title title={title} />
        <MostPopularMobile/>
      </>
      )
  }
  if(!isMobile){
    return (
        <>
          <Title title={title} />
          <div className="mp-contain">
            <div className="mp-contain-card">
              <div className="mp-left-card align-left">
                <div className="card-most-popular">
                  <div className="card-contain">
                    <div className="card-most-popular-img">
                      <img
                        className="image"
                        src="https://my-live-02.slatic.net/p/face804d64dce0da8c5fbef58a1e6a2c.jpg"
                      />
                    </div>
                    <div className="most-popular-bg"></div>
                    <div className="card-most-popupal-text">
                      <div className="card-most-pop-title">PlayStation 4 Pro</div>
                      <p className="card-most-pop-value">9,961 products</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mp-right-card align-left ">
                {mostpopular.map((data) => (
                  <div className="card-most-popular align-left">
                    <div className="card-contain align-left">
                      <div className="card-most-popular-img align-left">
                        <img
                          className="image"
                          src={data.img}
                        />
                      </div>
                      <div className="most-popular-bg"></div>
                      <div className="card-most-popupal-text align-left">
                        <div className="card-most-pop-title">{data.name}</div>
                        <p className="card-most-pop-value">{data.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      );
  }

};
