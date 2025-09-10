const { retornarUsuarios, adicionarNovoUsuario } = require('../src/gerenciarUsuarios');
const { expect } = require('chai');

describe('Testar as funções de Gestão de Usuários', function () {
  it('Validar que posso adicionar um novo nome de usuário na lista', function () {

    adicionarNovoUsuario('Maria', 'email@email.com');
    const listaDeUsuarios = retornarUsuarios();
    expect(listaDeUsuarios.at(-1).nome).to.equal('Maria');
    expect(listaDeUsuarios.at(-1).email).to.equal('email@email.com');
  });
});