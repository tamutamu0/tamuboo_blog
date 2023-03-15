import Link from "next/link";
// libs
import { client } from "../../../libs/microcmsClient";
// types
import type { Blog } from "../../../types/blog";
// mui
import { CardMedia, Grid, styled, Typography } from "@mui/material";
// 
import MyHead from "../../../components/elements/MyHead";

type Props = {
    blogs: Blog[]
}

const BlogPaper = styled('div')({
    padding: '16px',
    transition: 'all 0.2s',
    '&:hover': {
        boxShadow:
            '1px 0px 5px -1px rgba(0,0,0,0.1), 0px 0px 5px 5px rgba(0,0,0,0.1), 0px 1px 5px 0px rgba(0,0,0,0.1)',
        transform: 'translateY(-1px)',
    },
});

export default function BlogPostsByTag({ blogs }: Props) {
    return (
        <>
            <MyHead />
            <Grid container spacing={0}>
                {blogs.map((blog) => (
                    <Grid item xs={12} sm={6} md={4} lg={4} key={blog.id}>
                        <Link href={`/blog/${blog.id}`} passHref >
                            <BlogPaper>
                                <CardMedia
                                    component='img'
                                    width='100%'
                                    height='auto'
                                    image={blog.image.url}
                                    alt={blog.image.url}
                                />
                                <Typography>
                                    {blog.title}
                                </Typography>
                            </BlogPaper>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </>
    );

}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
    const data = await client.get({ endpoint: "tag" });

    const paths = data.contents.map((content: any) => `/blog/tag/${content.id}`);
    return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: any) => {
    const id = context.params.id;
    const blogsData = await client.get({
        endpoint: "blog",
        queries: {
            filters: `tags[contains]${id}`
        }
    });

    return {
        props: {
            blogs: blogsData.contents,
        },
    };
};