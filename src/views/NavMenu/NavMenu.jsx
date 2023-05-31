import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

// import React from 'react';
// import { makeStyles } from '@mui/styles';
// import Drawer from '@mui/material/Drawer';
// import Avatar from '@mui/material/Avatar';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import Divider from '@mui/material/Divider';

const drawerWidth = 250;

// const useStyles = makeStyles((theme) => ({
//   drawer: {
//     width: drawerWidth,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     color: '#fff',
//   },
//   avatar: {
//     width: theme.spacing(7),
//     height: theme.spacing(7),
//     margin: '20px auto',
//     backgroundColor: '#fff',
//     color: '#000',
//     textAlign: 'center',
//     lineHeight: `${theme.spacing(7)}px`,
//     fontWeight: 'bold',
//   },
//   username: {
//     textAlign: 'center',
//     marginTop: theme.spacing(2),
//   },
//   listItem: {
//     cursor: 'pointer',
//     '&:hover': {
//       backgroundColor: 'rgba(255, 255, 255, 0.2)',
//     },
//   },
//   subMenu: {
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//     paddingLeft: theme.spacing(3),
//   },
//   subMenuItem: {
//     padding: theme.spacing(1),
//     cursor: 'pointer',
//     '&:hover': {
//       backgroundColor: 'rgba(255, 255, 255, 0.3)',
//     },
//   },
// }));


function NavMenu() {

	let location = useLocation();



	return (
		( location.pathname != '/' && !location.pathname.includes("login") && !location.pathname.includes("register") && location.pathname.split("/") != 4 ) &&
		(<h1>MENU</h1>
		)
	);
}

export { NavMenu };