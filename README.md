# React Todo List

This is my todo list project for WDD 430 (Web Full-Stack Development) at BYU-Idaho. It's my first real project built with React, following along with the "Learn React With This One Project" tutorial by Web Dev Simplified as part of my Week 1 assignment.

## What it does

- Add new todos
- Check off todos as completed (shows a strikethrough)
- Delete todos
- Todos are saved to localStorage, so they're still there if you refresh the page

## Tech used

- React
- Vite
- Plain CSS

## What I learned

This project was my first time really working with React state and components. A few things that clicked for me while building this:

- How `useState` works and why you can't just directly mutate state (I kept trying to just push to the array at first, which doesn't trigger a re-render)
- Breaking the UI into components, I split the individual todo item out into its own `TodoItem.jsx` component and passed data down using props
- Using `useEffect` to save todos to localStorage whenever the todos list changes
- Git/GitHub workflow, including running into a divergent branch history issue when I created my GitHub repo with a README already in it, and having to fix it by cloning fresh instead of trying to merge two separate histories

## Running it locally

```bash
npm install
npm run dev
```

Then open the local URL it gives you in the terminal (usually `http://localhost:5173`).

## Status

Still a work in progress as I go through the rest of the course — planning to come back and add things like editing existing todos and maybe some better styling once I learn more CSS/React patterns.