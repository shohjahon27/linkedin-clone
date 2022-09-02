import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => {
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>;
    };
    
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Linkedin News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Pzeroman is back", "Top news - 899 readers")}
      {newsArticle("weather update", "Top news - 251 readers")}
      {newsArticle("Does Pandemia start again?", "Top news - 1100 readers")}
      {newsArticle("developer news", "Top news - 455 readers")}
      {newsArticle("Bill Gates influenced...", "Top news - 7858 readers")}
      {newsArticle("Elon Musk and Tesla", "Top news - 45000 readers")}
      {newsArticle("Evil Twin Mode..", "Top news - 1425 readers")}
      {newsArticle("Ishowspeed is on fire", "Top news - 756985 readers")}
      {newsArticle("Xxxtentacion's legacy...", "Top news - 1014774 readers")}
    </div>
  );
}

export default Widgets;
