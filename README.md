# React Basics Todo App

A small to-do application demonstrating the React concepts required by the assignment: JSX, functional components, props, `useState`, `useEffect`, conditional rendering, and list rendering with keys.

## Run the project

1. Open a terminal in this folder.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open the local address printed in the terminal.

## Features

- Add a task.
- Mark a task complete or incomplete.
- Delete a task.
- See completed and total task counts.
- Keep tasks after refreshing the browser using local storage.

## Project structure

- `src/App.jsx`: owns the task list and the main app behavior.
- `src/components/TodoForm.jsx`: manages the input and sends new task text to the parent.
- `src/components/TodoItem.jsx`: displays one task and receives event functions through props.
- `src/styles.css`: controls the visual design.
- `LEARNING-NOTES.md`: beginner-friendly explanations of every required concept.
