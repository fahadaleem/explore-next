This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.


Next.js provides three methods for data fetching

- getStaticProps
- getStaticPaths
- getServerSideProps


## getStaticProps:
getStaticProps is where when you want to pre-fetched the api data to be render on your page.

## getStaticPaths:
next fetches the dynamic routes path from api end-point and creates all the pages for that dynamic routes. It must be used it getStaticProps