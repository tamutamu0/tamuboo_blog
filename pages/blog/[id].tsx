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

type Props = {
    blog: Blog
}

interface TagListProps extends BoxProps {
    tags: Tag[];
}

const TagList = (props: TagListProps) => {
    const { tags, ...rest } = props;
    return (
        <Stack
            direction="row"
            spacing={1}
        >
            {
                tags.map(tag => (
                    <Link key={tag.id} href={`/topics/${tag.name}`} passHref >
                        <Stack
                            direction="row"
                            spacing={1}
                            sx={{
                                p: 0.8,
                                border: '1px solid',
                                borderColor: 'lightgray',
                                borderRadius: '20px',
                                maxWidth: "fit-content"
                            }}
                        >
                            <Image
                                src={tag.icon}
                                alt=""
                                width={20}
                                height={25} />
                            <Typography variant="body2">{tag.name}</Typography>
                        </Stack>
                    </Link>
                ))
            }
        </Stack>
    )
}

export default function BlogId({ blog }: Props) {
    return (
        <>
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
                            p: {
                                xs: 1,
                                sm: 2,
                                md: 4,
                                lg: 6,
                                xl: 8,
                            }
                        }}
                    >
                        <TagList
                            tags={blog.tags}
                        />
                        <Box
                            sx={{
                                pt: {
                                    xs: 1,
                                    sm: 2,
                                    md: 4,
                                    lg: 6,
                                    xl: 8,
                                }
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