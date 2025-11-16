import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Recepcao from './pages/Recepcao';
import PainelTV from './pages/PainelTV';
import Atendente from './pages/Atendente';
import Dashboard from './pages/Dashboard';
import Relatorios from './pages/Relatorios';
import Administracao from './pages/Administracao';

function App() {
  return (
    <Router>
      <Routes>
        {/* Painel TV sem layout (fullscreen) */}
        <Route path="/painel-tv" element={<PainelTV />} />
        
        {/* Páginas com layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/recepcao" replace />} />
          <Route path="recepcao" element={<Recepcao />} />
          <Route path="atendente" element={<Atendente />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="relatorios" element={<Relatorios />} />
          <Route path="administracao" element={<Administracao />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
