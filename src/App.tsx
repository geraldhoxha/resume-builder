import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Navigation } from './components/Navigation';
import PrivateRoute from './components/Home/PrivateComponents';
import { Login, Logout } from './components/Auth';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path="/about" element={<Home />} />
        </Route>
        <Route path="/log-out" element={<Logout />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
