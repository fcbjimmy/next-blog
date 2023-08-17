import React from "react";
import Link from "next/link";
import ListItems from "@/app/components/ListItems";
import { getPostsMeta, getPostByName } from "@/lib/posts";

type Props = {
  params: { tagName: string };
};

export async function generateStaticParams({ params: { tagName } }: Props) {
  const posts = await getPostsMeta();

  if (!posts) return [];
  const tags = new Set(posts.map((post) => post.tags).flat());

  return Array.from(tags).map((tag) => ({ tagName: tag }));
}

export async function generateMetadata({ params: { tagName } }: Props) {
  return { title: `Post about ${tagName}` };
}

export default async function TagPostList({ params: { tagName } }: Props) {
  const posts = await getPostsMeta();
  console.log("here!!!");
  console.log(tagName);
  console.log(posts);
  if (!posts) return <div>Sorry, no post available!</div>;

  const filteredPosts = posts.filter((post) => post.tags.includes(tagName));

  console.log("here", filteredPosts);

  return (
    <section className="mt-6 mx-auto">
      <h2>Posts</h2>
      <ul className="list-none p-0">
        {filteredPosts.map((post) => (
          <ListItems post={post} key={post.id} />
        ))}
      </ul>
    </section>
  );
}
