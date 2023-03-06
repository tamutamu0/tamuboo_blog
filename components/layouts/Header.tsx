import React, { memo } from "react";
import { styled, alpha } from '@mui/material/styles';
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    InputBase,
    Typography,
    Menu,
    Container,
    Avatar,
    Button,
    Tooltip,
    MenuItem,
    Stack,
    Link
} from "@mui/material"
import { white } from "@mui/material/colors"
import PetsRoundedIcon from '@mui/icons-material/PetsRounded';
import SearchIcon from '@mui/icons-material/Search';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const linkTextStyle = {
    fontFamily: 'monospace',
    fontWight: 700,
    alignItems: 'flex-end',
    letterSpacing: '.3rem',
    color: 'inherit',
    textDecoration: 'none',
}

const headerLinks = [
    { no: 1, name: 'Home', path: '/' },
    { no: 2, name: 'Blog', path: '/' },
    { no: 3, name: 'Profile', path: '/profile' },
    { no: 4, name: 'Contact', path: '/contact' },
];
// eslint-disable-next-line react/display-name
export const Header = memo(() => {
    return (
        <AppBar position="static">
            <Container maxWidth="lg">
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Stack
                        direction="row"
                        alignItems="center"
                    >
                        <PetsRoundedIcon sx={{ mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={linkTextStyle}
                        >
                            たむぼー
                        </Typography>
                    </Stack>
                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing={5}
                    >
                        {
                            headerLinks.map((link) => (
                                <Link key={link.no} href={link.path} sx={linkTextStyle} >
                                    {link.name}
                                </Link>
                            ))
                        }
                    </Stack>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search"
                            inputProps={{ 'aria-label': 'serach' }}
                        />
                    </Search>
                </Toolbar>
            </Container>
        </AppBar >
    )
});
