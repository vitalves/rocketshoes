# Arquitetura Flux - REDUX

## RocketShoes

### Configurando as rotas:

`yarn add react-router-dom`

### Estilos Globais com Styled Components

`yarn add styled-components`

### Ícones da aplicação:

`yarn add react-icons`

### Trabalhando com ajustes de cores:

`yarn add polished`

### Trabalhando com API fake usando o JSON SERVER:

**Global:**
`yarn global add json-server`

_OU:_

**Dependencia de desenvolvimento:**

`yarn add json-server -D`

**Rodando a API fake:**

- Global: `json-server server.json -p 3333 -w`
- Dep dev: `yarn json-server server.json -p 3333`
definições:
- json-server: _comando de execução;_
- server.json: _nome do arquivo que contem os dados;_
- -p 333: _porta onde roda o backend fake;_
- -w: _ouve eventuais alterações no arquivo server.json e "restarta" o servidor;_

### Trabalhando com APIs

`yarn add axios`
