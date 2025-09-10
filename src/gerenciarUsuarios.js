// Lista de usuários (array de objetos)
const usuarios = [
  { nome: 'Matheus', email: 'matheus@gospel.com' },
  { nome: 'Marcos', email: 'marcos@gospel.com' },
  { nome: 'Lucas', email: 'lucas@gospel.com' },
  { nome: 'João', email: 'joao@gospel.com' }
];

// Função para retornar todos os usuários
function retornarUsuarios() {
  return usuarios;
}

// Função para adicionar um novo usuário
function adicionarNovoUsuario(nome, email) {
  usuarios.push({ nome, email });
}

// Exportando para usar em outros arquivos
module.exports = {
  retornarUsuarios,
  adicionarNovoUsuario
};