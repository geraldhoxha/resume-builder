import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';
import { Home } from './components/types/Home/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<Home/>}/>
      </Route>
    </Routes>
  );
}

export default App;
