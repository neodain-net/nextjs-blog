import Link from "next/link";
import type { PostMeta } from "@/src/api";
import styles from "@/styles/Articles.module.css";

export default function Articles({ posts }: { posts: PostMeta[] }) {
  return (
    <ul className={styles.list}>
      <div className={styles.posts}>
        {posts.map((post) => (
          <li key={post.slug}>
            <div className={styles.card}>
              <img src={post.cover_image} alt="" />
              <div className={styles.post_date}>Posted on {post.date}</div>
              <div className={styles.post_title}>
                <Link href={`/posts/${post.slug}`}>{post.title}</Link>
              </div>
              <p>{post.excerpt}</p>
              <p className={styles.tags}>
                {post.tags.map((tag) => (
                  <Link key={tag} href={`/tags/${tag}`}>
                    {tag}
                  </Link>
                ))}
              </p>
              <button className={styles.btn}>
                <Link href={`/posts/${post.slug}`}>Read More</Link>
              </button>
            </div>
          </li>
        ))}
      </div>
    </ul>
  );
}
