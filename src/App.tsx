import { Routes, Route } from 'react-router-dom';
import { Repos } from './pages/Repos';
import { Repo } from './pages/Repo';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Repos/>}  />
      <Route path="/repo/*" element={<Repo/>}  />
    </Routes>
  )
}

export default App
