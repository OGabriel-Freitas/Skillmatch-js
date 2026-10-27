
class Candidato {
  // Guarda os dados e as habilidades do candidato.
  constructor(nome, areaInteresse, experienciaAnos, habilidades, emAprendizado) {
    this.nome = nome;
    this.areaInteresse = areaInteresse;
    this.experienciaAnos = experienciaAnos;
    this.habilidades = habilidades;
    this.emAprendizado = emAprendizado;
  }

  // Verifica se o candidato possui determinada habilidade.
  possuiHabilidade(habilidade) {
    return this.habilidades.includes(habilidade);
  }
}

// Cria o perfil do candidato que será comparado com as vagas.
const candidato = new Candidato(
  "Gabriel Freitas",
  "Front-end",
  2,
  [
    "HTML",
    "CSS",
    "Bootstrap",
    "JavaScript",
    "Git",
    "Lógica de programação",
    "Testes de software",
  ],
  ["Angular", "TypeScript", "SQL"]
);

class Vaga {
  // Guarda os dados e os requisitos de cada vaga.
  constructor(empresa, cargo, requisitos) {
    this.empresa = empresa;
    this.cargo = cargo;
    this.requisitos = requisitos;
  }

  // Calcula a porcentagem de requisitos que o candidato atende.
  calcularCompatibilidade(candidato) {
    const atendidos = this.requisitos.filter((requisito) =>
      candidato.possuiHabilidade(requisito)
    );

    if (this.requisitos.length === 0) {
      return 0;
    }

    return Math.round(
      (atendidos.length / this.requisitos.length) * 100
    );
  }

  // Retorna as habilidades exigidas pela vaga que o candidato não possui.
  listarFaltantes(candidato) {
    return this.requisitos.filter(
      (requisito) => !candidato.possuiHabilidade(requisito)
    );
  }

  // Monta um resumo com o cargo e a empresa.
  resumo() {
    return `${this.cargo} - ${this.empresa}`;
  }
}

// Herda as características de Vaga e acrescenta o salário.
class VagaRemota extends Vaga {
  constructor(empresa, cargo, requisitos, salario) {
    super(empresa, cargo, requisitos);
    this.salario = salario;
  }

  // Personaliza o resumo para incluir o tipo de trabalho e o salário.
  resumo() {
    return `${super.resumo()} (Remota, R$ ${this.salario})`;
  }
}

// Cadastra as vagas fictícias disponíveis para análise.
const vagas = [
  new Vaga("Novo Horizonte", "Front-End Júnior", [
    "HTML",
    "CSS",
    "JavaScript",
    "Git",
    "React",
  ]),

  new VagaRemota(
    "New Era",
    "Desenvolvedor(a) Web Júnior",
    [
      "HTML",
      "CSS",
      "JavaScript",
      "Lógica de programação",
      "Consumo de APIs",
      "Acessibilidade",
    ],
    3000
  ),

  new Vaga("Inova Brasil", "Desenvolvedor(a) Front-End Júnior", [
    "JavaScript",
    "React",
    "TypeScript",
    "Git",
    "Componentes reutilizáveis",
    "Testes automatizados",
  ]),

  new Vaga("New Nexus", "Desenvolvedor Front-End Júnior", [
    "HTML",
    "CSS",
    "JavaScript",
    "Git",
    "Bootstrap",
  ]),

  new VagaRemota(
    "Tech Plus",
    "Desenvolvedor Front-End Júnior (React)",
    [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Git",
      "TypeScript",
    ],
    4000
  ),

  new Vaga("Astro Soluções", "Desenvolvedor Front-End Júnior", [
    "JavaScript",
    "React",
    "TypeScript",
    "Testes automatizados",
    "Consumo de APIs",
    "Node.js",
  ]),
];

// Classifica a compatibilidade de acordo com a porcentagem obtida.
const classificarCompatibilidade = (percentual) => {
  if (percentual >= 80) {
    return "Alta compatibilidade";
  } else if (percentual >= 50) {
    return "Média compatibilidade";
  } else {
    return "Baixa compatibilidade";
  }
};

// Analisa uma vaga e entrega o resultado por meio de um callback.
const analisarVaga = (vaga, candidato, callback) => {
  const percentual = vaga.calcularCompatibilidade(candidato);
  const classificacao = classificarCompatibilidade(percentual);

  callback({
    vaga: vaga.resumo(),
    percentual,
    classificacao,
  });
};

// Cria um contador que mantém a quantidade de análises realizadas.
const criarContadorAnalises = () => {
  let total = 0;

  return () => {
    total++;
    return total;
  };
};

// Encontra a vaga com a maior porcentagem de compatibilidade.
const encontrarMelhorVaga = (candidato, vagas) => {
  return vagas.reduce((melhor, atual) => {
    if (melhor === null) {
      return atual;
    }

    const compatibilidadeMelhor =
      melhor.calcularCompatibilidade(candidato);

    const compatibilidadeAtual =
      atual.calcularCompatibilidade(candidato);

    if (compatibilidadeAtual > compatibilidadeMelhor) {
      return atual;
    }

    return melhor;
  }, null);
};

