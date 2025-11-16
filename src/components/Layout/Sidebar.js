import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Tv, 
  Users, 
  BarChart3, 
  FileText, 
  Settings,
  Menu,
  X
} from 'lucide-react';
import './Layout.css';

function Sidebar({ aberta, setAberta }) {
  const menuItems = [
    { path: '/recepcao', icon: Home, label: 'Recepção' },
    { path: '/painel-tv', icon: Tv, label: 'Painel TV', externo: true },
    { path: '/atendente', icon: Users, label: 'Atendente' },
    { path: '/dashboard', icon: BarChart3, label: 'Dashboard' },
    { path: '/relatorios', icon: FileText, label: 'Relatórios' },
    { path: '/administracao', icon: Settings, label: 'Administração' }
  ];

  return (
    <>
      {/* Botão mobile para abrir/fechar sidebar */}
      <button 
        className="sidebar-toggle-mobile"
        onClick={() => setAberta(!aberta)}
        aria-label="Toggle menu"
      >
        {aberta ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay mobile */}
      {aberta && (
        <div 
          className="sidebar-overlay"
          onClick={() => setAberta(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${aberta ? 'aberta' : 'fechada'}`}>
        {/* Logo e Título */}
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <div className="logo-circulo">
              <span>SL</span>
            </div>
            {aberta && (
              <div className="logo-texto">
                <h1>SEMCAS</h1>
                <p>São Luís - MA</p>
              </div>
            )}
          </div>
        </div>

        {/* Menu de Navegação */}
        <nav className="sidebar-nav">
          {menuItems.map((item) => {
            if (item.externo) {
              return (
                <a
                  key={item.path}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sidebar-link"
                  title={item.label}
                >
                  <item.icon size={20} />
                  {aberta && <span>{item.label}</span>}
                </a>
              );
            }

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  `sidebar-link ${isActive ? 'ativo' : ''}`
                }
                title={item.label}
              >
                <item.icon size={20} />
                {aberta && <span>{item.label}</span>}
              </NavLink>
            );
          })}
        </nav>

        {/* Rodapé com Usuário */}
        <div className="sidebar-footer">
          {aberta ? (
            <>
              <div className="usuario-info">
                <div className="usuario-avatar">
                  <span>U</span>
                </div>
                <div className="usuario-dados">
                  <p className="usuario-nome">Usuário</p>
                  <p className="usuario-email">usuario@saoluis.ma.gov.br</p>
                </div>
              </div>
              <button className="btn-sair" title="Sair">
                Sair
              </button>
            </>
          ) : (
            <div className="usuario-avatar" title="Usuário">
              <span>U</span>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
