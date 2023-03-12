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
import SearchBox from "../elements/SearchBox";

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
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }} >
                            {link.name}
                        </Link>
                    ))
                }
            </Stack>
        </Box>
    )
}

// eslint-disable-next-line react/display-name
export const Header = () => {

    return (
        <AppBar position="static">
            <Container maxWidth="lg">
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <SiteLogo />
                    <HeaderLinks />
                    <SearchBox />
                </Toolbar>
            </Container>
        </AppBar >
    )
};
