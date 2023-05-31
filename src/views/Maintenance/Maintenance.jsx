import React from "react";
import { useAuth } from "../../auth";
import { Navigate } from "react-router-dom";
function Maintenance() {
	const auth = useAuth();

	if(!auth.user) {
		console.log("No hay usuario");
		return <Navigate to="/login" />;
	}



	return (
		<>
		<p>Hola vamos a administrar</p>
		<p>- {auth.user.username}</p>
		</>
	);
}

export {Maintenance};