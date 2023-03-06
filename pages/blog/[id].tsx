import Link from "next/link";
import Head from "next/head";
import { Header } from "components/layouts/Header";
// libs
import { client } from "libs/microcmsClient";
// mui
import { Container, Typography } from "@mui/material";


export default function BlogId({ blog }) {
    return (
        <>
            <Head>
                <title>タムボー</title>
            </Head>
            <Header />

            <Container>
                <main>
                    <Typography variant="h4" component="h1" gutterBottom>
                        {blog.title}
                    </Typography>
                    <p>{blog.publishedAt}</p>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: `${blog.content}`,
                        }}
                    />
                </main>
            </Container>

        </>
    );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
    const data = await client.get({ endpoint: "blog" });

    const paths = data.contents.map((content) => `/blog/${content.id}`);
    return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const data = await client.get({ endpoint: "blog", contentId: id });

    return {
        props: {
            blog: data,
        },
    };
};