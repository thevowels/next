import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '../components/Link';

export default  function NavBar(){
    return (
        <AppBar position="fixed" sx={{
            zIndex: 1300,
            bgcolor:'#3a4a7f'
        }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Dashboard
                </Typography>
                {/*<Button variant="contained" component={Link} href={"/users"} >Users</Button>*/}
                <Link href="/users" className={"mr-8"}>Users</Link>
                <Link color="inherit" href={"/settings"} className={"mr-8"}>Settings</Link>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>

            </Toolbar>
        </AppBar>
    )
}