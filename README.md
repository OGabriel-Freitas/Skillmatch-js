# SkillMatch JS — Simulador de Compatibilidade com Vagas Front-End Júnior

## 1. Objetivo do projeto

O **SkillMatch JS** é um simulador desenvolvido em JavaScript puro que compara as habilidades de um candidato com os requisitos de vagas fictícias para desenvolvedores Front-End Júnior.

O sistema calcula a compatibilidade entre o perfil do candidato e cada vaga, classifica os resultados, identifica habilidades faltantes, seleciona a vaga mais compatível e recomenda prioridades de estudo.

O projeto foi desenvolvido como mini-projeto avaliativo do curso de Desenvolvimento de Software da SC TEC, com o objetivo de praticar os fundamentos da programação utilizando JavaScript.

## 2. Tecnologias utilizadas

- JavaScript.
- Node.js para executar o programa localmente.
- Git para controle de versão.
- GitHub para hospedagem do código-fonte.
- GitHub Projects para organização das tarefas utilizando Kanban.

## 3. Pré-requisitos

Para executar o projeto, é necessário ter:

- [Node.js](https://nodejs.org/) instalado.
- [Visual Studio Code](https://code.visualstudio.com/) ou outro editor de código.
- Git instalado para clonar o repositório.
- Acesso à internet para baixar o projeto do GitHub, caso ainda não esteja disponível localmente.

Não é necessário instalar dependências adicionais, pois o projeto utiliza recursos nativos do JavaScript e do Node.js.

## 4. Como executar o projeto

### 4.1. Obter o código

Clone o repositório:

```bash
git clone https://github.com/OGabriel-Freitas/Skillmatch-js.git
```

Entre na pasta:

```bash
cd Skillmatch-js
```

### 4.2. Executar o programa

Execute o arquivo principal utilizando o Node.js:

```bash
node skillmatch.js
```

O relatório será exibido diretamente no terminal, apresentando as informações do candidato, a análise das vagas, as habilidades faltantes, a melhor compatibilidade e as prioridades de estudo.

## 5. Funcionalidades

- Cadastro do perfil do candidato por meio da classe `Candidato`.
- Cadastro de seis vagas fictícias para desenvolvedores Front-End Júnior.
- Comparação entre as habilidades do candidato e os requisitos das vagas.
- Cálculo do percentual de compatibilidade.
- Classificação das vagas em alta, média ou baixa compatibilidade.
- Identificação das habilidades exigidas que o candidato ainda não possui.
- Seleção da vaga com maior compatibilidade.
- Recomendação de habilidades prioritárias para estudo.
- Exibição de relatório no terminal.
- Simulação de carregamento assíncrono das vagas.
- Tratamento de erros durante o carregamento.

## 6. Critérios de compatibilidade

A compatibilidade é calculada comparando as habilidades do candidato com as habilidades exigidas por cada vaga.

**Fórmula:**

Compatibilidade (%) = (quantidade de habilidades exigidas que o candidato possui ÷ total de habilidades exigidas pela vaga) × 100

O resultado é arredondado para um número inteiro.

### Classificação

| Percentual | Classificação |
|---|---|
| 80% a 100% | Alta compatibilidade |
| 50% a 79% | Média compatibilidade |
| 0% a 49% | Baixa compatibilidade |

O cálculo considera a correspondência entre os nomes das habilidades. Por exemplo, possuir Angular não significa possuir React, pois são tecnologias diferentes.

As habilidades registradas como estando em aprendizado são apresentadas no perfil, mas não são contabilizadas como habilidades já dominadas.

A experiência profissional e a área de interesse são exibidas no relatório, mas não participam diretamente da fórmula atual de compatibilidade.

Caso uma vaga não possua requisitos cadastrados, o sistema retorna 0% de compatibilidade para evitar uma divisão inválida.

### 6.1. Critério de prioridade de estudo

A recomendação de estudo considera a frequência com que cada habilidade faltante aparece entre as vagas analisadas.

Quanto mais vagas exigirem uma habilidade que o candidato ainda não possui, maior será sua prioridade de estudo.

Em caso de empate na frequência, a ordem de aparição das habilidades durante o processamento é preservada.

No perfil utilizado pelo projeto, React aparece como a principal prioridade, seguido por TypeScript, consumo de APIs e testes automatizados.

Esse critério ajuda a identificar habilidades que podem ampliar as possibilidades de candidatura a diferentes vagas.

## 7. Conceitos de JavaScript aplicados

| Conceito | Aplicação no projeto |
|---|---|
| Tipos de dados | Strings para nomes e habilidades, números para percentuais e salários, arrays para habilidades e vagas e objetos para organizar dados e resultados. |
| Variáveis (`const` e `let`) | Armazenamento de dados e resultados. |
| Operadores | Operadores aritméticos no cálculo de compatibilidade, comparações para classificação e operadores lógicos em condições. |
| Condicionais (`if/else`) | Classificação de compatibilidade e tratamento de situações específicas. |
| Laços de repetição (`for` e `while`) | Percorrer vagas e organizar habilidades faltantes. |
| `filter()` | Identificação de habilidades faltantes e comparação de requisitos. |
| `map()` | Obtenção dos nomes das empresas para o relatório. |
| `reduce()` | Seleção da melhor vaga e identificação da habilidade prioritária. |
| Funções e arrow functions | Organização de operações, cálculos, relatórios e processamento de resultados. |
| Classes e construtores | Organização dos dados e comportamentos de candidatos e vagas. |
| Herança | Especialização da classe `Vaga` por meio de `VagaRemota`. |
| `this` | Acesso aos atributos e métodos da instância atual. |
| Callback | Execução de uma função de retorno durante a análise de uma vaga. |
| Closure | Preservação do contador de análises realizadas. |
| Promise | Representação do carregamento assíncrono das vagas. |
| `setTimeout()` | Simulação de um pequeno atraso no carregamento. |
| `async/await` | Organização da execução assíncrona. |
| `try/catch` | Tratamento de erros durante a execução do sistema. |

### 7.1. Diferenças entre `var`, `let` e `const`

O JavaScript oferece diferentes formas de declarar variáveis.

- `var`: possui escopo de função ou global e permite redeclaração no mesmo escopo.
- `let`: possui escopo de bloco e permite reatribuição.
- `const`: possui escopo de bloco e não permite reatribuir a variável após sua inicialização.

O uso de `const` não torna objetos e arrays imutáveis. Seus conteúdos ainda podem ser modificados, desde que não haja uma tentativa de reatribuir a variável.

O projeto prioriza `const` quando não é necessário reatribuir uma variável e utiliza `let` quando o valor precisa mudar. O uso de `var` foi evitado para manter um padrão moderno de escrita.

## 8. Organização do código

O arquivo `skillmatch.js` concentra a implementação do simulador e suas funcionalidades.

- **`Candidato`**: representa o perfil do candidato.
- **`Vaga`**: representa uma vaga e contém métodos para calcular compatibilidade e identificar habilidades faltantes.
- **`VagaRemota`**: especializa a classe `Vaga`, acrescentando informações relacionadas à modalidade remota e à remuneração.
- **`classificarCompatibilidade()`**: determina a classificação de cada resultado.
- **`analisarVaga()`**: executa a análise utilizando callback.
- **`criarContadorAnalises()`**: demonstra o funcionamento de closure.
- **`encontrarMelhorVaga()`**: seleciona a vaga com maior percentual de compatibilidade.
- **`montarFaltantes()`**: reúne as habilidades exigidas que não estão presentes no perfil.
- **`gerarRecomendacaoEstudos()`**: calcula as prioridades de estudo.
- **`gerarRelatorio()`**: apresenta os resultados no terminal.
- **`carregarVagas()`**: simula o carregamento assíncrono dos dados.
- **`iniciarSistema()`**: coordena a execução utilizando `async/await` e tratamento de erros.

## 9. Internet e arquitetura cliente-servidor

Aplicações conectadas à internet podem utilizar a arquitetura cliente-servidor para trocar informações.

- **Cliente:** aplicação que solicita informações ou serviços.
- **Servidor:** recebe as solicitações, processa as operações e devolve respostas.
- **DNS:** auxilia na tradução de nomes de domínio em endereços IP.
- **HTTP/HTTPS:** protocolos utilizados na comunicação entre aplicações.

Em uma aplicação real, o SkillMatch JS poderia receber vagas de uma API hospedada em um servidor, em vez de manter os dados diretamente no código.

Entretanto, **a versão atual não realiza requisições HTTP, não acessa uma API real e não utiliza banco de dados**. As vagas são cadastradas diretamente no arquivo JavaScript.

O carregamento é simulado com `Promise` e `setTimeout()`, permitindo praticar o comportamento assíncrono sem depender de um servidor externo.

## 10. Ambiente de desenvolvimento

O projeto pode ser desenvolvido utilizando o Visual Studio Code e o Node.js.

Extensões opcionais que podem auxiliar no desenvolvimento:

- **Prettier:** formatação automática do código.
- **ESLint:** identificação de possíveis problemas e aplicação de regras de qualidade.

Essas extensões são ferramentas de apoio e não são necessárias para executar o programa.

## 11. Controle de versão e organização das tarefas

O Git foi utilizado para acompanhar as alterações realizadas no código, enquanto o GitHub permite armazenar o repositório e acompanhar seu histórico.

O desenvolvimento foi organizado por meio de branches com o prefixo `feature/`, separando funcionalidades em etapas menores.

As branches utilizadas devem ser conferidas no repositório. A existência de uma branch não significa, por si só, que suas alterações foram integradas à `main`. A integração deve ser verificada pelo histórico de commits ou pelos pull requests.

### Organização Kanban

O acompanhamento das tarefas utiliza as seguintes etapas:

- **Pendências (Backlog):** tarefas identificadas que ainda não estão prontas para execução.
- **A fazer (Ready):** tarefas priorizadas e prontas para começar.
- **Em andamento (In progress):** tarefas em desenvolvimento.
- **Em revisão (In review):** tarefas aguardando revisão.
- **Em testes (In testing):** tarefas em validação.
- **Concluído (Done):** tarefas finalizadas.

**Repositório GitHub:**

https://github.com/OGabriel-Freitas/Skillmatch-js

**GitHub Projects:**

https://github.com/users/OGabriel-Freitas/projects/3

**Quadro Trello:**

https://trello.com/invite/b/6aa33f719d461db5dc62250e/ATTI14f08efb20ee70549d73d68998df2caf3E035261/skillmatch-js

## 12. Uso de inteligência artificial e fontes de consulta

Durante o desenvolvimento, ferramentas de inteligência artificial foram utilizadas como apoio para esclarecer dúvidas, revisar trechos de código/lógica. 

Também foram realizadas consultas ao Stack Overflow para estudar conceitos, esclarecer dúvidas técnicas e consultar exemplos relacionados à programação.

As sugestões obtidas foram avaliadas de acordo com os requisitos do projeto, e o programa foi executado para verificar seu comportamento.

O objetivo foi utilizar essas ferramentas como apoio ao aprendizado, buscando compreender a implementação e os conceitos utilizados.

## 13. Vídeo de apresentação

**Link do vídeo:** https://drive.google.com/drive/folders/1-ZEggp_RZT6mXGjiQXcWlsleEsYJJprw?usp=sharing

O vídeo de apresentação demonstra o funcionamento do simulador, os resultados exibidos no terminal e os principais conceitos de JavaScript utilizados no desenvolvimento.

## 14. Possíveis melhorias futuras

Entre as melhorias que poderiam ser implementadas em versões futuras estão:

- Permitir o cadastro de candidatos e vagas pelo usuário.
- Integrar uma API real para carregar vagas.
- Armazenar os dados em um banco de dados.
- Criar uma interface gráfica para facilitar a utilização.
- Permitir a atualização das habilidades do candidato.
- Considerar experiência mínima exigida por cada vaga no cálculo de compatibilidade.
- Aprimorar o critério de desempate na seleção da melhor vaga.
- Criar testes automatizados para validar os cálculos e o comportamento das funções.

Essas melhorias não fazem parte da implementação atual, mas representam possibilidades de evolução do projeto.

## 15. Conclusão

O SkillMatch JS demonstra a aplicação de fundamentos de JavaScript em um problema prático de comparação de habilidades profissionais.

O projeto reúne manipulação de arrays, orientação a objetos, herança, callbacks, closures e programação assíncrona em um simulador executado no terminal.

Além de praticar a linguagem, a implementação permite identificar habilidades que precisam ser desenvolvidas e organizar prioridades de estudo com base nos requisitos das vagas analisadas.