This is a simple blog website built using Next.js, showcasing the chapters of a fantasy action story set in the world of Eltheria. The blog is powered by a static JSON file (`posts.json`) that contains the blog posts, which are dynamically rendered on the homepage and individual post pages.

## Features

- **Home Page**: Displays a list of blog posts with titles and excerpts. Each post links to a dedicated page for the full content.
- **Post Page**: Displays the full content of a selected blog post, including its title, publication date, and content.
- **Static Generation**: Uses Next.js's `getStaticProps` and `getStaticPaths` to statically generate pages at build time, ensuring fast page loads and SEO-friendly URLs.

## Technologies Used

- **Next.js**: A React-based framework for building static and server-rendered applications.
- **Node.js**: Used for reading the JSON file and serving the data.
- **File System**: Used to fetch data from `posts.json` stored locally.





