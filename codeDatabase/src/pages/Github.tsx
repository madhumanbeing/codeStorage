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
              git checkout HEAD
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#fff" }}>
              <p>
                In Git, the git checkout HEAD filename command rolls back all
                changes that have been made to filename since the last commit.
                In other words, this command will change your working directory
                to look exactly as it did when you last made a commit. You can
                use the git diff command to see if the rollback was successful.
                If git diff doesn’t output anything, this means your working
                directory matches your last commit.
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
          expanded={expanded === "panel12"}
          onChange={handleChange("panel12")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel12bh-content"
            id="panel12bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0, color: "#fff" }}>
              git stash
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#fff" }}>
              <p>
                git stash allows you to get back to a clean commit point with a
                synchronized working tree, and avoid losing your local changes
                in the process of switching branches or tasks. You’re “stashing”
                your local work temporarily in order to update a previous commit
                and later on retrieve your work. You can use git stash pop to
                retrieve from your stash.
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
          expanded={expanded === "panel13"}
          onChange={handleChange("panel13")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel13bh-content"
            id="panel13bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0, color: "#fff" }}>
              git log options
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#fff" }}>
              <p>
                git log allows you to view the commit history of the branch you
                currently have checked out. git log --oneline show the list of
                commits in one line format. `git log -S “keyword” displays a
                list of commits that contain the keyword in the message. git log
                --oneline --graph displays a visual representation of how the
                branches and commits were created in order to help you make
                sense of your repository history.
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
          expanded={expanded === "panel14"}
          onChange={handleChange("panel14")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel14bh-content"
            id="panel14bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0, color: "#fff" }}>
              git commit –amend
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#fff" }}>
              <p>
                git commit --amend flag allows you to update a commit. To avoid
                creating a new one, you could create your changes, stage them
                with git add and then type the command git commit --amend to
                update your previous commit. The terminal editor will ask you to
                update your commit message.
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
          expanded={expanded === "panel15"}
          onChange={handleChange("panel15")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel15bh-content"
            id="panel15bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0, color: "#fff" }}>
              git aliases
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#fff" }}>
              <p>
                If you have a set of commands that you use regularly and want to
                save some time from typing them, you can easily set up an alias
                for each command using Git config. The following terminal
                command git config --global alias.glop "log --pretty=format:"%h
                %s" --graph" allows you to reduce the entire command to: git
                glop
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
          expanded={expanded === "panel16"}
          onChange={handleChange("panel16")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel16bh-content"
            id="panel16bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0, color: "#fff" }}>
              Deleting a Branch
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#fff" }}>
              <p>
                In Git, the git branch -d branch_name command is used to delete
                the branch_name branch. It’s good practice to delete a branch
                after it has been merged into the master branch.
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
          expanded={expanded === "panel17"}
          onChange={handleChange("panel17")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel17bh-content"
            id="panel17bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0, color: "#fff" }}>
              Pull Requests on GitHub
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#fff" }}>
              <p>
                A pull request is a feature of GitHub and other source code
                management tools that allow a repository’s collaborators to
                review and give feedback on proposed code changes before they
                are accepted and merged to another branch, usually the main
                branch. Each pull request creates a discussion forum that can be
                used by reviewers and authors alike to highlight or add comments
                to a single line of code or chunk of code, add videos or images,
                etc. Going through the pull request process can increase group
                knowledge, improve product quality, and develop professional
                skills through group critique.
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
          expanded={expanded === "panel18"}
          onChange={handleChange("panel18")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel18bh-content"
            id="panel18bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0, color: "#fff" }}>
              A GitHub README File
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#fff" }}>
              <p>
                Adding a README file to your GitHub repository is the best way
                to introduce your project to others. Since it is usually the
                first thing others see on your repository, it is the best place
                to explain what your project does, why it’s useful, and how they
                can get started with it.
              </p>
              <p>
                Writing a Good README file A good README file in GitHub, at
                minimum, contains the following elements:
              </p>
              <ul>
                <li>Title</li>
                <li>Description</li>
                <li>Features</li>
                <li>How to use</li>
                <li>Technologies</li>
                <li>Collaborators</li>
                <li>License</li>
              </ul>
              <p>You can further level up your README file with markdown:</p>
              <ul>
                <li>
                  Use headers and HTML to format your README and make it easier
                  to read.
                </li>
                <li>
                  The headers automatically generate a table of contents on
                  GitHub!
                </li>
                <li>
                  Use media, such as images and videos, to make your project
                  look more appealing.
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
