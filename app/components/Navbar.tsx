import React from "react";
import { FaGithub, FaLinkedin, FaHome } from "react-icons/fa";
import Link from "next/link";
import ThemeButton from "./ThemeButton";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="bg-white sticky p-4 top-0 drop-shadow-xl z-10 ">
      <div className="md:px-6 mx-auto flex justify-between flex-col prose prose-xl sm:flex-row">
        <h1 className="text-slate-800 text-3xl font-bold grid place-content-center mb-2 md:mb-0">
          <Link
            href="/"
            className="text-slate-800/80 no-underline hover:text-slate-800"
          >
            Jimmy
          </Link>
        </h1>
        <div className="flex flex-row justify-center">
          <div className="flex flex-row justify-center text-slate-800 text-4xl align-middle gap-4 lg:text-5xl sm:justify-evenly">
            <Link
              className="text-slate-800/80 no-underline hover:text-slate-800"
              target="_blank"
              href="https://github.com/fcbjimmy"
            >
              <FaGithub />
            </Link>
            <Link
              className="text-slate-800/80 no-underline hover:text-slate-800"
              href="/"
            >
              <FaHome />
            </Link>
            <Link
              className="text-slate-800/80 no-underline hover:text-slate-800"
              target="_blank"
              href="https://www.linkedin.com/in/jimmychan11"
            >
              <FaLinkedin />
            </Link>
          </div>
          <ThemeButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
