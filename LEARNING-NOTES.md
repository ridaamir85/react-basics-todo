# React Basics Learning Notes

## 1. React

React is a JavaScript library for building user interfaces from reusable pieces. When data changes, React updates the relevant part of the page.

## 2. JSX

JSX is HTML-like syntax written inside JavaScript. `return <h1>My Todo List</h1>` is JSX. Unlike HTML, JSX uses `className` instead of `class`.

## 3. Functional components

A functional component is a JavaScript function that returns JSX. `App`, `TodoForm`, and `TodoItem` are functional components. Component names start with a capital letter.

## 4. Props

Props pass information from a parent component to a child. `App` gives each `TodoItem` a `todo`, `onToggle`, and `onDelete` prop. Props are read-only; the child calls a supplied function when it needs the parent to change something.

## 5. useState

`useState` gives a component memory. It returns the current value and a setter function. `todos` is the current task array and `setTodos` replaces it with updated data. `TodoForm` also uses state to remember the input text.

## 6. useEffect

`useEffect` runs a side effect after React renders. The app saves tasks to local storage whenever `todos` changes. The dependency array `[todos]` tells React when to run the effect.

## 7. Conditional rendering

Conditional rendering chooses which JSX to show. The app shows an empty message when `todos.length === 0`; otherwise it shows the task list.

## 8. List rendering and keys

`todos.map(...)` converts every task object into a `TodoItem`. Each item receives `key={todo.id}`. A stable, unique key helps React identify items when one is added, changed, or deleted.

## 9. Data flow

The task data lives in `App`. Data goes down to children through props. User actions go back up by calling functions passed through props. This one-way flow makes the program easier to understand.

## What I learned

I learned how to divide a React interface into components, pass data with props, manage changing data with state, run a side effect, and render lists or conditional content. I also learned that state should be updated with setter functions rather than changed directly.
