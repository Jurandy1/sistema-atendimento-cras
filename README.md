# 🏛️ Sistema de Atendimento CRAS São Luís

Sistema completo de gerenciamento de atendimento para Centros de Referência de Assistência Social (CRAS) da Prefeitura de São Luís - MA.

## 📋 Funcionalidades

### 1. **Recepção**
- Cadastro de cidadãos
- Geração automática de senhas
- Comprovante de atendimento

### 2. **Painel TV**
- Display em tempo real para TVs
- Chamadas de atendimento
- Últimos atendimentos
- Atualização automática a cada 2 segundos

### 3. **Atendente**
- Gestão de fila de atendimento
- Chamar próximo cidadão
- Registro de observações
- Finalização de atendimento

### 4. **Dashboard**
- Visão geral em tempo real
- Atendimentos por CRAS
- Tempo médio de atendimento
- Gráficos e estatísticas

### 5. **Relatórios**
- Filtros avançados
- Gráficos por tipo e sexo
- Exportação para CSV
- Análise detalhada

### 6. **Administração**
- Gerenciar Unidades CRAS
- Cadastrar Atendentes
- Configurar Tipos de Atendimento

## 🚀 Instalação

### 1. Clone o repositório
```bash
git clone https://github.com/Jurandy1/sistema-atendimento-cras.git
cd sistema-atendimento-cras
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure o Firebase

1. Crie um projeto no [Firebase Console](https://console.firebase.google.com/)
2. Ative o Firestore Database
3. Copie as credenciais do projeto
4. Crie um arquivo `.env` na raiz do projeto:

```env
REACT_APP_FIREBASE_API_KEY=sua_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=seu_projeto.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=seu_projeto_id
REACT_APP_FIREBASE_STORAGE_BUCKET=seu_projeto.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=seu_sender_id
REACT_APP_FIREBASE_APP_ID=seu_app_id
```

### 4. Inicie o projeto
```bash
npm start
```

O sistema abrirá em `http://localhost:3000`

## 📊 Estrutura de Dados (Firestore)

### Coleção: `atendimentos`
```javascript
{
  id: "auto_gerado",
  senha: "C001",
  nome: "Maria Silva",
  cpf: "12345678901",
  telefone: "98987654321",
  data_nascimento: "1990-05-15",
  sexo: "feminino",
  cras_id: "id_cras",
  tipo_atendimento_id: "id_tipo",
  atendente_id: "id_atendente",
  guiche: "01",
  status: "aguardando", // aguardando, chamando, em_atendimento, finalizado
  hora_chegada: Timestamp,
  hora_chamada: Timestamp,
  hora_inicio: Timestamp,
  hora_fim: Timestamp,
  tempo_total_minutos: 15,
  observacoes: "Documentos verificados"
}
```

### Coleção: `cras`
```javascript
{
  id: "auto_gerado",
  nome: "CRAS Centro",
  bairro: "Centro",
  endereco: "Rua X, 123",
  telefone: "98988887777",
  responsavel: "João Silva",
  ativo: true
}
```

### Coleção: `atendentes`
```javascript
{
  id: "auto_gerado",
  nome: "Carlos Santos",
  email: "carlos@saoluis.ma.gov.br",
  senha: "hash_senha",
  cras_id: "id_cras",
  guiche: "01",
  tipos_atendimento: ["id_tipo1", "id_tipo2"],
  ativo: true
}
```

### Coleção: `tipos_atendimento`
```javascript
{
  id: "auto_gerado",
  nome: "Cadastro Único",
  descricao: "Cadastramento no CadÚnico",
  cor: "#3b82f6",
  ordem: 1,
  ativo: true
}
```

## 🎨 Design

- **Cor Principal**: #1351B4 (Azul Governo)
- **Tipografia**: Sistema padrão (sans-serif)
- **Ícones**: Lucide React
- **Responsivo**: Desktop, Tablet, Mobile e TV

## 📱 URLs do Sistema

- **Recepção**: `/recepcao`
- **Painel TV**: `/painel-tv?cras_id=ID_DO_CRAS`
- **Atendente**: `/atendente`
- **Dashboard**: `/dashboard`
- **Relatórios**: `/relatorios`
- **Administração**: `/administracao`

## 🔒 Segurança

- CPF mascarado em telas públicas (123...45)
- Senhas criptografadas
- Dados sensíveis protegidos
- Regras de segurança do Firestore

## 📈 Capacidade

- 20 unidades CRAS
- 100 atendimentos/dia por CRAS
- 2.000 atendimentos/dia total
- Atualização em tempo real

## 🛠️ Tecnologias

- **React** 18.2
- **Firebase** (Firestore)
- **React Query** (Atualização em tempo real)
- **React Router** (Navegação)
- **Lucide React** (Ícones)

## 📄 Licença

Projeto desenvolvido para a Prefeitura de São Luís - MA

## 👨‍💻 Desenvolvedor

Sistema desenvolvido para SEMCAS - Secretaria Municipal da Criança e Assistência Social
