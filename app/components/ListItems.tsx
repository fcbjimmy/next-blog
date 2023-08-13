import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";

export default function ListItems({ post }: { post: Meta }) {
  const { title, date, id } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <li className="">
      <Link className="underline hover:text-sky-300 " href={`/posts/${id}`}>
        {title}
      </Link>
      <br />
      <p className="mt-0 p-0">{formattedDate}</p>
    </li>
  );
}
