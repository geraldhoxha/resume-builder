import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { LoginUser } from './components/Auth/Login';
import { Navigation } from './components/Navigation';
import PrivateRoute from './components/Home/PrivateComponents';
import { Logout } from './components/Auth/Logout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path="/about" element={<Home />} />
        </Route>
        <Route path="/log-out" element={<Logout />} />
        <Route path="/login" element={<LoginUser />} />
      </Route>
    </Routes>
  );
}

export default App;
