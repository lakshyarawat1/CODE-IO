import { AppBar , Container, Toolbar, Typography , styled, IconButton, Box , Menu, MenuItem } from '@mui/material'
import CodeIcon from '@mui/icons-material/Code';
import MenuIcon from '@mui/icons-material/Menu'


const TagLine = styled(Typography)`
    letter-spacing : .3rem;
    text-decoration : none;
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    font-family : 'Poppins' sans-serif;
    color : inherit;
`

const Header = () => {
    return (
        <AppBar>
            <Container>
                <Toolbar>
                    <CodeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <TagLine
                        variant='h6'
                        noWrap
                        component='a'
                        href='/'
                        sx={{
                            mr: 2,
                            display: {
                                xs: 'none',
                                md : 'flex'
                            }
                        }}
                    >
                        CODE-IO
                    </TagLine>
                    <Box sx={{
                        flexGlow: 1,
                        display: {
                            xs: 'flex',
                            md : 'none'
                        }
                    }}>
                        <IconButton
                            size='large'
                            aria-label='account of current user'
                            aria-controls='menu-appbar'
                            aria-haspopup='true'
                            color='inherit'
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id='menu-appbar'
                            
                        >
                            <MenuItem>
                                
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header