# APP

FitFrame style app.

## Tecnologias Utilizadas

### FrontEnd
- Flutter

### BackEnd
- Fastify
- TypeScript
- Prisma
- Zod

## RFs (Requisitos funcionais)
- [ ] Deve ser possível se cadastrar
- [ ] Deve ser possível se autenticar
- [ ] Deve ser possível recuperar a senha de um usuário
- [ ] Deve ser possível obter o perfil de um usuário logado
- [ ] Deve ser possível editar o perfil do usuário logado
- [ ] Deve ser possível alterar a senha de um usuário logado
- [ ] Deve ser possível cadastrar um treino novo
- [ ] Deve ser possível obter um treino pelo usuário logado
- [ ] Deve ser possível editar um treino existente
- [ ] Deve ser possível apagar um treino existente
- [ ] Deve ser possível cadastrar um exercício novo
- [ ] Deve ser possível obter um exercício pelo usuário logado
- [ ] Deve ser possível editar um exercício
- [ ] Deve ser possível apagar um exercício
- [ ] Deve ser possível adicionar um exercício a um treino
- [ ] Deve ser possível remover um exercício a um treino
- [ ] Deve ser possível adicionar um peso a um exercício
- [ ] Deve ser possível atualizar o peso de um exercício
- [ ] Deve ser possível obter o peso de um exercício pelo usuário logado
- [ ] Deve ser possível obter os treinos ativos do usuário
- [ ] Deve ser possível o usuário inativar um treino
- [ ] Deve ser possível o usuário reativar um treino
- [ ] Deve ser possível obter o histórico de treinos já finalizados pelo usuário

## RNs (Regras de negócio)
- [ ] O usuário não deve poder se cadastrar com um e-mail duplicado
- [ ] O usuário não deve poder finalizar um treino com menos de 5 minutos após iniciado

## RNFs (Requisitos não-funcionais)
- [ ] A senha do usuário precisa estar criptografada
- [ ] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL
- [ ] Todas as listas de dados precisam estar paginadas com 20 itens por página
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token)

# Sugestões
- Mapinha de ida para a academia (Igual o github)
https://drive.google.com/drive/folders/1dabsrCSZIVBOw8pz1YRLmfKfgjj-4A-D
- Ranking de "faixas" individual
- Colocar tempo de descanso
- Exportar o treino e poder importar novamente
- Música para cada treino
