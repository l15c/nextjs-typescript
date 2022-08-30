import { getPostList } from '@/utils/posts';
import { GetStaticProps } from 'next';
import React from 'react';

export interface BlogListPageProps {
  posts: any[];
}

export default function BlogListPage(props: BlogListPageProps) {
  return (
    <div>
      <h1>Blog List Page</h1>

      <ul></ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<BlogListPageProps> = async () => {
  /**
   * server-side
   * build-time
   */

  // Convert markdown files into list of javascript objects
  const data = await getPostList();

  return {
    props: {
      posts: data.map((x: any) => ({ id: x.id, title: x.title })),
    },
  };
};
