import {AppBar,  Box, Typography, styled } from '@mui/material'

const Tagline = styled(Typography)`
    font-weight : 600;
`

const MyNavBar = styled(AppBar)`
    height : 70px;
    padding-top : 2em
`

const Header = () => {
    return (
        <>
            <MyNavBar>
                 <Box>
                    <Tagline>
                        CODE-IO
                    </Tagline>
                </Box>
            </MyNavBar>
        </>
    )
}

export default Header;