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

## Configurando o Redux##

`yarn add redux react-redux`

- cria o diretorio _store_ e o arquivo _index.js_ dentro para o 'createStore;
- importa **Provider** de **'react-redux'** no arquivo _App.js_;
- importa **store** de para dentro do _App.js_ para usar como parâmentro;
- Envolve TODOS os componentes contido no _return_ dentro do _Provider_;

```js
return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
```

