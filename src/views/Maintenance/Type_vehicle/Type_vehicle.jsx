import { useEffect, useMemo, useState, useRef, forwardRef } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Actions_vehicle } from './Actions_vehicle';
import LoadingButton from '@mui/lab/LoadingButton';
import Slide from '@mui/material/Slide';

import Tooltip from '@mui/material/Tooltip';
import InfoIcon from '@mui/icons-material/Info';
import AppBar from '@mui/material/AppBar';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import * as locales from '@mui/material/locale';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Fade from '@mui/material/Fade';
import PropTypes from 'prop-types';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { blue,green, grey, red, orange } from '@mui/material/colors';

import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';




import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  useGridApiRef,
  gridExpandedRowCountSelector,
  gridVisibleColumnDefinitionsSelector,
  gridExpandedSortedRowIdsSelector,
} from '@mui/x-data-grid';
import Snackbar from '@mui/material/Snackbar';
import useAxiosInstance from '../../../hooks/useAxiosInstance';
import MuiAlert from '@mui/material/Alert';


const initialRows = [];

function Transition(props) {
  return <Slide {...props} direction="left" />;
}


const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };
  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};


function EditToolbar(props) {
  const { setRows, setRowModesModel, rows, toTopTable } = props;


  const handleClick = () => {

    const negativeId = rows.find((row) => row.id < 0);
    if (negativeId) {
      return;
    }
    const id = -1;
    setRows((oldRows) => [{ id, name: '', isNew: true }, ...oldRows]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
    }));


  };

  return (
    <GridToolbarContainer>
      <Button startIcon={<AddIcon />} onClick={handleClick}
        sx={{
          bgcolor: grey[500], 
          
          '&:hover': {
            bgcolor: grey[700],
            boxShadow: '0 0 0 0.2rem rgba(0,0,0,.5)',
            transform: 'scale(1.01)',
            transition: '0.3s',
            borderRadius: 5,
            color: 'white',
            fontWeight: 'bold',
          },
          color: 'white',
          borderRadius: 5,
        }}
      >
        Agregar vehiculo
      </Button>

      <Button sx={
        {
          color: 'black',
          borderColor: 'black',
          border: 1,
          borderRadius: 5,
        }
      }
      startIcon={<KeyboardDoubleArrowUpIcon />}
      onClick={toTopTable}
      >Subir</Button>
    </GridToolbarContainer>
  );
}

