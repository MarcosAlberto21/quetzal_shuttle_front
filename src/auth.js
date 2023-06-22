import React from 'react';
import { useNavigate , Navigate } from 'react-router-dom';

const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = React.useState(null);

  const login = ({ username }) => {
		console.log("username: ", username);
    setUser({ username });
    navigate('/Maintenance/init');
  };
  
  const logout = () => {
    setUser(null);
    navigate('/login');
  };
  
  const auth = { user, login, logout };

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const auth = React.useContext(AuthContext);
  return auth;
}

function AuthRoute(props) {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to="/login" />;
  }

  return props.children;
}

export {
  AuthProvider,
  AuthRoute,
  useAuth,
};