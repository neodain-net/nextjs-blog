import Head from "next/head";
import { getAllPosts, PostMeta } from "@/src/api";

import Articles from "@/src/components/Articles";

export default function Home({ posts }: { posts: PostMeta[] }) {
  return (
    <>
      <Head>
        <title>Neodain's Blog</title>
      </Head>
      <Articles posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts()
    .slice(0, 9)
    .map((post) => post.meta);

  return { props: { posts } };
}
