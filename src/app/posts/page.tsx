import { getPosts } from '@/lib/posts';
import { PostPreview } from './PostPreview';
import { Post } from '@ts-ghost/content-api';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

export default async function Posts() {
  let count = 0;
  let posts: Post[] = [];

  let payload = await getPosts(3); //Load three items at a time
  if (!payload) notFound();

  posts = posts.concat(payload);

  const postList = 
    <ul className="//list-disc //list-outside //marker:text-orange-500">
      <Suspense>
        {posts.map(post => <li key={post.slug}><PostPreview key={post.slug} slug={post.slug}/></li>)}
      </Suspense>
    </ul>;
  
  return (
    <div className="pt-8">
      <h1 className="text-center text-4xl pb-4">Posts</h1>
        <div className="flex row min-h-screen flex-col items-center">
          {postList}
      </div>
    </div>

  )
}
 