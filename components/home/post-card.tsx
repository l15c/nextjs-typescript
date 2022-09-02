import { Post } from '@/models';
import { Card, CardContent } from '@mui/material';
import { PostItem } from '../blog';
export interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  if (!post) return null;
  return (
    <Card>
      <CardContent sx={{ p: 3 }}>
        <PostItem post={post} />
      </CardContent>
    </Card>
  );
}
