import fs from 'fs';
import path from 'path';

/**
 * @function getStaticPaths
 * @description This function is called at build time on server-side.
 * It is used to generate all the possible paths for the pages that use this component.
 * @returns {object} paths
 */
export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const posts = JSON.parse(jsonData);

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
}

/**
 * @function getStaticProps
 * @description This function is called at build time on server-side.
 * It is used to fetch data and pass it to the page component as props.
 * @returns {object} props
 */
export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const posts = JSON.parse(jsonData);

  const post = posts.find((post) => post.id.toString() === params.id);

  return { props: { post } };
}

export default function PostPage({ post }) {
  return (
    <div className="container">
      <h1 className="post-title">{post.title}</h1>
      <p className="post-date">{post.date}</p>
      <div className="post-content">
        <p>{post.content}</p>
      </div>
    </div>
  );
}
