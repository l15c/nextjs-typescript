import { Post } from '@/models';
import { Box, Divider, Typography } from '@mui/material';
import { format } from 'date-fns';

export interface PostItemProps {
  post: Post;
}

export function PostItem({ post }: PostItemProps) {
  return (
    <Box>
      <Typography variant="h5" fontWeight="bold">
        {post.title}
      </Typography>
      <Typography component="span" variant="body1" display="flex" my={2}>
        {format(new Date(post.publishedDate), 'dd MMM yyyy')}
        <Divider orientation="vertical" flexItem sx={{ borderColor: '#999', mx: 3 }} />
        {post.tagList.join(', ')}
      </Typography>
      <Typography variant="body2">{post.description}</Typography>
    </Box>
  );
}