function Type_vehicle(props) {

  const axiosInstance = useAxiosInstance();
  const theme = useTheme();
  const [locale, setLocale] = useState('esES');
  const themeWithLocale = useMemo(
    () => createTheme(theme, locales[locale]),
    [locale, theme],
  );

  const apiRef = useGridApiRef();

  const [coordinates, setCoordinates] = useState({
    rowIndex: 0,
    colIndex: 0,
  });


  const getVehicles = async () => {
    // get con axios
    const response = await axiosInstance.get('/type_vehicle');
    console.log(response);
    setRows(response.data);
  };

  const deleteVehicle = async (id) => {
    // delete con axios
    try {
      const response = await axiosInstance.delete(`/type_vehicle/`, {
        params: {
          id: id
        }
      });
      console.log(response);
      getVehicles();
    } catch (error) {
      console.log(error);
      if (error.response.status === 400) {
        setSnackbar({ children: 'No se puede eliminar el tipo de vehiculo, ya que existen vehiculos asociados a este tipo!', severity: 'error' });
      } else {
        setSnackbar({ children: 'Error al eliminar el tipo de vehiculo, revisa la conexión!', severity: 'error' });
      }


    }

  };

  const addVehicle = async (vehicle) => {
    // post con axios
    const response = await axiosInstance.post('/type_vehicle', vehicle);
    console.log(response);
    getVehicles();
  };

  const updateVehicle = async (vehicle) => {
    console.log("vehicle", vehicle);
    // put con axios
    try {
      const response = await axiosInstance.put('/type_vehicle', vehicle)
      console.log(response);
      getVehicles();
    } catch (error) {
      console.log(error);
      setSnackbar({ children: 'Error al actualizar el tipo de vehiculo!', severity: 'error' });
    }

  };

  const toTopTable = () => {
    setCoordinates((coords) => {
      return { ...coords, rowIndex: 0, colIndex: 0 };
    }
    );

  };



  useEffect(() => {
    getVehicles();
 
    apiRef.current.scrollToIndexes(coordinates);


  }, [apiRef, coordinates]);

  const [rows, setRows] = useState(initialRows);
  const [rowModesModel, setRowModesModel] = useState({});
  const [snackbar, setSnackbar] = useState(null);
  const handleCloseSnackbar = () => setSnackbar(null);
  const [dialogDelete, setDialogDelete] = useState(false);
  const [idDelete, setIdDelete] = useState(null);

  const handleRowEditStart = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleDeleteClick = (id) => () => {
    setDialogDelete(true);
    setIdDelete(id);
  };

  const handleDelete = () => {
    deleteVehicle(idDelete);
    setDialogDelete(false);
    setIdDelete(null);
    setSnackbar({ children: 'Tipo de vehiculo eliminado!', severity: 'success' });
  };


  const handleCancelDelete = () => {
    setDialogDelete(false);
    setIdDelete(null);
  };


  const processRowUpdate = async (newRow) => {

    console.log("newRow", newRow);
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));

    if (newRow.isNew) {
      delete newRow.id;
      await addVehicle(newRow);
      setSnackbar({ children: 'Tipo de vehiculo agregado!', severity: 'success' });
    } else {
      await updateVehicle(newRow);
      setSnackbar({ children: 'Tipo de vehiculo actualizado!', severity: 'success' });

    }



    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns = [
    {
      field: 'name', headerName: 'Name', minWidth: 400,
      editable: true
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      minWidth: 400,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
        if (isInEditMode) {
          return ([
            <Actions_vehicle
              key={id}
              rows={rows}
              setRows={setRows}
              rowModesModel={rowModesModel}
              setRowModesModel={setRowModesModel}
              GridRowModes={GridRowModes}
              addVehicule={addVehicle}
              updateVehicule={updateVehicle}
              rowId={id}
            />]
          );
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
            sx={{ color: blue[900] }}
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
            sx={{ color: red[600] }}
          />,
        ];
      },
    },
  ];

  return (
    <ThemeProvider theme={themeWithLocale}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ background: "#3F4E4F" }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: "bolder" }}>
              Tipos de Vehiculos
            </Typography>
            <Tooltip title="Esta sección puede crear, verificar, modificar, eliminar, exportar , filtrar información">
              <IconButton>
                <InfoIcon />
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>

      </Box>
      <CssBaseline />
      <Toolbar id="back-to-top-anchor" />
      <Box
        sx={{
          height: 500,
          width: '100%',
          '& .actions': {
            color: 'text.secondary',
          },
          '& .textPrimary': {
            color: 'text.primary',
          },
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          editMode="row"
          rowModesModel={rowModesModel}
          onRowModesModelChange={handleRowModesModelChange}
          onRowEditStart={handleRowEditStart}
          onRowEditStop={handleRowEditStop}
          processRowUpdate={processRowUpdate}
          onProcessRowUpdateError={(params, error) => setSnackbar({ children: error.message, severity: 'error' })}
          apiRef={apiRef}
          slots={{
            toolbar: EditToolbar,
          }}
          slotProps={{
            toolbar: { setRows, setRowModesModel, rows, toTopTable },
          }}
        />
        {!!snackbar && (
          <Snackbar
            open
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            onClose={handleCloseSnackbar}
            autoHideDuration={6000}
            TransitionComponent={Transition}
          >
            <Alert {...snackbar} onClose={handleCloseSnackbar} />
          </Snackbar>
        )}

        <Dialog
          maxWidth="xs"
          open={dialogDelete}
        >
          <DialogTitle>
            {`¿Estas seguro eliminar el tipo de vehiculo?`}
          </DialogTitle>
          <DialogContent dividers>
            {`Presiona 'Si' para realizar la acción .`}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCancelDelete}  >
              No
            </Button>
            <LoadingButton onClick={handleDelete}  >Si</LoadingButton>
          </DialogActions>
        </Dialog>
      </Box>
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </ThemeProvider >
  );
}


export { Type_vehicle }