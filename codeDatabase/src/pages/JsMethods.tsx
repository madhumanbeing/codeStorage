import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./pages.css";

export default function JsMethods() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="background-container">
      <div className="main-inner">
        <h1>JS Methods</h1>
        <Accordion
          style={{
            backgroundColor: "#151320",
            border: "0.5px solid #0C9DC2",
            padding: "0.5rem 0",
          }}
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0, color: "#fff" }}>
              findIndex( )
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#fff" }}>
              <p>
                This method returns the index of the first element in an array
                that pass the test in a testing function.
              </p>
              <p>Example:</p>
              <pre>
                <code>
                  {`const arr = ["Danny", "Mandeep", "John", "Ruby"];
const indexFinder = arr.findIndex(element => element === "Mandeep");
console.log(indexFinder); // returns 1`}
                </code>
              </pre>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{
            backgroundColor: "#151320",
            border: "0.5px solid #0C9DC2",
            padding: "0.5rem 0",
          }}
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0, color: "#fff" }}>
              indexOf( )
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#fff" }}>
              <p>
                This method returns the index of the first occurrence of the
                specified element in the array, or -1 if it is not found.
              </p>
              <p>Example:</p>
              <pre>
                <code>
                  {`const arr = ["Danny", "Mandeep", "John", "Ruby"];
const indexFinder = arr.indexOf("Mandeep");
console.log(indexFinder);  returns 1`}
                </code>
              </pre>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{
            backgroundColor: "#151320",
            border: "0.5px solid #0C9DC2",
            padding: "0.5rem 0",
          }}
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0, color: "#fff" }}>
              map( )
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#fff" }}>
              <p>
                This method creates a new array with the results of calling a
                provided function on every element in this array.
              </p>
              <p>Example:</p>
              <pre>
                <code>
                  {`const arr = [1, 2, 3, 4, 5, 6];
const mapped = arr.map(element => element + 30);
console.log(mapped);  returns [31,32,33,34,35,36]`}
                </code>
              </pre>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{
            backgroundColor: "#151320",
            border: "0.5px solid #0C9DC2",
            padding: "0.5rem 0",
          }}
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0, color: "#fff" }}>
              filter( )
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#fff" }}>
              <p>
                This method creates a new array with only elements that passes
                the condition inside the provided function.
              </p>
              <p>Example:</p>
              <pre>
                <code>
                  {`const arr = [1, 2, 3, 4, 5, 6];
const filtered = arr.filter(element => element === 2 || element === 4);
console.log(filtered);  returns [2,4]`}
                </code>
              </pre>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{
            backgroundColor: "#151320",
            border: "0.5px solid #0C9DC2",
            padding: "0.5rem 0",
          }}
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel5bh-content"
            id="panel5bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0, color: "#fff" }}>
              sort( )
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#fff" }}>
              <p>
                This method is used to arrange/sort array’s elements either in
                ascending or descending order.
              </p>
              <p>Example:</p>
              <pre>
                <code>
                  {`const arr = [1, 2, 3, 4, 5, 6];
const alphabet = ["f", "a", "c", "v", "z"];

descend = arr.sort((a,b) => a > b ? -1 : 1);
console.log(descend) returns [6, 5, 4, 3, 2, 1]

descend = arr.sort((a,b) => a > b ? -1 : 1);
console.log(descend) returns [1, 2, 3, 4, 5, 6]
`}
                </code>
              </pre>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{
            backgroundColor: "#151320",
            border: "0.5px solid #0C9DC2",
            padding: "0.5rem 0",
          }}
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel6bh-content"
            id="panel6bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0, color: "#fff" }}>
              every( )
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#fff" }}>
              <p>
                This method checks every element in the array that passes the
                condition, returning true or false as appropriate.
              </p>
              <p>Example:</p>
              <pre>
                <code>
                  {`const arr = [1, 2, 3, 4, 5, 6, 7];

const greaterFive = arr.every(num => num > 5);
console.log(greaterFive) returns false;

const lessnine = arr.every(num => num < 9);
console.log(lessnine) returns true;
`}
                </code>
              </pre>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{
            backgroundColor: "#151320",
            border: "0.5px solid #0C9DC2",
            padding: "0.5rem 0",
          }}
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel7bh-content"
            id="panel7bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0, color: "#fff" }}>
              some( )
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#fff" }}>
              <p>
                This method checks if at least one element in the array that
                passes the condition, returning true or false as appropriate.
              </p>
              <p>Example:</p>
              <pre>
                <code>
                  {`const arr = [1, 2, 3, 4, 5, 6, 7];

const greaterNum = arr.some(num => num > 5);
console.log(greaterNum) returns true;

const lessNum = arr.some(num => num <= 0);
console.log(lessNum) returns false;
`}
                </code>
              </pre>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{
            backgroundColor: "#151320",
            border: "0.5px solid #0C9DC2",
            padding: "0.5rem 0",
          }}
          expanded={expanded === "panel8"}
          onChange={handleChange("panel8")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel8bh-content"
            id="panel8bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0, color: "#fff" }}>
              includes( )
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#fff" }}>
              <p>
                This method checks if an array includes the element that passes
                the condition, returning true or false as appropriate.
              </p>
              <p>Example:</p>
              <pre>
                <code>
                  {`const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.includes(2)); returns true;
console.log(arr.includes(8)); returns false;
`}
                </code>
              </pre>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{
            backgroundColor: "#151320",
            border: "0.5px solid #0C9DC2",
            padding: "0.5rem 0",
          }}
          expanded={expanded === "panel9"}
          onChange={handleChange("panel9")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel9bh-content"
            id="panel9bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0, color: "#fff" }}>
              reduce( )
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#fff" }}>
              <p>
                This method applies a function against an accumulator and each
                element in the array to reduce it to a single value.
              </p>
              <p>Example:</p>
              <pre>
                <code>
                  {`const arr = [1, 2, 3, 4, 5, 6];
const reduced = arr.reduce((total,current) => total + current)
console.log(reduced); returns 21;
`}
                </code>
              </pre>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{
            backgroundColor: "#151320",
            border: "0.5px solid #0C9DC2",
            padding: "0.5rem 0",
          }}
          expanded={expanded === "panel10"}
          onChange={handleChange("panel10")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel10bh-content"
            id="panel10bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0, color: "#fff" }}>
              find( )
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#fff" }}>
              <p>
                This method returns the value of the first element in an array
                that pass the test in a testing function.
              </p>
              <p>Example:</p>
              <pre>
                <code>
                  {`const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const found = arr.find(element => element > 5);
console.log(found); returns 6;
`}
                </code>
              </pre>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{
            backgroundColor: "#151320",
            border: "0.5px solid #0C9DC2",
            padding: "0.5rem 0",
          }}
          expanded={expanded === "panel11"}
          onChange={handleChange("panel11")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel11bh-content"
            id="panel11bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0, color: "#fff" }}>
              fill( )
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#fff" }}>
              <p>
                This method fills the elements in an array with a static value
                and returns the modified array.
              </p>
              <p>Example:</p>
              <pre>
                <code>
                  {`const arr = new Array(3);
console.log(arr); returns [empty, empty, empty]
console.log(arr.fill(10)); returns [10, 10, 10]
`}
                </code>
              </pre>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{
            backgroundColor: "#151320",
            border: "0.5px solid #0C9DC2",
            padding: "0.5rem 0",
          }}
          expanded={expanded === "panel12"}
          onChange={handleChange("panel12")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel12bh-content"
            id="panel12bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0, color: "#fff" }}>
              slice( )
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#fff" }}>
              <p>
                This method returns a new array with specified start to end
                elements.
              </p>
              <p>Example:</p>
              <pre>
                <code>
                  {`const arr = ["a", "b", "c", "d", "e"];
const sliced = arr.slice(2,4);
console.log(sliced); returns ["c", "d"]
console.log(arr); returns ["a", "b", "c", "d", "e"]
`}
                </code>
              </pre>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{
            backgroundColor: "#151320",
            border: "0.5px solid #0C9DC2",
            padding: "0.5rem 0",
          }}
          expanded={expanded === "panel13"}
          onChange={handleChange("panel13")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel13bh-content"
            id="panel13bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0, color: "#fff" }}>
              reverse( )
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#fff" }}>
              <p>
                This method reverses an array in place. Element at last index
                will be first and element at 0 index will be last.
              </p>
              <p>Example:</p>
              <pre>
                <code>
                  {`const arr = [1, 2, 3];
arr.reverse();
console.log(arr); returns [3, 2, 1]
`}
                </code>
              </pre>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{
            backgroundColor: "#151320",
            border: "0.5px solid #0C9DC2",
            padding: "0.5rem 0",
          }}
          expanded={expanded === "panel14"}
          onChange={handleChange("panel14")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel14bh-content"
            id="panel14bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0, color: "#fff" }}>
              push( )
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#fff" }}>
              <p>
                This method adds one or more elements to the end of array and
                returns the new length of the array.
              </p>
              <p>Example:</p>
              <pre>
                <code>
                  {`const fruits = ["Apple", "Peach"];
console.log(fruits.push("Banana"));
console.log(fruits); returns ["Apple", "Peach", "Banana"]
`}
                </code>
              </pre>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{
            backgroundColor: "#151320",
            border: "0.5px solid #0C9DC2",
            padding: "0.5rem 0",
          }}
          expanded={expanded === "panel15"}
          onChange={handleChange("panel15")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel15bh-content"
            id="panel15bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0, color: "#fff" }}>
              pop( )
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#fff" }}>
              <p>
                This method removes the last element from the end of array and
                returns that element.
              </p>
              <p>Example:</p>
              <pre>
                <code>
                  {`const fruits = ["Apple", "Peach"];
fruits.pop();
console.log(fruits); returns ["Apple"]
`}
                </code>
              </pre>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{
            backgroundColor: "#151320",
            border: "0.5px solid #0C9DC2",
            padding: "0.5rem 0",
          }}
          expanded={expanded === "panel16"}
          onChange={handleChange("panel16")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel16bh-content"
            id="panel16bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0, color: "#fff" }}>
              shift( )
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#fff" }}>
              <p>
                This method removes the first element from an array and returns
                that element.
              </p>
              <p>Example:</p>
              <pre>
                <code>
                  {`const fruits = ["Apple", "Peach"];
fruits.shift();
console.log(fruits); returns ["Peach"]
`}
                </code>
              </pre>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{
            backgroundColor: "#151320",
            border: "0.5px solid #0C9DC2",
            padding: "0.5rem 0",
          }}
          expanded={expanded === "panel17"}
          onChange={handleChange("panel17")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel17bh-content"
            id="panel17bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0, color: "#fff" }}>
              unshift( )
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#fff" }}>
              <p>
                This method adds one or more elements to the beginning of an
                array and returns the new length of the array.
              </p>
              <p>Example:</p>
              <pre>
                <code>
                  {`const fruits = ["Apple", "Peach"];
console.log(unshift("Banana")); returns 3
console.log(fruits); returns ["Banana", "Apple", "Peach"]
`}
                </code>
              </pre>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{
            backgroundColor: "#151320",
            border: "0.5px solid #0C9DC2",
            padding: "0.5rem 0",
          }}
          expanded={expanded === "panel18"}
          onChange={handleChange("panel18")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel18bh-content"
            id="panel18bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0, color: "#fff" }}>
              forEach( )
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#fff" }}>
              <p>
                This method helps to loop over array by executing a provided
                callback function for each element in an array.
              </p>
              <p>Example:</p>
              <pre>
                <code>
                  {`const arr = [1, 2, 3];
arr.forEach(element => {
console.log(element)
});
returns
1
2
3`}
                </code>
              </pre>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
