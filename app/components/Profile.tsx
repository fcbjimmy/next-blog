import React from "react";
import Image from "next/image";

export default function Profile() {
  return (
    <section>
      <Image
        className="border-4 border-gray-300 rounded-full mx-auto dark:border-slate-500"
        width={200}
        height={200}
        alt="Jimmy"
        priority={true}
        src="/images/profile.png"
      />
    </section>
  );
}
