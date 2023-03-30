// libs
import { client } from "../../libs/microcmsClient";
// types
import type { Blog } from "../../types/blog";
// mui
import { Box, Container, Typography } from "@mui/material";
import { load as cheerioLoad } from "cheerio";
//
import { getDateStr } from "../../utils/getDateStr";
import MyHead from "../../components/elements/MyHead";
import TagList from "../../components/layouts/TagList";

type Props = {
  blog: Blog;
};

export default function BlogId({ blog }: Props) {
  return (
    <Box>
      <MyHead pageTitle={blog.title} pageThumbnailUrl={blog.image.url} />
      <Container
        sx={{
          display: "flex",
          px: {
            xs: 0,
            sm: 2,
            md: 4,
            lg: 6,
            xl: 8,
          },
        }}
      >
        <Box sx={{ flex: 1, p: 0 }}>
          <main>
            <Typography variant="h5" component="h1" gutterBottom>
              {blog.title}
            </Typography>
            <p>{getDateStr(blog.publishedAt)}</p>
            <Box
              sx={{
                bgcolor: "background.paper",
                borderRadius: "12px",
                boxShadow: 1,
                p: 1,
              }}
            >
              <TagList tags={blog.tags} />
              <Box
                sx={{
                  pt: 1,
                  px: {
                    xs: 0,
                    sm: 2,
                    md: 4,
                    lg: 6,
                    xl: 8,
                  },
                }}
                dangerouslySetInnerHTML={{ __html: `${blog.content}` }}
              />
            </Box>
          </main>
        </Box>
        {/* サイドバー */}
        {/* <Box
          sx={{
            display: { xs: "none", md: "block" }, // スマートフォンでは非表示、md以上で表示
            width: "250px",
            ml: 3,
            bgcolor: "white",
            borderRadius: "12px",
            boxShadow: 1,
            p: 2,
          }}
        >
          <Typography variant="h5" component="h2">
            Sidebar
          </Typography>
          <Box>サイドバーコンテンツ</Box>
        </Box> */}
      </Container>
    </Box>
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

  //htmlパース処理
  const $ = cheerioLoad(data.content);
  $("h1,h2").each((_, element) => {
    $(element).addClass("text-2xl mt-5 mb-3 font-bold");
  });
  $("a").each((_, element) => {
    $(element).addClass(
      "text-blue-600 hover:text-blue-800 visited:text-purple-600"
    );
  });
  data.content = $.html();
  console.log($.html());

  return {
    props: {
      blog: data,
    },
  };
};
