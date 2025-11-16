/**
 * Calcula diferença em minutos entre duas datas
 */
export const calcularDiferencaMinutos = (dataInicio, dataFim) => {
  if (!dataInicio || !dataFim) return 0;
  
  // Converter Firebase Timestamp para Date
  const inicio = dataInicio.toDate ? dataInicio.toDate() : new Date(dataInicio);
  const fim = dataFim.toDate ? dataFim.toDate() : new Date(dataFim);
  
  const diferencaMs = fim - inicio;
  return Math.round(diferencaMs / 1000 / 60);
};

/**
 * Calcula tempo decorrido desde uma data até agora
 */
export const calcularTempoDecorrido = (dataInicio) => {
  if (!dataInicio) return 0;
  
  const inicio = dataInicio.toDate ? dataInicio.toDate() : new Date(dataInicio);
  const agora = new Date();
  
  const diferencaMs = agora - inicio;
  return Math.round(diferencaMs / 1000 / 60);
};

/**
 * Calcula tempo médio de atendimento
 */
export const calcularTempoMedio = (atendimentos) => {
  if (!atendimentos || atendimentos.length === 0) return 0;
  
  // Filtrar apenas finalizados com tempo calculado
  const finalizados = atendimentos.filter(a => 
    a.status === 'finalizado' && a.tempo_total_minutos
  );
  
  if (finalizados.length === 0) return 0;
  
  const somaTempos = finalizados.reduce((acc, a) => acc + a.tempo_total_minutos, 0);
  return Math.round(somaTempos / finalizados.length);
};

/**
 * Agrupa atendimentos por CRAS
 */
export const agruparPorCRAS = (atendimentos, listaCras) => {
  const agrupado = {};
  
  listaCras.forEach(cras => {
    agrupado[cras.id] = {
      nome: cras.nome,
      total: 0,
      aguardando: 0,
      em_atendimento: 0,
      finalizados: 0
    };
  });
  
  atendimentos.forEach(atendimento => {
    const crasId = atendimento.cras_id;
    if (agrupado[crasId]) {
      agrupado[crasId].total++;
      
      if (atendimento.status === 'aguardando' || atendimento.status === 'chamando') {
        agrupado[crasId].aguardando++;
      } else if (atendimento.status === 'em_atendimento') {
        agrupado[crasId].em_atendimento++;
      } else if (atendimento.status === 'finalizado') {
        agrupado[crasId].finalizados++;
      }
    }
  });
  
  return Object.values(agrupado);
};

/**
 * Agrupa atendimentos por tipo
 */
export const agruparPorTipo = (atendimentos, listaTipos) => {
  const agrupado = {};
  
  listaTipos.forEach(tipo => {
    agrupado[tipo.id] = {
      nome: tipo.nome,
      cor: tipo.cor,
      quantidade: 0
    };
  });
  
  atendimentos.forEach(atendimento => {
    const tipoId = atendimento.tipo_atendimento_id;
    if (agrupado[tipoId]) {
      agrupado[tipoId].quantidade++;
    }
  });
  
  return Object.values(agrupado);
};

/**
 * Agrupa atendimentos por sexo
 */
export const agruparPorSexo = (atendimentos) => {
  const agrupado = {
    masculino: { nome: 'Masculino', quantidade: 0 },
    feminino: { nome: 'Feminino', quantidade: 0 },
    outro: { nome: 'Outro', quantidade: 0 },
    nao_informado: { nome: 'Não Informado', quantidade: 0 }
  };
  
  atendimentos.forEach(atendimento => {
    const sexo = atendimento.sexo || 'nao_informado';
    if (agrupado[sexo]) {
      agrupado[sexo].quantidade++;
    }
  });
  
  return Object.values(agrupado);
};
