import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
              git status
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#fff" }}>
              <p>
                The git status command is used within a Git repository to its
                current status including the current commit, any modified files,
                and any new files not being tracked by Git. The output of git
                status can vary widely, and it often includes helpful messages
                to direct the user to manage their repository. For example, git
                status will show the user the files they would commit by running
                git commit and the files they could commit by running git add
                before running git commit.
              </p>
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
              git init
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#fff" }}>
              <p>
                The git init command creates or initializes a new Git project,
                or repository. It creates a .git folder with all the tools and
                data necessary to maintain versions. This command only needs to
                be used once per project to complete the initial setup. For
                instance, the code block sets up the home folder as a new git
                repository.
              </p>
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
              git diff
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#fff" }}>
              <p>
                The git diff filename command will display the differences
                between the working directory and the staging area in one
                specific file. Use git diff filename before adding new content
                to ensure that you are making the changes you expect.
              </p>
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
              git log
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#fff" }}>
              <p>
                In Git, the git log command shows all of the commit logs for a
                project. The following is displayed for each commit:
              </p>
              <ul>
                <li>
                  A 40-character code, called a SHA, that uniquely identifies
                  the commit.
                </li>
                <li>The commit author</li>
                <li>The date and time of the commit</li>
                <li>The commit message</li>
              </ul>
              <p>
                This command is particularly useful when you need to refer back
                to an old version of your project. The unique SHA code allows
                you to identify a point in your program’s history that you would
                like to revert to.
              </p>
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
              git commit
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#fff" }}>
              <p>
                The git commit -m "log message here" command creates a new
                commit containing:
              </p>
              <ul>
                <li>The current contents of the staging area</li>
                <li>A log message describing the changes to the repository</li>
              </ul>
              <p>
                A commit is the last step in our Git workflow. A commit
                permanently stores changes from the staging area inside the
                repository. This command is almost always used in conjunction
                with the git add command as git add is used to add files to the
                staging area.
              </p>
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
              git show HEAD
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#fff" }}>
              <p>
                In Git, the commit you are currently on is known as the HEAD
                commit. The output of the git show HEAD command will display
                everything the git log command displays for the HEAD commit,
                plus all the file changes that were committed.
              </p>
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
              git add
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#fff" }}>
              <p>
                The git add filename command is used to add the filename file to
                the staging area. After your changes have been staged, you can
                use the git commit command to permanently store your changes.
              </p>
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
              git project workflow
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#fff" }}>
              <p>A Git project has three parts:</p>
              <ul>
                <li>
                  A Working Directory: where files are created, edited, deleted,
                  and organized
                </li>
                <li>
                  A Staging Area: where changes that are made to the working
                  directory are listed
                </li>
                <li>
                  A Repository: where Git permanently stores changes as
                  different versions of the project
                </li>
              </ul>
              <p>
                The Git workflow consists of editing files in the working
                directory, adding files to the staging area, and saving changes
                to a Git repository.
              </p>
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
              git reset commit SHA
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#fff" }}>
              <p>
                In Git, the git reset commit_SHA command can be used to set HEAD
                to the commit_SHA commit. The commit_SHA argument is the first
                seven digits of a previous commit’s SHA. In this example, the
                HEAD was reset to the commit made on Wed Jan 6. You can use git
                log to see a record of previous commits and their SHA values.
              </p>
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
              git reset HEAD
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#fff" }}>
              <p>
                In Git, the git reset HEAD filename command will remove filename
                from the staging area. Note that this command does not discard
                file changes from the working directory. You might use this
                command if you’ve added a file to the staging area, but the file
                includes incorrect edits. You can use the git status command to
                make sure your file was properly removed from the staging area.
              </p>
              <p>Example:</p>
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
