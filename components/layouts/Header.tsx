import React from "react";
import {
    AppBar,
    Box,
    Toolbar,
    Container,
    Stack,
    Link
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
                        <Link key={link.no} href={link.path} sx={{
                            fontFamily: 'monospace',
                            fontWight: 700,
                            alignItems: 'flex-end',
                            letterSpacing: '.11rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            paddingBottom: '0.5rem',
                            ...(modFirstDir === link.path && {
                                // 現在のパスと一致する場合、下線を表示
                                borderBottom: '2px solid',
                            }),
                        }} >
                            {link.name}
                        </Link>
                    ))
                }
            </Stack >
        </Box >
    )
}

export const Header = () => {

    return (
        <AppBar position="static">
            <Container maxWidth="lg">
                <Toolbar sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }} >
                    <SiteLogo />
                    {/* <SearchBox /> */}
                    <Box sx={{ alignSelf: 'flex-start', paddingTop: 2, paddingBottom: 1 }}>
                        <HeaderLinks />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    )
};
