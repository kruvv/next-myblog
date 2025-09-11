import { Posts } from "@/components/Posts";
import { PostSearch } from "@/components/PostSearch";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Blog | Next App",
  description: "page Blog in next blog app",
};

export default function Blog() {
  return (
    <>
      <h1>Blog page</h1>
      <PostSearch />
      <Posts />
    </>
  );
}
