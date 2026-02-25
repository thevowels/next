import Drawer from '@mui/material/Drawer';
import {Box} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';


export  default  function SideBar()
{
    return (
        <div>
            <Drawer
                anchor={'left'}
                open={true}
                variant="permanent"
                sx={{
                    width: '240px'
                }}
            >
                <Toolbar/>
                <Box
                    sx={{
                        minWidth: '230px',
                        maxWidth: '230px',
                        overflowX: 'hide',
                    }}
                >
                </Box>
            </Drawer>
        </div>
    )
}