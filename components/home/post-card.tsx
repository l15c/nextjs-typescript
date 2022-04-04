import { Card, CardContent, Divider, Stack, Typography } from '@mui/material';
import * as React from 'react';

export interface PostCardProps {
  title: string;
  date: string;
  author: string;
  description: string;
}

export function PostCard({ title, date, author, description }: PostCardProps) {
  return (
    <Card>
      <CardContent sx={{ p: 3 }}>
        <Typography variant="h5" fontWeight="bold">
          {title}
        </Typography>
        <Stack
          direction="row"
          mt={3}
          mb={1}
          divider={<Divider orientation="vertical" flexItem sx={{ borderColor: '#000', mx: 3 }} />}
        >
          <Typography>{date}</Typography>

          <Typography>{author}</Typography>
        </Stack>

        <Typography>{description}</Typography>
      </CardContent>
    </Card>
  );
}
