/**
 * Formata CPF para exibição
 * Completo: 123.456.789-01
 * Mascarado: 123.***.***.01
 */
export const formatarCPF = (cpf, mascarado = false) => {
  if (!cpf) return '';
  
  const numeros = cpf.replace(/\D/g, '');
  
  if (mascarado) {
    // Mostra 3 primeiros, esconde 6 do meio, mostra 2 últimos
    const inicio = numeros.slice(0, 3);
    const fim = numeros.slice(-2);
    return `${inicio}.***.***.${fim}`;
  }
  
  // CPF completo formatado
  return numeros.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};

/**
 * Formata telefone: (98) 98765-4321
 */
export const formatarTelefone = (telefone) => {
  if (!telefone) return '';
  
  const numeros = telefone.replace(/\D/g, '');
  
  if (numeros.length === 11) {
    return numeros.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  }
  
  if (numeros.length === 10) {
    return numeros.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  }
  
  return telefone;
};

/**
 * Formata data para exibição: 16/01/2025
 */
export const formatarData = (data) => {
  if (!data) return '';
  
  if (data.toDate) {
    // Firebase Timestamp
    data = data.toDate();
  }
  
  if (typeof data === 'string') {
    data = new Date(data);
  }
  
  return data.toLocaleDateString('pt-BR');
};

/**
 * Formata data e hora: 16/01/2025 14:30
 */
export const formatarDataHora = (data) => {
  if (!data) return '';
  
  if (data.toDate) {
    data = data.toDate();
  }
  
  if (typeof data === 'string') {
    data = new Date(data);
  }
  
  return data.toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

/**
 * Formata apenas hora: 14:30
 */
export const formatarHora = (data) => {
  if (!data) return '';
  
  if (data.toDate) {
    data = data.toDate();
  }
  
  if (typeof data === 'string') {
    data = new Date(data);
  }
  
  return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit'
  });
};

/**
 * Retorna data/hora atual formatada para exibição
 */
export const obterDataHoraAtual = () => {
  const agora = new Date();
  return {
    data: formatarData(agora),
    hora: formatarHora(agora),
    diaSemana: agora.toLocaleDateString('pt-BR', { weekday: 'long' })
  };
};

/**
 * Formata minutos para exibição: "15 min" ou "1h 30min"
 */
export const formatarMinutos = (minutos) => {
  if (!minutos || minutos < 1) return '0 min';
  
  if (minutos < 60) {
    return `${Math.round(minutos)} min`;
  }
  
  const horas = Math.floor(minutos / 60);
  const mins = Math.round(minutos % 60);
  
  if (mins === 0) {
    return `${horas}h`;
  }
  
  return `${horas}h ${mins}min`;
};
