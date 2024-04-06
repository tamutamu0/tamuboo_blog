import type { NextPage } from "next";
import Head from "next/head";

interface MyHeadProps {
  pageTitle?: string;
  pageThumbnailUrl?: string;
  pageDescription?: string;
}

const MyHead: NextPage<MyHeadProps> = ({
  pageTitle,
  pageThumbnailUrl,
  pageDescription,
}) => {
  const defaultTitle = "たむぼー";

  const title = pageTitle ? `${pageTitle} | ${defaultTitle} ` : defaultTitle;
  const thumbnailUrl = pageThumbnailUrl;
  const description = pageDescription;

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:image" content={thumbnailUrl} />
      <meta property="og:description" content={description} />
    </Head>
  );
};

export default MyHead;
