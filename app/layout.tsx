import "@/style/global.css";
import { ChildrenProps } from "@/type/ChildrenProps";
import Searchbar from "@/app/components/Searchbar";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Next js crash course",
  description:"This is a next js course",
  keywords:["Nextjs","crash course","devistry"],
};

export default function layout({ children }: ChildrenProps) {
  return (
    <html>
      <body>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/posts">Posts</Link>
          <Searchbar/>
        </nav>
        {children}
      </body>
    </html>
  );
}
