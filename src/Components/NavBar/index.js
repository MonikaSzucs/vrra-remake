import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { 
    Container,
    Dropdown,
    Navbar,
    Nav,
    NavDropdown,
    NavItem
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

import Icon from '@mui/material/Icon';
import Chip from '@mui/material/Chip';
import MdPhone from '@mui/icons-material/Phone';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';


export default function NavBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
        <Container maxWidth="sm">
            <Box sx={{ display: 'flex', justifyContent: 'space-between', my:2 }}>
                <Box sx={{ display:'flex', alignContent: 'flex-start', alignItems: 'center'}}>
                    <Typography sx={{ minWidth: 80 }}>Contact</Typography>
                    <Typography sx={{ minWidth: 80 }}>Profile</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginLeft:'2', marginRight: '2', alignItems: 'center'}}>
                    <Chip sx={{ minWidth: 150, mx:3 }} icon={<PhoneRoundedIcon />} label="604 612-7699" variant="outlined"/>
                    <Typography
                            onClick={handleClick}
                            size="small"
                            sx={{ minWidth: 80 }}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            Location
                    </Typography>
                    <Typography sx={{ minWidth: 80 }}>Donate</Typography>
                </Box>
            </Box>
            
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                    },
                    '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                    }, 
                },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    2975 West 28th Avenue
                </MenuItem>
            </Menu>
        </Container>
        </>
    )
}
// Navbar