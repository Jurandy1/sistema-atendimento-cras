/**
 * Cores pré-definidas para tipos de atendimento
 */
export const coresPredefinidas = [
  { nome: 'Azul', valor: '#3b82f6' },
  { nome: 'Verde', valor: '#10b981' },
  { nome: 'Amarelo', valor: '#f59e0b' },
  { nome: 'Vermelho', valor: '#ef4444' },
  { nome: 'Roxo', valor: '#8b5cf6' },
  { nome: 'Rosa', valor: '#ec4899' },
  { nome: 'Laranja', valor: '#f97316' },
  { nome: 'Ciano', valor: '#06b6d4' }
];

/**
 * Retorna cor com base no status do atendimento
 */
export const corPorStatus = (status) => {
  const cores = {
    'aguardando': '#f59e0b', // Amarelo
    'chamando': '#3b82f6',   // Azul
    'em_atendimento': '#10b981', // Verde
    'finalizado': '#9ca3af'  // Cinza
  };
  
  return cores[status] || '#9ca3af';
};

/**
 * Retorna nome legível do status
 */
export const nomePorStatus = (status) => {
  const nomes = {
    'aguardando': 'Aguardando',
    'chamando': 'Chamando',
    'em_atendimento': 'Em Atendimento',
    'finalizado': 'Finalizado'
  };
  
  return nomes[status] || status;
};

/**
 * Gera cor com base em hash de string (para cores consistentes)
 */
export const corPorHash = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  const cor = Math.floor(Math.abs((Math.sin(hash) * 16777215) % 1) * 16777215);
  return '#' + cor.toString(16).padStart(6, '0');
};
