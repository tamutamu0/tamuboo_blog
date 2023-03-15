import Image from "next/image";
import Link from "next/link";
// types
import type { Tag } from "../../types/blog";
import { BoxProps, Stack, Typography } from "@mui/material"

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
                    <Link key={tag.id} href={`/blog/tag/${tag.id}`} passHref >
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
                                src={tag.icon.url}
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

export default TagList