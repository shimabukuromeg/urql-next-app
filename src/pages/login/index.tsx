import { ReactElement } from 'react';
import { Box, Button, Typography, Stack } from "@mui/material";
import { UnauthenticatedLayout } from '@/src/layouts';
import type { NextPageWithLayout } from '@/src/pages/_app';
import Link from 'next/link';

const Index: NextPageWithLayout = () => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Typography variant="h2">ログイン</Typography>
      <Link href="/" passHref>
        <Button variant="contained" color="primary">
          ログイン
        </Button>
      </Link>
    </Stack>
  )
}

Index.getLayout = (page: ReactElement) => (
  <UnauthenticatedLayout>{page}</UnauthenticatedLayout>
);

export default Index