// Conta quantas vagas exigem cada habilidade que o candidato ainda não possui.
const montarFaltantes = (candidato, vagas) => {
  const faltantes = {};

  for (let i = 0; i < vagas.length; i++) {
    const vaga = vagas[i];
    const habilidadesFaltantes = vaga.listarFaltantes(candidato);

    for (let j = 0; j < habilidadesFaltantes.length; j++) {
      const habilidade = habilidadesFaltantes[j];

      if (!faltantes[habilidade]) {
        faltantes[habilidade] = {
          quantidade: 0,
        };
      }

      faltantes[habilidade].quantidade++;
    }
  }

  return faltantes;
};

// Organiza as habilidades faltantes por prioridade de estudo.
const gerarRecomendacaoEstudos = (candidato, vagas) => {
  const faltantes = montarFaltantes(candidato, vagas);
  let habilidadesRestantes = Object.keys(faltantes);
  const ranking = [];

  while (habilidadesRestantes.length > 0) {
    const prioritaria = habilidadesRestantes.reduce((melhor, atual) => {
      const habilidadeAtual = faltantes[atual];
      const habilidadeMelhor = faltantes[melhor];

      if (habilidadeAtual.quantidade > habilidadeMelhor.quantidade) {
        return atual;
      }

      return melhor;
    });

    ranking.push({
      habilidade: prioritaria,
      quantidade: faltantes[prioritaria].quantidade,
    });

    habilidadesRestantes = habilidadesRestantes.filter(
      (habilidade) => habilidade !== prioritaria
    );
  }

  return ranking;
};

// Exibe o perfil do candidato, as análises, a melhor vaga e as recomendações.
const gerarRelatorio = (candidato, vagas) => {
  console.log("===== SKILLMATCH JS: RELATÓRIO =====");
  console.log(`Candidato: ${candidato.nome}`);
  console.log(`Área de interesse: ${candidato.areaInteresse}`);
  console.log(`Experiência: ${candidato.experienciaAnos} ano(s)`);
  console.log(`Habilidades: ${candidato.habilidades.join(", ")}`);
  console.log(`Em aprendizado: ${candidato.emAprendizado.join(", ")}`);

  // Lista as empresas das vagas cadastradas.
  const empresas = vagas.map((vaga) => vaga.empresa);

  console.log(
    `\nVagas analisadas (${empresas.length}): ${empresas.join(", ")}`
  );

  console.log("\n===== ANÁLISE DAS VAGAS =====");

  const contarAnalises = criarContadorAnalises();

  // Analisa cada vaga e imprime todos os seus resultados juntos.
  for (let i = 0; i < vagas.length; i++) {
    const vaga = vagas[i];
    const faltantes = vaga.listarFaltantes(candidato);

    analisarVaga(vaga, candidato, (resultado) => {
      const numeroAnalise = contarAnalises();

      console.log(`\n${numeroAnalise}. ${resultado.vaga}`);
      console.log(
        `Compatibilidade: ${resultado.percentual}% - ${resultado.classificacao}`
      );

      if (faltantes.length > 0) {
        console.log(`Habilidades faltantes: ${faltantes.join(", ")}`);
      } else {
        console.log("Habilidades faltantes: nenhuma");
      }
    });
  }

  // Identifica e exibe a vaga mais compatível com o candidato.
  const melhorVaga = encontrarMelhorVaga(candidato, vagas);

  console.log("\n===== MELHOR VAGA =====");

  if (melhorVaga === null) {
    console.log("Não há vagas disponíveis para análise.");
  } else {
    const percentualMelhorVaga =
      melhorVaga.calcularCompatibilidade(candidato);

    console.log(melhorVaga.resumo());
    console.log(
      `Compatibilidade: ${percentualMelhorVaga}% - ${classificarCompatibilidade(percentualMelhorVaga)}`
    );
  }

  // Exibe as habilidades que devem ser priorizadas nos estudos.
  const recomendacoes = gerarRecomendacaoEstudos(candidato, vagas);

  console.log("\n===== PRIORIDADE DE ESTUDO =====");

  if (recomendacoes.length === 0) {
    console.log("Nenhuma habilidade pendente identificada.");
  } else {
    for (let i = 0; i < recomendacoes.length; i++) {
      console.log(
        `${i + 1}. ${recomendacoes[i].habilidade} — falta em ${recomendacoes[i].quantidade} vaga(s)`
      );
    }
  }

  console.log("\n===== FIM DO RELATÓRIO =====");
};

// Simula o carregamento das vagas de um servidor usando uma Promise.
const carregarVagas = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (vagas.length > 0) {
        resolve(vagas);
      } else {
        reject(new Error("Nenhuma vaga encontrada."));
      }
    }, 1000);
  });
};

// Inicia o sistema, aguarda o carregamento e trata possíveis erros.
const iniciarSistema = async () => {
  try {
    console.log("Carregando vagas...");

    const vagasCarregadas = await carregarVagas();

    gerarRelatorio(candidato, vagasCarregadas);
  } catch (erro) {
    console.error("Erro ao carregar as vagas:", erro.message);
  }
};

// Executa o sistema.
iniciarSistema();
