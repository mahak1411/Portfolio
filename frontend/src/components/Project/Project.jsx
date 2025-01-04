import React from "react";
import Cards from "./Cards";
import zerodha from "../../images/zerodha.png";
import devMap from "../../images/devMap.png";
import weather from "../../images/weather.png";
import expense from "../../images/expense.png";
import note from "../../images/note.png";
import textUtility from "../../images/textUtility.png";
import Zerodha from "./ProjectDetail/Zerodha";

const Project = () => {
  return (
    <div className="projects container-fluid">
      <h2 className="text-center mt-5">My Projects!</h2>
      <div className="row justify-content-center mt-4">
        {/* Cards */}
       
        <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-center mb-4">
          <Cards
            image={devMap}
            heading={"DevMap"}
            text={
              "A tech learning and roadmap website for developers and techies..."
            }
            exploreMore={'/project-devmap'}
          />
        </div>
        <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-center mb-4">
          <Cards
            image={weather}
            heading={"Weather App"}
            text={"Displays real-time weather updates for entered location."}
            exploreMore={'/project-weather'}
          />
        </div>
        <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-center mb-4">
          <Cards
            image={expense}
            heading={"Expense Tracker"}
            text={"Tracks daily expenses with ease."}
            exploreMore={'/project-expenseTracker'}
          />
        </div>
        <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-center mb-4">
          <Cards image={textUtility} heading={"Text Utitily Website"} text={"Tools for text analysis and formatting."}
          exploreMore={'/project-textUtility'} />
        </div>
        <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-center mb-4">
          <Cards image={note} heading={"iNotebook"} text={"A secure online notebook for managing notes."} exploreMore={'/project-iNotebook'}/>
        </div>
        <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-center mb-4">
          <Cards
            image={zerodha}
            heading={"Zerodha Clone"}
            text={"A mock trading platform replicating Zerodha's interface."}
            exploreMore = {'/project-zerodha'}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
