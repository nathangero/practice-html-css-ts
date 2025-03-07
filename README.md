# Vanilla TypeScript Todo List

## Description
The purpose of this was to test out using TypeScript in a vanilla HTML and CSS setting. Taking a step back from a framework like React or Next.js was really interesting and I think there's something fun about just "raw" or "old-school" web development. I wanted to see if it was possible to make a plain old HTML and CSS website with TS, and I wanted to see how I could make `components` that are common in web frameworks.

I think I did a pretty good job, and it's nice to have this option if frameworks seems overkill for a simple site!

### How It Works
- This app allows a user to add a `todo item` to the list. 
- The user can `check` it off if completed, or they can `delete` it by clicking the `X` button.
- The user can also reorder the todo items by dragging and dropping. There's UI changes so the user knows they're dragging a specific item.
- The items are saved into the browser's `local storage`, so a user can come back to it if they want.

## Things to note
- I had to make my own `vite.config.ts` file so I could upload this to GitHub Pages.
- I had to use a bundler to use TypeScript, so I chose Vite since I'm familiar with it.
- Since I used Vite, I had access to npm so it was pretty easy to test it with just `npm run dev` as well as using `npm` when writing the GitHub Workflow .yml file.

## Resources
- [Vite Docs](https://vite.dev/guide/)
