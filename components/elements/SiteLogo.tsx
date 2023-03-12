import { Stack, Typography } from "@mui/material"
import PetsRoundedIcon from '@mui/icons-material/PetsRounded';

const SiteLogo = () => {
    return (
        <Stack
            direction="row"
            alignItems="center"
        >
            <PetsRoundedIcon
                sx={{ mr: 1 }}
                id="dog"
            />
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                    fontFamily: 'monospace',
                    fontWight: 700,
                    alignItems: 'flex-end',
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                tamu.boo
            </Typography>
        </Stack>
    )
}

export default SiteLogo