import { Box, CircularProgress, Fab } from '@mui/material';
import { useEffect, useState, useRef } from 'react';
import { Check, Save } from '@mui/icons-material';
import { green, grey, red } from '@mui/material/colors';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';


const Actions_vehicle = ({
	 rows, 
	 setRows, 
	 rowId, 
	 rowModesModel, 
	 setRowModesModel, 
	 GridRowModes ,
}) => {

	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

	const handleSaveClick = (id) => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

	const buttonSx = {
		...(success && {
			bgcolor: green[500],
			'&:hover': {
				bgcolor: green[700],
			},
		}),
	};

	const saveVehicule = async () => {
		handleSaveClick(rowId);
		setSuccess(false);
		setLoading(false);
	};

	const updateVehicule_ = () => {
		handleSaveClick(rowId);
		setSuccess(false);
		setLoading(false);
	};

	const handleNo = () => {
		setSuccess(false);
		setLoading(false);
	};

	const handleYes = () => {
		if (rowId !== -1) {
			updateVehicule_();
		} else {
			saveVehicule();
		}
	};

	const handleButtonClick = () => {
		setLoading(true);
	};

	return (
		[<Box sx={{ display: 'flex', alignItems: 'center' }}>
			<Box sx={{ m: 1, position: 'relative' }}>
				<Fab
					aria-label="save"
					color="primary"
					sx={buttonSx}
					onClick={handleButtonClick}
					size='small'
				>
					<SaveIcon />
				</Fab>
				{loading && (
					<CircularProgress
						size={50}
						sx={{
							color: green[500],
							position: 'absolute',
							top: -4,
							left: -6,
							zIndex: 1,
						}}
					/>
				)}
			</Box>
		</Box>,
		<Box sx={{ display: 'flex', alignItems: 'center' }}>
			<Box sx={{ m: 1, position: 'relative' }}>
				<Fab
					aria-label="save"
					sx={{ bgcolor: red[500],
							color: 'white'
						, '&:hover': { bgcolor: red[700] } }}
					onClick={handleCancelClick(rowId)}
					size='small'
				>
					<CancelIcon />
				</Fab>
			</Box>
		</Box>,
		<Dialog
			maxWidth="xs"
			open={loading}
		>
			<DialogTitle>
				{rowId !== -1 && `¿Estas seguro de realizar el cambio?`}
				{rowId === -1 && `¿Estas seguro crear este tipo de vehiculo?`}
			</DialogTitle>
			<DialogContent dividers>
				{`Presiona 'Si' para realizar la acción .`}
			</DialogContent>
			<DialogActions>
				<Button onClick={handleNo} >
					No
				</Button>
				<LoadingButton onClick={handleYes} >Si</LoadingButton>
			</DialogActions>
		</Dialog>
		]
	);
};

export { Actions_vehicle };
