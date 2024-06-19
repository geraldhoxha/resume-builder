import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Navigation } from './components/Navigation';
import PrivateRoute from './components/Home/PrivateComponents';
import { Login, Logout } from './components/Auth';
import { Builder } from './components/Builder/Builder';
import NotFound from './components/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path="/about" element={<Home />} />
          <Route path="/build" element={<Builder />} />
          <Route path="/log-out" element={<Logout />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
