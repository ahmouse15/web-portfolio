import React from "react";
import {AuthorCard} from './AuthorCard';
import { readPost } from "@/lib/posts";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export async function PostPreview(props: {slug: string}) {
    let post = await readPost(props.slug);

    if (!post) notFound();

    return (
        <Link className='inline-block flex flex-col items-center md:items-start md:flex-row w-4/5 border-md border-transparent rounded-lg p-4 my-4 mx-auto duration-150 ease-in md:hover:translate-x-16 active:scale-105 hover:scale-105 active:bg-white/20 hover:bg-white/10 md:active:bg-white/20' 
        href={"/posts/" + post.slug}>
            <div className="">
                <div className="relative overflow-hidden w-[16rem] h-[9rem] rounded-lg mb-2 md:mb-0 md:mr-4">
                    {post?.feature_image && <Image sizes="(min-width: 768px) 33vw, 100vw" src={post.feature_image} alt={post.feature_image_caption!} fill style={{objectFit:"cover"}} />}
                </div>
            </div>
            <div className="">
                <h1 className="text-2xl font-semibold border-b-md border-primary md:flex mr-2 mb-2">{post.title}</h1>
                <p className="text-ellipsis text-balance line-clamp-4">{post.excerpt}</p>
                {/*@ts-ignore*/}
                {post.authors && <AuthorCard authors={post?.authors}/>}
            </div>
        </Link>
    );
}