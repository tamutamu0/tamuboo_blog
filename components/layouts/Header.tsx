import React from "react";
import {
    AppBar,
    Box,
    Toolbar,
    Container,
    Stack,
    Link,
    useScrollTrigger,
    styled,
    Typography
} from "@mui/material"
import SiteLogo from "../elements/SiteLogo";
import { useRouter } from "next/router";


type headerLinksProps = {
    no: number,
    name: string,
    path: string
}

const headerLinks = [
    { no: 1, name: 'Blog', path: '/' },
    { no: 2, name: 'Profile', path: '/profile' },
    { no: 3, name: 'ShowCase', path: '/showcase' },
    { no: 4, name: 'Contact', path: '/contact' },
];

const HeaderLinks = () => {
    // 現在ページに対応するヘッダーリンクに下線をつけるため、パスの1層目を取得する
    const router = useRouter();
    const path = router.pathname;
    const firstDir = '/' + path.split('/')[1];
    // ルートディレクトリと"/blog"ディレクトリは同一として扱うための処理
    const modFirstDir = firstDir.replace('blog', '');

    return (
        <Box >
            <Stack
                direction="row"
                alignItems="center"
                spacing={3}
            >
                {/* ヘッダーの各種リンク作成 */}
                {
                    headerLinks.map((link) => (
                        <Link key={link.no} href={link.path}  >
                            <Typography
                                fontFamily="monospace"
                                letterSpacing=".05rem"
                                sx={{
                                    paddingBottom: '0.5rem',
                                    color: 'lightblue',
                                    ...(modFirstDir === link.path && {
                                        borderBottom: '2px solid',
                                        fontWeight: 'bold',
                                        color: 'white',
                                    }),
                                }}
                            >
                                {link.name}
                            </Typography>
                        </Link>
                    ))
                }
            </Stack >
        </Box >
    )
}


export const Header = () => {
    const headerFirstLineHeight: number = 40;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: headerFirstLineHeight - 1,   //ヘッダ1行目の高さ-1を閾値とした方が追従が自然となる
    });

    return (
        <>
            <AppBar position="static" elevation={0} sx={{ height: headerFirstLineHeight }}>
                <Container maxWidth="lg" sx={{ paddingTop: .5 }}>
                    <SiteLogo />
                </Container>
            </AppBar >
            <AppBar position={trigger ? "fixed" : "static"} elevation={0} sx={{ height: 40 }}>
                <Container maxWidth="lg" sx={{ paddingTop: .5 }}>
                    <HeaderLinks />
                </Container>
            </AppBar>
        </>
    )
};
