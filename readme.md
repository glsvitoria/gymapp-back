# APP

FitFrame style app.

## RFs (Requisitos funcionais)
- [ ] Deve ser possível se cadastrar
- [ ] Deve ser possível se autenticar
- [ ] Deve ser possível recuperar a senha de um usuário
- [ ] Deve ser possível obter o perfil de um usuário logado
- [ ] Deve ser possível editar o perfil do usuário logado
- [ ] Deve ser possível alterar a senha de um usuário logado
- [ ] Deve ser possível cadastrar um treino novo
- [ ] Deve ser possível editar um treino existente
- [ ] Deve ser possível apagar um treino existente
- [ ] Deve ser possível cadastrar um exercício novo
- [ ] Deve ser possível editar um exercício
- [ ] Deve ser possível apagar um exercício
- [ ] Deve ser possível adicionar um exercício a um treino
- [ ] Deve ser possível remover um exercício a um treino
- [ ] Deve ser possível obter os treinos ativos do usuário
- [ ] Deve ser possível obter o histórico de treinos já finalizados pelo usuário

## RNs (Regras de negócio)
- [ ] O usuário não deve poder se cadastrar com um e-mail duplicado

## RNFs (Requisitos não-funcionais)
- [ ] A senha do usuário precisa estar criptografada
- [ ] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL
- [ ] Todas as listas de dados precisam estar paginadas com 20 itens por página
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token)
