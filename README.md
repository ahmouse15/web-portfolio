## Getting Started

First, run the development server:

```bash
npm run dev
```

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Design
2-page design:\
**Blog** will be just that, a blog with posts such as tutorials for difficult issues, or dev explanations on how I tackled a problem.\
**Showcase** will be more creative, with fancy animations and designs used to showcase other projects that I have worked on.

It will be hosted on ahmouse.com

## TODO
 - ~~First thing: Use QuillJS for text editor, and quill-delta-to-html to store it in the db~~ See #1
 - ~~Finish Article page~~ See  #2
 - Minimalist design for nav bar (e.g. remove extra buttons and borders)
 - Add Scroll/read progress bar
 - ~~Create upload portal~~
   - ~~Functions to create and parse article elements created with the portal~~ See #1
 - Add Showcase section
 - Add Animations with Framer Motion
   - ~~Animate on page load~~
   - Animate nav bar (sliding hover selector)
   - Animate page loading (spinning circle)
   - Animate image loading (placeholder image w/ shimmer)
 - Add Streaming/hydration with Suspense
 - Find a better font

 #### Notes
#1 Replaced with Ghost CMS\
#2 Minor bugs should be fixed