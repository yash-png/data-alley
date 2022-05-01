import React from "react";
import LeftCards from "./LeftCards";
import RightCards from "./RightCards";
import "./process.css";
import {
  FaPenNib,
  BsClockFill,
  IoHomeOutline,
  TiGlobeOutline,
  GoMail,
  BsHeart,
} from "react-icons/all";

const Process = () => {
  return (
    <div id="process" style={{ overflow: "hidden" }} className="mt-5">
      <div
        className="container-fluid"
        style={{
          borderTop: "1px solid black",
          borderRadius: "50% 50% 0 0",
          backgroundColor: "#F8F8F8",
          boxShadow: "inset 10px 10px 27px 9px rgba(0,0,0,0.22);",
        }}
      >
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className=" text-center mt-5">
          <p className="process-title">The 3-step process</p>
          <p className="process-description">
            The business cerrent account that is your accounting software.
          </p>
          <p className="process-description">
            A simple way to run your bussines.
          </p>
        </div>
        {/* information completed */}
        <br></br>
        <br></br>
        <div className="mt-5">
          <div className="row">
            <div className="col-md-12 p-0">
              <div className="text-center">
                <img
                  src="images/1desktop.png"
                  alt="phone"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-6 p-0 ">
              <LeftCards
                number={<FaPenNib />}
                header="Market analysis"
                subHeader="The business cerrent account that is your accounting "
              />
              <LeftCards
                number={<BsClockFill />}
                header="Financial advice"
                subHeader="The business cerrent account that is your accounting "
              />
              <LeftCards
                number={<IoHomeOutline />}
                header="Innovative solution"
                subHeader="The business cerrent account that is your accounting "
              />
            </div>

            <div className="col-md-6 col-sm-6  p-0">
              <RightCards
                number={<TiGlobeOutline />}
                header="Optimal choice"
                subHeader="The business cerrent account that is your accounting "
              />
              <RightCards
                number={<GoMail />}
                header="Business strategy"
                subHeader="The business cerrent account that is your accounting "
              />
              <RightCards
                number={<BsHeart />}
                header="Marketing outline"
                subHeader="The business cerrent account that is your accounting "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
