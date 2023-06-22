import React from "react";
import { useAuth } from "../../auth";
import { Navigate } from "react-router-dom";
import fondo_mantenimiento from "../../assets/Admin-Control-Panel.svg";
import Grid from '@mui/material/Grid';
function Maintenance() {
	const auth = useAuth();

	if (!auth.user) {
		console.log("No hay usuario");
		return <Navigate to="/login" />;
	}

	return (
		<>
			<Grid
				container
				direction="column"
				justifyContent="center"
				alignItems="center"
			>
				<h1>Bienvenido</h1>
				<h4> Realiza todas las gestiones para que tu sistema funcione a tu manera</h4>
				<img src={fondo_mantenimiento} alt="fondo_mantenimiento" height={400} />
			</Grid>

		</>
	);
}

export { Maintenance };