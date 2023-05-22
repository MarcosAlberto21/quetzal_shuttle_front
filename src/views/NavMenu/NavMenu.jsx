import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function NavMenu() {

	let location = useLocation();
	console.log(location)

	return (
		(["/"].indexOf(location.pathname) && ["/Register"].indexOf(location.pathname) && ["/Login"].indexOf(location.pathname) && location.pathname.split("/").length != 3) < 0 &&
		(<h1>MENU</h1>
		)
	);
}

export { NavMenu };