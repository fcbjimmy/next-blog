import Image from "next/image";
import Profile from "../app/components/Profile";
import Posts from "./components/Posts";

export default function Home() {
  return (
    <div className="mx-auto">
      <Profile />
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello and Welcome 👋&nbsp;
        <span className="">
          I am <span className="font-bold">Jim 🤙🏻</span>
        </span>
      </p>
      <Posts />
    </div>
  );
}
