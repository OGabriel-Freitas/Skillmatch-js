# SkillMatch JS

Projeto desenvolvido para o mini-projeto da trilha de Desenvolvimento de Software do SC TEC.

## Objetivo

O SkillMatch JS será um simulador de compatibilidade entre o perfil de um candidato e vagas fictícias de desenvolvimento Front-End Júnior. O sistema analisará as habilidades do candidato, calculará uma porcentagem de compatibilidade para cada vaga, identificará habilidades ausentes e sugerirá conteúdos para estudo.

## Tecnologias

- JavaScript puro (Vanilla JavaScript)
- Node.js para execução local
- Git e GitHub para controle de versão
- GitHub Projects para planejamento e acompanhamento das tarefas

## Estrutura prevista

```text
Skillmatch-js/
├── skillmatch.js
└── README.md
```

- `skillmatch.js`: conterá os dados do candidato e das vagas, os cálculos de compatibilidade e as funcionalidades do simulador.
- `README.md`: documentará o objetivo, a execução, as regras de cálculo e os conceitos utilizados.

## Critérios de compatibilidade

A compatibilidade será calculada pela proporção de requisitos da vaga que o candidato já atende:

**Compatibilidade (%) = (requisitos atendidos / total de requisitos da vaga) × 100**

A classificação será:

- **Alta:** de 80% a 100%.
- **Média:** de 50% a menos de 80%.
- **Baixa:** de 0% a menos de 50%.

## Funcionalidades previstas

- Cadastrar o perfil do candidato e pelo menos três vagas fictícias.
- Comparar as habilidades do candidato com os requisitos de cada vaga.
- Calcular e classificar a compatibilidade.
- Identificar as habilidades que precisam ser desenvolvidas.
- Indicar a vaga com maior compatibilidade.
- Recomendar prioridades de estudo com base nas habilidades ausentes.

## Conceitos de JavaScript

O projeto utilizará objetos, arrays, métodos de array, classes, construtores, herança, `this`, callbacks, closures, `Promise`, `async/await` e tratamento de erros.

## Execução

Após a criação do arquivo `skillmatch.js`, o projeto poderá ser executado localmente com Node.js:

```bash
node skillmatch.js
```

## Planejamento e controle de versão

O desenvolvimento será acompanhado pelo GitHub Projects. As alterações serão organizadas em branches, registradas em commits descritivos e integradas à branch principal após validação.

## Arquitetura cliente-servidor e internet

A aplicação será executada localmente e não dependerá de um servidor real. A simulação assíncrona de carregamento permitirá demonstrar conceitos de comunicação e espera por respostas. O README final explicará as diferenças entre essa simulação e uma aplicação cliente-servidor real.

## Melhorias futuras

- Criar uma interface gráfica.
- Integrar uma API real de vagas.
- Armazenar perfis e vagas em um banco de dados.
- Adicionar testes automatizados.
- Evoluir para uma aplicação Full Stack.

## Demonstração

Link do vídeo de apresentação: *a adicionar após a gravação*.
