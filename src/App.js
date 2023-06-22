import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Login } from './views/Login/Login'
import { Register } from './views/Register/Register'
import { Reservation } from './views/Reservation/Reservation';
import { NavMenu } from './views/NavMenu/NavMenu'

import { AuthProvider, AuthRoute } from './auth';
import Footer from '../src/components/footer';


function App() {



  return (
    <>
      <HashRouter>
        <AuthProvider>
          <AuthRoute>
            <NavMenu />
          </AuthRoute>
          <Routes>
            <Route path='/' element={<Reservation />} />
            <Route path='/:date/:time/:no_passengers' element={<Reservation />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Register' element={<Register />} />

            {/* <Route path='*' element={<p>Not found</p>} /> */}

          </Routes>
          {/* <Footer /> */}
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
