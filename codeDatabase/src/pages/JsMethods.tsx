import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { jsMethods, jsMath } from "./arrays/jsArray";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./pages.css";

export default function JsMethods() {
  const [expanded, setExpanded] = React.useState(false);
  const [isHiddenArrays, setIsHiddenArrays] = useState(true);
  const [isHiddenMath, setIsHiddenMath] = useState(true);

  const handleChange = (panel: any) => (event: any, isExpanded: any) => {
    setExpanded(isExpanded ? panel : false);
  };

  const toggleVisibilityArrays = () => {
    setIsHiddenArrays(!isHiddenArrays);
  };

  const toggleVisibilityMath = () => {
    setIsHiddenMath(!isHiddenMath);
  };

  return (
    <div className="home-content">
      <button className="button-home">
        <Link to="/">Home</Link>
      </button>
      <div className="background-container">
        <div className="main-inner">
          <button onClick={toggleVisibilityArrays}>Arrays</button>
          {!isHiddenArrays && (
            <div>
              {jsMethods.map((item) => (
                <Accordion
                  key={item.id}
                  style={{
                    backgroundColor: "#151320",
                    border: "0.5px solid #0C9DC2",
                    padding: "0.5rem 0",
                  }}
                  expanded={expanded === `panel${item.id}`}
                  onChange={handleChange(`panel${item.id}`)}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                    aria-controls={`panel${item.id}bh-content`}
                    id={`panel${item.id}bh-header`}
                  >
                    <Typography
                      sx={{
                        width: "33%",
                        flexShrink: 0,
                        color: "#fff",
                        fontSize: "20px",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ color: "#fff" }}>
                      <p>{item.description}</p>
                      <p>Example:</p>
                      <pre>
                        <code>{item.example}</code>
                      </pre>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          )}
        </div>

        <div className="main-inner-last">
          <button onClick={toggleVisibilityMath}>Math</button>
          {!isHiddenMath && (
            <div>
              {jsMath.map((item) => (
                <Accordion
                  key={item.id}
                  style={{
                    backgroundColor: "#151320",
                    border: "0.5px solid #0C9DC2",
                    padding: "0.5rem 0",
                    width: "1000px",
                  }}
                  expanded={expanded === `panel${item.id}`}
                  onChange={handleChange(`panel${item.id}`)}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                    aria-controls={`panel${item.id}bh-content`}
                    id={`panel${item.id}bh-header`}
                  >
                    <Typography
                      sx={{
                        width: "33%",
                        flexShrink: 0,
                        color: "#fff",
                        fontSize: "20px",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ color: "#fff" }}>
                      <p>{item.description}</p>
                      <p>Example:</p>
                      <pre>
                        <code>{item.example}</code>
                      </pre>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
