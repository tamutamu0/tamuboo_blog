import Link from "next/link";
import { Header } from "../components/layouts/Header";
// libs
import { client } from "../libs/microcmsClient";
// types
import type { Blog, Tag } from "../types/blog";

export async function getServerSideProps() {
  const blog = await client.getList({ endpoint: "blog" });
  const tag = await client.getList({ endpoint: "tag" })
  console.log(tag)
  return {
    props: {
      blogs: blog.contents,
      tags: tag.contents,
    }
  };
}

type Props = {
  blogs: Blog[],
  tags: Tag[],
}

export default function Home({ blogs, tags }: Props) {
  return (
    <>
      <Header />

      <div>
        {blogs.map((blog) => (
          <div key={blog.id}>{blog.title}</div>
        ))}
        {tags.map((tag) => (
          <div key={tag.id}>{tag.name}</div>
        ))}
      </div>

    </>
  );
}