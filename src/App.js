import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Login } from './views/Login/Login'
import { Maintenance } from './views/Maintenance/Maintenance'
import { Register } from './views/Register/Register'
import { Reservation } from './views/Reservation/Reservation';

import { NavMenu } from './views/NavMenu/NavMenu'

import { AuthProvider } from './auth';


function App() {



  return (
    <>
      <HashRouter>
        <AuthProvider>
          <NavMenu />
          <Routes>
            <Route path='/' element={<Reservation />} />
            <Route path='/:date/:time/:no_passengers' element={<Reservation />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Register' element={<Register />} />

            <Route path='/Maintenance/'>

              <Route path='cars' element={<Maintenance />} />
            </Route>
            <Route path='*' element={<p>Not found</p>} />

          </Routes>

        </AuthProvider>
      </HashRouter>


      {/* <div className="App">
        <header className="App-header">
          <img src="https://i.ibb.co/7Vb8dGG/Sin-t-tulo.png" alt="Sin-t-tulo" border="0" />
        </header>
      </div> */}
    </>
  );
}

export default App;
