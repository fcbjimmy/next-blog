import { getPostsMeta, getPostByName } from "@/lib/posts";
import { Metadata } from "next";
import NotFound from "./not-found";
import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";
import "highlight.js/styles/github-dark.css";

type Props = {
  params: { postId: string };
};

export async function generateStaticParams() {
  const posts = await getPostsMeta();

  if (!posts) return [];

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export async function generateMetadata({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`);

  if (!post)
    return {
      title: "Post Not Found",
    };

  return {
    title: post.meta.title,
  };
}

export default async function page({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`);

  if (!post) return NotFound();

  const { meta, content } = post;

  const dateOfPub = getFormattedDate(meta.date);

  const tags = meta.tags.map((tag, id) => (
    <Link
      href={`/tags/!${tag}`}
      key={id}
      className=" no-underline hover:text-sky-300"
    >
      {tag}
    </Link>
  ));

  return (
    <>
      <h1 className="text-3xl mt-6 mb-0">{meta.title}</h1>
      <p className="mt-0 text-sm">{dateOfPub}</p>
      <article>{content}</article>
      <section>
        <h3>Related:</h3>
        <div className="flex flex-row gap-2">{tags}</div>
      </section>
      <p className="mb-10">
        <Link href="/">← Back to home</Link>
      </p>
    </>
  );
}
