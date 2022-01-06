import logo from './logo.svg';
import './App.css';
import CharactersList from './pages/CharactersList';
import { Route, Routes } from 'react-router-dom';
import Character from './pages/Character';
import Search from './pages/Search';
import Mutation from './pages/Mutation';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Query */}
        {/* <Route path="/" element={<CharactersList />} />
        <Route path="/search" element={<Search />} />
        <Route path="/:id" element={<Character />} /> */}

        {/* Mutation */}
        <Route path="/mutation" element={<Mutation />} />
      </Routes>
    </div>
  );
}

export default App;
