import { Post } from '@/models';
import { Card, CardContent, Divider, Typography } from '@mui/material';
import { format } from 'date-fns';
import * as React from 'react';
export interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  if (!post) return null;
  return (
    <Card>
      <CardContent sx={{ p: 3 }}>
        <Typography variant="h5" fontWeight="bold">
          {post.title}
        </Typography>
        <Typography component="span" variant="body1" display="flex" my={2}>
          {format(Number(post.publishedDate), 'dd MMM yyyy')}
          <Divider orientation="vertical" flexItem sx={{ borderColor: '#999', mx: 3 }} />
          {post.tagList.join(', ')}
        </Typography>
        <Typography variant="body2">{post.description}</Typography>
      </CardContent>
    </Card>
  );
}
