import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { gitArray } from "./arrays/gitArray";
import "./pages.css";

export default function Github() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="background-container">
      <div className="main-inner">
        <h1>Git</h1>
        {gitArray.map((item) => (
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
                <p>{item.content}</p>
                {item.listItems && item.listItems.length > 0 && (
                  <ul>
                    {item.listItems.map((listItem, index) => (
                      <li key={index}>{listItem}</li>
                    ))}
                  </ul>
                )}
                {item.summary && item.summary.length > 0 && (
                  <p>{item.summary}</p>
                )}
                {item.listItems2 && item.listItems2.length > 0 && (
                  <ul>
                    {item.listItems2.map((listItem, index) => (
                      <li key={index}>{listItem}</li>
                    ))}
                  </ul>
                )}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
