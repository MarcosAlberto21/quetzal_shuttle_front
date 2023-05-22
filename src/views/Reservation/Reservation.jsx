import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import './Reservation.css'

import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import { Button, TextField } from "@mui/material";


import InputAdornment from '@mui/material/InputAdornment';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

import IconButton from '@mui/material/IconButton';
import PeopleIcon from '@mui/icons-material/People';
import NoCrashIcon from '@mui/icons-material/NoCrash';
import dayjs from "dayjs";



function Reservation() {

	
	const { date, time, no_passengers } = useParams();

	const [dateP, setDateP] = React.useState("");
	const [timeP, setTimeP] = React.useState("");
	const [passengers, setPassengers] = React.useState("");


	const theme = useTheme();

	const handleInputChange = (event) => {
		const inputValue = event.target.value;
		setPassengers(inputValue.replace(/[^0-9]/g, '')); // Solo permite números
	};

	useEffect(() => {
		console.log("useEffect");
		console.log(date, time, no_passengers);

		if (date) {
			const newDate = dayjs(date);
			console.log(newDate);
			setDateP(newDate);
		}

		if (time) {
			const [hours, minutes] = time.split(':');
			const newTime = new Date();
			newTime.setHours(hours);
			newTime.setMinutes(minutes);
			setTimeP(newTime);
		}

		if (no_passengers) {
			setPassengers(no_passengers);
		}
	}, []);


	return (
		<>
			<div className="contenedor">
				<Grid container
					direction="row"
					justifyContent="center"
					alignItems="center">
					<Card className="cardCustom" sx={{ maxWidth: 800, margin: '6px' }}>
						<Box sx={{ flexGrow: 1 }}>
							<Grid container spacing={2} >
								<Grid item xs={12} md={12} lg={5}
									container
									direction="column"
									justifyContent="center"
									alignItems="center"
								>
									<CardMedia
										component="img"
										className="imgCustom"
										image="https://i.ibb.co/7Vb8dGG/Sin-t-tulo.png"
										alt="Paella dish"
										height="100%"
										sx={{
											maxWidth: '100%',
											[theme.breakpoints.down('lg')]: {
												maxWidth: '50%',
											},
										}}
									/>
								</Grid>
								<Grid item xs={12} md={12} lg={7} style={{ gap: '2px' }}
									container
									direction="column"
									justifyContent="center"
									alignItems="center">
									<LocalizationProvider dateAdapter={AdapterDayjs}>
										<DemoContainer components={['DatePicker']}  sx={{width:'100%'}}>
											<DatePicker
												label="Fecha de reservación"
												value={dateP}
												format="DD/MM/YYYY"
												onChange={(newValue) => {
													console.log(newValue);
													setDateP(newValue)
												}}
												sx={{width:'100%',  marginTop: '12px' }} 

											/>
										</DemoContainer>
										<DemoContainer components={['TimePicker']} sx={{width:'100%'}}>
											<TimePicker
												label="Hora de reservación"
												ampm={false}
												value={timeP}
												onChange={(newValue) => {
													console.log(newValue);
													setTimeP(newValue)}}
												sx={{ width: '100%', marginTop: '15px' }} // Agregado
											/>
										</DemoContainer>
									</LocalizationProvider>
									<br />
									<TextField
										label="Ingrese un número"
										value={passengers}
										onChange={handleInputChange}
										inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
										InputProps={{
											endAdornment: (
												<InputAdornment position="end">
													<IconButton>
														<PeopleIcon />
													</IconButton>
												</InputAdornment>
											),
										}}
										sx={{ width: '100%' }} // Agregado
									/>


								</Grid>
							</Grid>
						</Box>

						<Grid
							container
							direction="column"
							justifyContent="center"
							alignItems="center"
							sx={{ padding: "15px" }}>

							<Button variant="contained" endIcon={<NoCrashIcon />}
								style={{ backgroundColor: '#325d7f' }}>
								<span style={{ fontWeight: 'bold' }}>Reservar</span>
							</Button>
						</Grid>





					</Card>
				</Grid>
			</div>


		</>
	);
}

export { Reservation };