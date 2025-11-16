import { collection, query, where, getDocs, Timestamp } from 'firebase/firestore';
import { db } from '../firebase';

/**
 * Gera senha automática para o atendimento
 * Formato: PREFIXO + NÚMERO (ex: C001, B015)
 * 
 * PREFIXO = Primeira letra do tipo de atendimento
 * NÚMERO = Sequencial do dia (001, 002, 003...)
 */
export const gerarSenha = async (crasId, tipoNome) => {
  try {
    // Buscar atendimentos de hoje do CRAS
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    const inicioDia = Timestamp.fromDate(hoje);
    
    const q = query(
      collection(db, 'atendimentos'),
      where('cras_id', '==', crasId),
      where('hora_chegada', '>=', inicioDia)
    );
    
    const snapshot = await getDocs(q);
    const totalHoje = snapshot.size;
    
    // Gerar número sequencial
    const numero = String(totalHoje + 1).padStart(3, '0');
    
    // Gerar prefixo (primeira letra do tipo)
    const prefixo = tipoNome.charAt(0).toUpperCase();
    
    return `${prefixo}${numero}`;
  } catch (error) {
    console.error('Erro ao gerar senha:', error);
    // Fallback: gera senha aleatória
    const numero = String(Math.floor(Math.random() * 999) + 1).padStart(3, '0');
    return `X${numero}`;
  }
};

/**
 * Extrai o número da senha para ordenação
 * Ex: C001 -> 1, B015 -> 15
 */
export const extrairNumeroSenha = (senha) => {
  if (!senha) return 0;
  const numero = senha.replace(/\D/g, '');
  return parseInt(numero, 10) || 0;
};
