# 📝 Implementing the Blog System (Feb 2025)

## **Experimenting with Netlify CMS (and Why We Abandoned It)**
- Tried integrating Netlify CMS for content updates.
- Faced authentication, routing, and dependency issues.
- Eventually scrapped it in favor of JSON and Markdown.

## **Moving to a JSON-Based Blog Setup**
- Created a `posts.json` file to store blog data.
- Built a React component to render blog posts dynamically.
- Faced issues with maintaining large content inside JSON.

## **The Final Switch to Markdown for Blogging**
- Implemented `.md` files for blog posts.
- Used `react-markdown` for rendering markdown content.
- Fixed Netlify build errors caused by missing `.md` files.
- Ensured blog posts were dynamically fetched from a `posts` folder.