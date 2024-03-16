import Image from "next/image";
import Link from "next/link";
import React from "react";

const ErrorPage = () => {

  return (
    <div className="flex items-center justify-center text-center h-screen">
      <div className="mx-auto">
        <h1 className="text-3xl font-semibold text-zinc-600 dark:text-zinc-300">
          Page Not Found
        </h1>
        <Image
          src="https://i.ibb.co/ngWpBHd/undraw-Page-not-found-re-e9o6-removebg-preview.png"
          width={400}
          height={400}
          alt="error"
        />
        <Link href="/">
          <button className="text-violet-500 text-xl p-3 border border-violet-500 rounded-full mt-5">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
