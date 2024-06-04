import React from "react";
import {AuthorCard} from './AuthorCard';
import { readPost } from "@/lib/posts";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export async function PostPreview(props: {slug: string}) {
    let post = await readPost(props.slug);

    if (!post) notFound();

    const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);

    return (
        <Link className='inline-block flex flex-col items-center md:items-start md:flex-row w-4/5 border-md border-transparent rounded-lg backdrop-blur-lg p-4 my-4 mx-auto duration-150 ease-in md:hover:translate-x-16 active:scale-105 hover:scale-105 active:bg-white/20 hover:bg-white/10 md:active:bg-white/20' href={"/posts/" + post.slug}>
            <div className="">
                <div className="relative overflow-hidden w-[16rem] h-[9rem] rounded-lg mb-2 md:mb-0 md:mr-4">
                    {post.feature_image && <Image sizes="(min-width: 768px) 33vw, 100vw" placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`} src={post.feature_image} alt={post.feature_image_caption!} fill style={{objectFit:"cover"}} />}
                </div>
            </div>
            <div className="">
                <h1 className="text-2xl border-b-md border-primary md:flex mr-2 mb-2">{post.title}</h1>
                <p className="text-ellipsis text-balance line-clamp-4">{post.excerpt}</p>
                {post.authors && <AuthorCard authors={post.authors}/>}
            </div>
        </Link>
    );
}