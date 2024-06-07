import { notFound } from 'next/navigation';
import { readPost } from '@/lib/posts';
import htmlParse from 'html-react-parser';
import { type Post } from '@ts-ghost/content-api';
import Image from 'next/image';
import { Suspense } from 'react';

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
    <div className='flex justify-center pt-8 md:pt-20'>
        <div className='flex justify-center p-4 md:w-3/5'>
            <div className='flex flex-col md:p-4 w-full items-center rounded-lg'>
                <div className='articleHeader flex justify-center'>
                    <div className='flex flex-col min-w-80 pb-4'> 
                        <h1 className='headline text-3xl text-left font-semibold md:text-6xl border-b-4 border-primary py-1'>{post.title}</h1>
                        <div className='flex justify-between py-1'>
                            <p className='author-card'>By Test</p>
                            {/*@ts-ignore toLocaleString has a bug with wrong types, this fixes it for now*/}
                            <p>{new Date(post.published_at).toLocaleString("en-US", dateOptions)}</p>
                        </div>
                    </div>
                </div>
                { post.feature_image &&
                            <Image className="rounded-lg w-full" src={post.feature_image} width={1024} height={1024} alt={post.feature_image_alt ?? ""}></Image> }
                <div className='articleBody prose prose-invert py-16 w-full text-justify'>{htmlParse(post.html)}</div>
            </div>
        </div>
    </div>
    );
}