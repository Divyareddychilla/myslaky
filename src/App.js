import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../node_modules/primereact/resources/themes/bootstrap4-dark-purple/theme.css";
import "../node_modules/primereact/resources/primereact.css";
import Sidebar from './components/Sidebar';
import Analytics from './pages/Analytics';
import About from './pages/About';
import Header from './components/Header';
import TeamsSidebar from './components/teamsSidebar/TeamsSidebar';
import Ebiz from './pages/Ebiz';
import Comment from './pages/Comment';
const App = () => {
  return (
    <BrowserRouter>
      <div className='d-flex flex-column h-100'>
        <Header />
        <Routes>
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/analytics" element={<Sidebar><Analytics /></Sidebar>} />
          <Route path="/comment" element={<Sidebar><Comment /></Sidebar>} />
          <Route path="/about" element={<Sidebar><About /></Sidebar>} />
          <Route path='/ebiz' element={<TeamsSidebar><Ebiz /></TeamsSidebar>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;


