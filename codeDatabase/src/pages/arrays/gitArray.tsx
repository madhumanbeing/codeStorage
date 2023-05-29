export const gitArray = [
  {
    id: 1,
    title: "git status",
    content:
      "The git status command is used within a Git repository to its current status including the current commit, any modified files, and any new files not being tracked by Git. The output of git status can vary widely, and it often includes helpful messages to direct the user to manage their repository. For example, git status will show the user the files they would commit by running git commit and the files they could commit by running git add before running git commit.",
    listItems: [],
  },
  {
    id: 2,
    title: "git init",
    content:
      "The git init command creates or initializes a new Git project, or repository. It creates a .git folder with all the tools and data necessary to maintain versions. This command only needs to be used once per project to complete the initial setup. For instance, the code block sets up the home folder as a new git repository.",
    listItems: [],
  },
  {
    id: 3,
    title: "git diff",
    content:
      "The git diff filename command will display the differences between the working directory and the staging area in one specific file. Use git diff filename before adding new content to ensure that you are making the changes you expect.",
    listItems: [],
  },
  {
    id: 4,
    title: "git log",
    content:
      "In Git, the git log command shows all of the commit logs for a project. The following is displayed for each commit:",
    listItems: [
      "A 40-character code, called a SHA, that uniquely identifies the commit.",
      "The commit author",
      "The date and time of the commit",
      "The commit message",
    ],
    summary:
      "This command is particularly useful when you need to refer back to an old version of your project. The unique SHA code allows you to identify a point in your program’s history that you would like to revert to.",
  },
  {
    id: 5,
    title: "git commit",
    content:
      "The git commit -m 'log message here' command creates a new commit containing:",
    listItems: [
      "The current contents of the staging area",
      "A log message describing the changes to the repository",
    ],
    summary:
      "A commit is the last step in our Git workflow. A commit permanently stores changes from the staging area inside the repository. This command is almost always used in conjunction with the git add command as git add is used to add files to the staging area.",
  },
  {
    id: 6,
    title: "git show HEAD",
    content:
      "In Git, the commit you are currently on is known as the HEAD commit. The output of the git show HEAD command will display everything the git log command displays for the HEAD commit, plus all the file changes that were committed.",
    listItems: [],
  },
  {
    id: 7,
    title: "git add",
    content:
      "The git add filename command is used to add the filename file to the staging area. After your changes have been staged, you can use the git commit command to permanently store your changes.",
    listItems: [],
  },
  {
    id: 8,
    title: "git project workflow",
    content: "A Git project has three parts:",
    listItems: [
      "A Working Directory: where files are created, edited, deleted, and organized",
      "A Staging Area: where changes that are made to the working directory are listed",
      "A Repository: where Git permanently stores changes as different versions of the project",
    ],
    summary:
      "The Git workflow consists of editing files in the working directory, adding files to the staging area, and saving changes to a Git repository.",
  },
  {
    id: 9,
    title: "git reset commit SHA",
    content:
      "In Git, the git reset commit_SHA command can be used to set HEAD to the commit_SHA commit. In this example, the HEAD was reset to the commit made on Wed Jan 6.",
    listItems: [
      "The commit_SHA argument is the first seven digits of a previous commit’s SHA.",
      "You can use git log to see a record of previous commits and their SHA values.",
    ],
  },
  {
    id: 10,
    title: "git reset HEAD",
    content:
      "In Git, the git reset HEAD filename command will remove filename from the staging area.",
    listItems: [
      "Note that this command does not discard file changes from the working directory.",
      "You can use the git status command to make sure your file was properly removed from the staging area.",
    ],
  },
  {
    id: 11,
    title: "git checkout HEAD",
    content:
      "In Git, the git checkout HEAD filename command rolls back all changes that have been made to filename since the last commit.",
    listItems: [
      "This command will change your working directory to look exactly as it did when you last made a commit.",
      "You can use the git diff command to see if the rollback was successful.",
      "If git diff doesn’t output anything, this means your working directory matches your last commit.",
    ],
  },
  {
    id: 12,
    title: "git stash",
    content:
      "git stash allows you to get back to a clean commit point with a synchronized working tree, and avoid losing your local changes in the process of switching branches or tasks.",
    listItems: [
      "You’re “stashing” your local work temporarily in order to update a previous commit and later on retrieve your work.",
      "You can use git stash pop to retrieve from your stash.",
    ],
  },
  {
    id: 13,
    title: "git log options",
    content:
      "git log allows you to view the commit history of the branch you currently have checked out.",
    listItems: [
      "git log --oneline show the list of commits in one line format.",
      "git log -S “keyword” displays a list of commits that contain the keyword in the message.",
      "git log --oneline --graph displays a visual representation of how the branches and commits were created in order to help you make sense of your repository history.",
    ],
  },
  {
    id: 14,
    title: "git commit –amend",
    content: "git commit --amend flag allows you to update a commit.",
    listItems: [
      "To avoid creating a new one, you could create your changes, stage them with git add and then type the command git commit --amend to update your previous commit.",
      "The terminal editor will ask you to update your commit message.",
    ],
  },
  {
    id: 15,
    title: "git aliases",
    content:
      "If you have a set of commands that you use regularly and want to save some time from typing them, you can easily set up an alias for each command using Git config:",
    listItems: [
      'The following terminal command git config --global alias.glop "log --pretty=format:"%h %s" --graph" allows you to reduce the entire command to: git glop',
    ],
  },
  {
    id: 16,
    title: "Deleting a Branch",
    content:
      "In Git, the git branch -d branch_name command is used to delete the branch_name branch.",
    listItems: [
      "It’s good practice to delete a branch after it has been merged into the master branch.",
    ],
  },
  {
    id: 17,
    title: "Pull Requests on GitHub",
    content:
      "A pull request is a feature of GitHub and other source code management tools that allow a repository’s collaborators to review and give feedback on proposed code changes before they are accepted and merged to another branch, usually the main branch.",
    listItems: [
      "Each pull request creates a discussion forum that can be used by reviewers and authors alike to highlight or add comments to a single line of code or chunk of code, add videos or images, etc.",
      "Going through the pull request process can increase group knowledge, improve product quality, and develop professional skills through group critique.",
    ],
  },
  {
    id: 18,
    title: "A GitHub README File",
    content:
      "Adding a README file to your GitHub repository is the best way to introduce your project to others...",
    listItems: [
      "Since it is usually the first thing others see on your repository, it is the best place to explain what your project does, why it’s useful, and how they can get started with it.",
      "A good README file in GitHub, at minimum, contains the following elements:",
      "- Title",
      "- Description",
      "- Features",
      "- How to use",
      "- Technologies",
      "- Collaborators",
      "- License",
    ],
    summary: "You can further level up your README file with markdown:",
    listItems2: [
      "- Use headers and HTML to format your README and make it easier to read.",
      "- The headers automatically generate a table of contents on GitHub!",
      "- Use media, such as images and videos, to make your project look more appealing.",
    ],
  },
];
