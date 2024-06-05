import { notFound } from 'next/navigation';
import { readPost } from '@/lib/posts';
import htmlParse from 'html-react-parser';
import { type Post } from '@ts-ghost/content-api';
import Image from 'next/image';
import { Suspense } from 'react';


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

export default async function slug({params}: {params: {slug: string}}) {
    let post = await readPost(params.slug);

    if (!post) notFound();

    return (<Post post={post} />);
}

function Post({post}: {post: Post}) {
    const dateOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    
    return (
    <div className='flex justify-center'>
        <div className='flex justify-center w-4/5 md:w-3/5'>
            <div className='flex flex-col mt-20 p-4 w-full items-center rounded-lg'>
                <div className='articleHeader flex justify-center'>
                    <div className='flex flex-col min-w-80'>
                        <h1 className='headline text-center text-3xl md:text-6xl md:text-left border-b-4 border-primary py-1'>{post.title}</h1>
                        <div className='flex justify-between py-1'>
                            <p className='author-card'>By Test</p>
                            
                            { post.feature_image && post.feature_image_alt &&
                            <Image src={post.feature_image} placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`} width={1024} height={1024} alt={post.feature_image_alt}></Image> }
                            {/*@ts-ignore toLocaleString has a bug with wrong types*/}
                            <p>{new Date(post.published_at).toLocaleString("en-US", dateOptions)}</p>
                        </div>
                    </div>
                </div>
                <div className='prose prose-invert articleBody pt-10 w-full text-left'>{htmlParse(post.html)}</div>
            </div>
        </div>
    </div>
    );
}