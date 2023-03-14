import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { Header } from "../../components/layouts/Header";
// libs
import { client } from "../../libs/microcmsClient";
// types
import type { Blog, Tag } from "../../types/blog";
// mui
import { Box, BoxProps, Container, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
// 
import { getDateStr } from "../../utils/getDateStr";
import MyHead from "../../components/elements/MyHead";
import TagList from "../../components/elements/TagList";

type Props = {
    blog: Blog
}

export default function BlogId({ blog }: Props) {
    return (
        <>
            <MyHead
                pageTitle={blog.title}
                pageThumbnailUrl={blog.image.url}
            />
            <Container>
                <main>
                    <Typography variant="h4" component="h1" gutterBottom>
                        {blog.title}
                    </Typography>
                    <p>{getDateStr(blog.publishedAt)}</p>
                    <Box
                        sx={{
                            bgcolor: "background.paper",
                            borderRadius: "12px",
                            p: 4
                        }}
                    >
                        <TagList
                            tags={blog.tags}
                        />
                        <Box
                            sx={{
                                pt: 3
                            }}
                            dangerouslySetInnerHTML={{ __html: `${blog.content}` }} />
                    </Box>
                </main>
            </Container >
        </>
    );

}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
    const data = await client.get({ endpoint: "blog" });

    const paths = data.contents.map((content: any) => `/blog/${content.id}`);
    return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: any) => {
    const id = context.params.id;
    const data = await client.get({ endpoint: "blog", contentId: id });

    return {
        props: {
            blog: data,
        },
    };
};