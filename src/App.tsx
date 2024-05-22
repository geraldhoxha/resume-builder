import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { LoginUser } from './components/Auth/Login';
import { Navigation } from './components/Navigation';
import PrivateRoute from './components/Home/PrivateComponents';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/" element={<Home />} />
        <PrivateRoute path="/about" element={<Home />} />
        <Route path="/login" element={<LoginUser />} />
      </Route>
    </Routes>
  );
}

export default App;
