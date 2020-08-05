export const vocabulary = [
  {
    id: 0,
    lessonId: 0,
    term: 'section lead',
    def: 'your instructors',
    links: [],
  },
  {
    id: 1,
    lessonId: 4,
    term: 'ISO 8601',
    def: 'International standard for the exchange of date/time data',
    links: ['https://en.wikipedia.org/wiki/ISO_8601'],
  },
  {
    id: 2,
    lessonId: 4,
    term: 'repository (or repo, for short)',
    def: 'A directory of files that are tracked by Git',
    links: [],
  },
  {
    id: 3,
    lessonId: 4,
    term: 'track',
    def:
      "Git will notice any changes to that file. We call these changes 'differences' or 'diffs. Git will allow you to choose whether to add the change, or 'diff,' in order to keep it",
    links: [],
  },
  {
    id: 4,
    lessonId: 4,
    term: 'diff',
    def:
      " all the changes that happened in it since the last commit. The 'diff' of a repo is all the diffs in all the tracked files in the repo that have been made, but which have not yet been committed (sometimes programmers call this 'the diffset')",
    links: [],
  },
  {
    id: 5,
    lessonId: 4,
    term: 'commit',
    def:
      "When a diff is decided to be a good thing to save, we commit the diff to the repo's history using the commit command. When we make a commit we are asked to write a 'log' message which describes what happened in the diff. Each commit also knows when it happened and what the repo's 'diff' was",
    links: [],
  },
  {
    id: 6,
    lessonId: 4,
    term: 'log',
    def: 'The record of what happened in each commit',
    links: [],
  },
  {
    id: 7,
    lessonId: 4,
    term: 'local/remote',
    def:
      "When we start working with a git repo, we 'clone' it from a remote source and have a copy of that directory on our own system. We call the repo on our personal system the local repo.",
    links: [],
  },
  {
    id: 8,
    lessonId: 4,
    term: 'master branch',
    def:
      'by default, when you create a Git repo, you will be working on the master branch.',
    links: [],
  },
  {
    id: 9,
    lessonId: 4,
    term: 'branch',
    def:
      'The combined history of all the changes of all the files in the repo.',
    links: ['https://git-scm.com/video/what-is-git'],
  },
  {
    id: 10,
    lessonId: 17,
    term: 'program',
    def: 'files on your computer filled with text.',
    links: [],
  },
];
