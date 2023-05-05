import React from "react";
import { useParams } from 'react-router-dom';



function Reservation() {
	const { date, time, no_passengers } = useParams();

	return (
		<>
		
		<p>Hola vamos a reservar</p>
		<h1>{date}</h1>
		<h1>{time}</h1>
		<h1>{no_passengers}</h1>

		</>
	);
}

export {Reservation};