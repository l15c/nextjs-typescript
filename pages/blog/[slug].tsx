import { Post } from '@/models';
import { getPostList } from '@/utils/posts';
import { Container, Divider } from '@mui/material';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { route } from 'next/dist/server/router';
import { useRouter } from 'next/router';
import * as React from 'react';
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse/lib';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

export interface BlogPageProps {
  post: Post;
}

export default function PostDetailPage({ post }: BlogPageProps) {
  if (!post) return null;

  return (
    <Container>
      <h1>Post Detail Page</h1>
      <p>{post.title}</p>
      <p>{post.author?.name}</p>
      <p>{post.description}</p>
      <p>{post.mdContent}</p>

      <Divider />

      <div dangerouslySetInnerHTML={{ __html: post.htmlContent ?? '' }}></div>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  console.log('\nGET STATIC PATHS');
  const postList = await getPostList();

  return {
    paths: postList.map((post: any) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogPageProps> = async (
  context: GetStaticPropsContext
) => {
  const postList = await getPostList();
  const slug = context.params?.slug;
  if (!slug) return { notFound: true };

  const post = postList.find((x) => x.slug === slug);
  if (!post) return { notFound: true };

  // Parse md to HTML
  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: 'Blog detail page' })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(post.mdContent ?? '');
  post.htmlContent = file.toString();
  return {
    props: {
      post,
    },
  };
};
