# Calculation

![Pipeline](https://github.com/lucasmarques73/node-api-heroku/workflows/Pipeline/badge.svg) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ZoeStyle_Formula_bhaskara&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ZoeStyle_Formula_bhaskara)

---

Projeto realizado para gerenciamento de calculos matemáticos

Foi criado um projeto Api Rest, utilizando os seguintes recursos:

- Frameworks/Bibliotecas: Node.js, Jest e Fastify;

- Arquetetura em camadas: Test, Domain e API;

- Cloud: Heroku;

Funcionalidades implementadas:

- Calculo da equação de 2 grau (Bhaskara)

---

## Frameworks/Bibliotecas

- ### Node.js

Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.

- ### Jest

Jest é uma estrutura de teste JavaScript mantida pela Meta, projetada e construída por Christoph Nakazawa com foco na simplicidade e suporte para grandes aplicativos da web. Trabalha com projetos usando Babel, TypeScript, Node.js, React, Angular, Vue.js e Svelte.

- ### Fastify

Fastify é um framework web para Node. js com foco em performance e baixo overhead, sendo assim uma ótima escolha pra você que está desenvolvendo uma arquitetura baseada em microservices.

---

## Arquetetura em camadas

- ### Test

Responsável de realizar testes unitários das camadas de Domain e API

- ### Domain

Responsável por representar conceitos, informações e regras sobre a situação do negócio. Aqui, um estado que reflete a situação de negócio é controlado e usado, embora os detalhes técnicos de armazenagem sejam delegados à infraestrutura. Esta é o coração do software do negócio.

Foi adicionado as seguintes subCamadas: Entities, ValueObject

        Em breve as decrições de todas as subcamadas
               

- ### API

Responsável por mostrar informações ao usuário e interpretar os comandos do usuário. O agente externo pode, as vezes, ser outro sistema de computador em vez de usuário.

Foi adicionado as seguintes subCamadas: Controllers, Services

        Em breve as decrições de todas as subcamadas
 
 ---
 
 ## Como executar o projeto ?
 
 - Primeiramente deve verificar se o computador ao qual deseje realizar o clone do porjeto tenha o node instalado, caso negativo realize o download pelo link https://nodejs.org/pt-br/download/
 
 - Após realizar o clone do projeto em sua maquina, abra um novo terminal e navegue ate o local ao qual realizou o clone do projeto e execute o seguinte comando
 
 ~~~ csharp
npm install
~~~

- Após execute o seguinte comando
 ~~~ csharp
npm start
~~~

