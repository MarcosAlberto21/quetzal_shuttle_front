import { useEffect, useState, useRef } from 'react';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useNavigate, useLocation, Navigate } from "react-router-dom";


function SubItemsMenu({ item , OpenDrawer}) {

	const [open, setOpen] = useState(false);

	const navigate = useNavigate();

	const handleClick = () => {
		setOpen(!open);
	};

	useEffect(() => {	
		if(!OpenDrawer){
			setOpen(false);
		}
	}, [OpenDrawer]);

	return (
		<>
			<ListItemButton onClick={handleClick}>
				<ListItemIcon>
					{item.icon}
				</ListItemIcon>
				<ListItemText primary={item.name} />
				{open ? <ExpandLess /> : <ExpandMore />}
			</ListItemButton>
			<Collapse in={open} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					{item.subitems.map((subItem, index) => (
						<ListItemButton sx={{ pl: 4 }} key={index} onClick={
							() =>
							{
							console.log(subItem.route)
							
							navigate(subItem.route)
						}}>
							<ListItemIcon>
								{subItem.icon}
							</ListItemIcon>
							<ListItemText primary={subItem.name} />
						</ListItemButton>
					))}
				</List>
			</Collapse>
		</>
	)
}

export { SubItemsMenu };