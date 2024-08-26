This is the Next.js starter site (and course files) for the Next.js & Contentful tutorial by the Net Ninja.

## Getting Started

To use the starter project, run the following in a terminal:

```bash
npx create-next-app [your-site-name] -e https://github.com/iamshaunjp/next-contentful/tree/lesson-1-starter-site
```

## Errors Fixed for older version
This is old, but not THAT old. after I followed his instructions and got errors, I ran this:
npm install next@latest react@latest react-dom@latest

Then I went to Layout.js and removed the a tag which was inside the Link tag. No bueno.  So remove the <a> tag.