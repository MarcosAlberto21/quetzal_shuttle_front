import React, {useEffect} from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { useAuth, AuthRoute } from "../../auth";
import { SubItemsMenu } from '../../components/subitemsMenu';


import { Maintenance } from '../../views/Maintenance/Maintenance';
import logo from '../../assets/logo_barner.png';
import { HashRouter, Routes, Route } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import ListItemAvatar from '@mui/material/ListItemAvatar';

import Avatar from '@mui/material/Avatar';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import GroupIcon from '@mui/icons-material/Group';
import LogoutIcon from '@mui/icons-material/Logout';

import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';


import BadgeIcon from '@mui/icons-material/Badge';
import DangerousIcon from '@mui/icons-material/Dangerous';
import RuleIcon from '@mui/icons-material/Rule';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import StyleIcon from '@mui/icons-material/Style';
import PaymentsIcon from '@mui/icons-material/Payments';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import PaidIcon from '@mui/icons-material/Paid';
import PixIcon from '@mui/icons-material/Pix';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import FiveKIcon from '@mui/icons-material/FiveK';
import FlakyIcon from '@mui/icons-material/Flaky';
import BorderColorIcon from '@mui/icons-material/BorderColor';

// vistas
import { Type_vehicle } from '../Maintenance/Type_vehicle/Type_vehicle';
import logo_pequenio from '../../assets/Q_Logo_FndTransparente.png';

import shuttle_fondo_blanco from "../../assets/shuttle_fondo_blanco.png"
import { Container } from '@mui/material';

const drawerWidth = 270;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const DrawerFooter = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  position: 'relative',
  bottom: 0,
  width: '100%',
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

function NavMenu() {


  let location = useLocation();

  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [open2, setOpen2] = React.useState(true);
  const [items, setItems] = React.useState([]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
    return color;
  }

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClick2 = () => {
    setOpen2(!open2);
  };

  const menu_options = (type) => {

    if (type == 'admin') {
      setItems([
        {
          name: 'Reservaciones', icon: <StyleIcon />, route: '/vehicle', subitems: [
            { name: 'Estatus reservaciones', icon: <QueryStatsIcon />, route: '/vehicle', subitems: [] },
          ]
        },
        {
          name: 'Gestión de usuarios', icon: <AdminPanelSettingsIcon />, route: '/vehicle', subitems: [

            { name: 'Usuarios', icon: <GroupIcon />, route: '/user', subitems: [] },
            { name: 'Pilotos', icon: <BadgeIcon />, route: '/vehicle', subitems: [] },
            { name: 'Califificación pilotos', icon: <AutoAwesomeIcon />, route: '/vehicle', subitems: [] },
            { name: 'Reclamos', icon: <DangerousIcon />, route: '/vehicle', subitems: [] },
            { name: 'Tipos de reclamos', icon: <RuleIcon />, route: '/vehicle', subitems: [] },

          ]
        },
        {
          name: 'Gestión Monetaria', icon: <RequestQuoteIcon />, route: '/vehicle', subitems: [

            { name: 'Tipos de pago', icon: <PixIcon />, route: '/vehicle', subitems: [] },
            { name: 'Pagos', icon: <PaymentsIcon />, route: '/vehicle', subitems: [] },
            { name: 'Promociones', icon: <LocalOfferIcon />, route: '/vehicle', subitems: [] },
            { name: 'Monedas', icon: <PriceChangeIcon />, route: '/vehicle', subitems: [] },
            { name: 'Tipo medida', icon: <FiveKIcon />, route: '/vehicle', subitems: [] },
            { name: 'Tarifario', icon: <PaidIcon />, route: '/vehicle', subitems: [] },
            { name: 'Tipo de cambio', icon: <CurrencyExchangeIcon />, route: '/vehicle', subitems: [] },

          ]
        },
        {
          name: 'Vehiculos', icon: <TimeToLeaveIcon />, route: '',
          subitems: [
            { name: 'Estatus', icon: <FlakyIcon />, route: '/ddd', subitems: [] },
            { name: 'Tipo', icon: <BorderColorIcon />, route: '/Maintenance/Type_vehicle', subitems: [] },
            { name: 'Marca', icon: <BorderColorIcon />, route: '/vehicle', subitems: [] },
          ],
          open,
          setOpen,
        },
      ]);
    }
  }

  const auth = useAuth();


  console.log("este es mi auth", auth.user);

  useEffect(() => {
    console.log("use efect");
    console.log(auth.user);
    if (auth.user) {
      menu_options(auth.user.username);
    }
  }, [auth.user]);


  return (
    (location.pathname != '/' && !location.pathname.includes("login") && !location.pathname.includes("register") && location.pathname.split("/") != 4) &&
    (
        <Box sx={{ display: 'flex' , height:'92vh'}}>
          <CssBaseline />
          <AppBar position="fixed" open={open} sx={{ backgroundColor: '#116009' }}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: 5,
                  ...(open && { display: 'none' }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}
              style={{fontWeight:"bolder" , letterSpacing:2, fontSize:35}}>
                {auth.user?.username == 'admin' ? 'Módulo de gestiones Quetzal Shuttle' : auth.user?.username}
              </Typography>
            <img sx={{background:"white"}}  width={110} height={65} src={logo_pequenio}></img>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open}>
            <DrawerHeader>
              <img src={logo} alt="logo" width="100%" height="60" />
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <List
              sx={{
                width: '100%',
                maxWidth: 360,
                bgcolor: 'background.paper',
              }}
            >
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <AccountCircleIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={auth.user.username} secondary="dev" />
              </ListItem>
            </List>
            <Divider />
            <List>
              {items.map((item, index) => (
                <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                  {item.subitems == 0 && <   ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.name} sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                  }
                  {item.subitems.length > 0 && < SubItemsMenu key={index} item={item} OpenDrawer={open}/>}



                </ListItem>
              ))}
            </List>


            <DrawerFooter>
              <List
                sx={{
                  width: '100%',
                  maxWidth: 360,
                  bgcolor: 'background.paper',
                }}>


                <ListItem disablePadding sx={{ display: 'block' }}

                  onClick={() => auth.logout()}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                      <LogoutIcon />

                    </ListItemIcon>
                    <ListItemText primary="Cerrar sesion" sx={{ opacity: open ? 1 : 0 }} />

                  </ListItemButton>
                </ListItem>
              </List>
            </DrawerFooter>

          </Drawer>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <DrawerHeader />
            <Routes>
              <Route path='/Maintenance/'>
                <Route path='init' element={<Maintenance />} />
                <Route path='type_vehicle' element={<Type_vehicle />} />

              </Route>
            </Routes>
            </Container>

          </Box>
          
        </Box>
  
    )
  );
}

export { NavMenu }