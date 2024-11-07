import Link from 'next/link';
import fs from 'fs';
import path from 'path';
/**
 * @function getStaticProps
 * @description This function is called at build time on server-side.
 * It is used to fetch data and pass it to the page component as props.
 * @returns {object} props
 */
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const posts = JSON.parse(jsonData);

  return {
    props: { posts }
  };
}

/**
 * @function HomePage
 * @description This is the home page component. It receives posts as props from getStaticProps.
 */
export default function HomePage({ posts }) {
  return (
    <div className="container">
      <h1>Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>
              <Link href={`/posts/${post.id}`}>
                {post.title}
              </Link>
            </h2>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
