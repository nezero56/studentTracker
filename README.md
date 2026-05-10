# Student Task Tracker

A simple browser-based task tracker for students to add, view, and delete academic tasks.

## Features

- Add tasks with a name and due date
- Tasks persist across page refreshes using localStorage
- Delete individual tasks
- Responsive grid layout (1 / 2 / 3 columns)
- Form validation with error feedback

## Project Structure

```
student-tracker assignment/
├── index.html       # Main UI and layout
├── script.js        # Task logic (add, save, load, delete)
└── images/
    └── background.jpg
```

## Tech Stack

- HTML5
- Tailwind CSS (via CDN)
- Vanilla JavaScript
- localStorage (for data persistence)

## Getting Started

1. Clone or download the project folder.
2. Open `index.html` in any modern browser — no build step needed.

## Usage

1. Enter a task name and select a due date.
2. Click **Add Task** — the task card appears in the grid below.
3. Click **Delete** on any card to remove it.
4. Tasks are automatically saved and restored on page reload.
