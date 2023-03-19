import Link from "next/link";
// libs
import { client } from "../libs/microcmsClient";
// types
import type { Blog } from "../types/blog";
// mui
import { Box, CardMedia, Container, Grid, styled, Typography } from "@mui/material";
// components
import MyHead from "../components/elements/MyHead";
import Pagination from "../components/elements/Pagination"
import { PER_PAGE } from "../setting";

type Props = {
  blogs: Blog[],
  totalCount: number,
}

const BlogPaper = styled('div')({
  padding: '1px',
  backgroundColor: 'white',
  borderRadius: '15px',
  transition: 'all 0.2s',
  boxShadow: '3px 3px 20px -10px #777777',
  '&:hover': {
    boxShadow:
      '3px 3px 20px -5px #777777',
    transform: 'translateY(-1px)',
  },
  height: '100%'
});

export default function Home({ blogs, totalCount }: Props) {
  return (
    <>
      <MyHead />
      <Grid container spacing={4}>
        {blogs.map((blog) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={blog.id}>
            <Link href={`/blog/${blog.id}`} passHref >
              <BlogPaper>
                <Box sx={{ borderRadius: '15px 15px 0px 0px', overflow: 'hidden' }}>
                  <CardMedia
                    component='img'
                    width='100%'
                    height='auto'
                    image={blog.image.url}
                    alt={blog.image.url}
                  />
                </Box>
                <Container sx={{ paddingTop: '10px' }}>
                  <Typography variant="subtitle1">
                    {blog.title}
                  </Typography>
                </Container>
              </BlogPaper>
            </Link>
          </Grid>
        ))}
      </Grid>
      <Pagination
        currentPage={1}
        totalCount={totalCount}
      />
    </>
  );
}

export const getStaticProps = async () => {
  const blog = await client.getList({
    endpoint: "blog",
    queries: {
      offset: 0,
      limit: PER_PAGE
    }
  });
  return {
    props: {
      blogs: blog.contents,
      totalCount: blog.totalCount
    }
  };
}