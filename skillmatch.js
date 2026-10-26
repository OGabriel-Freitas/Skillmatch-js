
class Candidato {
  constructor(nome, areaInteresse, experienciaAnos, habilidades, emAprendizado) {
    this.nome = nome;
    this.areaInteresse = areaInteresse;
    this.experienciaAnos = experienciaAnos;
    this.habilidades = habilidades;
    this.emAprendizado = emAprendizado;
  }

  possuiHabilidade(habilidade) {
    return this.habilidades.includes(habilidade);
  }
}

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
    "Testes de software"
  ],
  ["Angular", "TypeScript", "SQL"]
);

class Vaga {
  constructor(empresa, cargo, requisitos) {
    this.empresa = empresa;
    this.cargo = cargo;
    this.requisitos = requisitos;
  }

  calcularCompatibilidade(candidato) {
    const atendidos = this.requisitos.filter((requisito) =>
      candidato.possuiHabilidade(requisito)
    );

    return Math.round(
      (atendidos.length / this.requisitos.length) * 100
    );
  }

  listarFaltantes(candidato) {
    return this.requisitos.filter(
      (requisito) => !candidato.possuiHabilidade(requisito)
    );
  }

  resumo() {
    return `${this.cargo} - ${this.empresa}`;
  }
}

class VagaRemota extends Vaga {
  constructor(empresa, cargo, requisitos, salario) {
    super(empresa, cargo, requisitos);
    this.salario = salario;
  }

  resumo() {
    return `${super.resumo()} (Remota, R$ ${this.salario})`;
  }
}

const vagas = [
  new Vaga("Novo Horizonte", "Front-End Júnior", [
    "HTML",
    "CSS",
    "JavaScript",
    "Git",
    "React"
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
      "Acessibilidade"
    ],
    3000
  ),

  new Vaga("Inova Brasil", "Desenvolvedor(a) Front-End Júnior", [
    "JavaScript",
    "React",
    "TypeScript",
    "Git",
    "Componentes reutilizáveis",
    "Testes automatizados"
  ]),

  new Vaga("New Nexus", "Desenvolvedor Front-End Júnior", [
    "HTML",
    "CSS",
    "JavaScript",
    "Git",
    "Bootstrap"
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
      "TypeScript"
    ],
    4000
  ),

  new Vaga("Astro Soluções", "Desenvolvedor Front-End Júnior", [
    "JavaScript",
    "React",
    "TypeScript",
    "Testes automatizados",
    "Consumo de APIs",
    "Node.js"
  ])
];

const classificarCompatibilidade = (percentual) => {
  if (percentual >= 80) {
    return "Alta compatibilidade";
  } else if (percentual >= 50) {
    return "Média compatibilidade";
  } else {
    return "Baixa compatibilidade";
  }
};

const analisarVaga = (vaga, candidato, callback) => {
  const percentual = vaga.calcularCompatibilidade(candidato);
  const classificacao = classificarCompatibilidade(percentual);

  callback({
    vaga: vaga.resumo(),
    percentual: percentual,
    classificacao: classificacao
  });
};

const criarContadorAnalises = () => {
  let total = 0;

  return () => {
    total++;
    return total;
  };
};

const encontrarMelhorVaga = (candidato, vagas) => {
  return vagas.reduce((melhor, atual) => {
    const compatibilidadeMelhor =
      melhor.calcularCompatibilidade(candidato);

    const compatibilidadeAtual =
      atual.calcularCompatibilidade(candidato);

    if (compatibilidadeAtual > compatibilidadeMelhor) {
      return atual;
    }

    return melhor;
  });
};

const montarFaltantes = (candidato, vagas) => {
  const faltantes = {};

  for (let i = 0; i < vagas.length; i++) {
    const vaga = vagas[i];
    const percentual = vaga.calcularCompatibilidade(candidato);
    const habilidadesFaltantes = vaga.listarFaltantes(candidato);

    for (let j = 0; j < habilidadesFaltantes.length; j++) {
      const habilidade = habilidadesFaltantes[j];

      if (!faltantes[habilidade]) {
        faltantes[habilidade] = {
          quantidade: 0,
          maiorCompatibilidade: 0
        };
      }

      faltantes[habilidade].quantidade++;

      if (percentual > faltantes[habilidade].maiorCompatibilidade) {
        faltantes[habilidade].maiorCompatibilidade = percentual;
      }
    }
  }

  return faltantes;
};

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

      if (
        habilidadeAtual.quantidade === habilidadeMelhor.quantidade &&
        habilidadeAtual.maiorCompatibilidade >
          habilidadeMelhor.maiorCompatibilidade
      ) {
        return atual;
      }

      return melhor;
    });

    ranking.push({
      habilidade: prioritaria,
      quantidade: faltantes[prioritaria].quantidade
    });

    habilidadesRestantes = habilidadesRestantes.filter(
      (habilidade) => habilidade !== prioritaria
    );
  }

  return ranking;
};

const gerarRelatorio = (candidato, vagas) => {
  console.log("===== SKILLMATCH JS: RELATÓRIO =====");
  console.log(`Candidato: ${candidato.nome}`);
  console.log(`Área de interesse: ${candidato.areaInteresse}`);
  console.log(`Experiência: ${candidato.experienciaAnos} ano(s)`);
  console.log(`Habilidades: ${candidato.habilidades.join(", ")}`);
  console.log(
    `Em aprendizado: ${candidato.emAprendizado.join(", ")}`
  );

  console.log("\n===== ANÁLISE DAS VAGAS =====");

  const contarAnalises = criarContadorAnalises();

  for (let i = 0; i < vagas.length; i++) {
    const vaga = vagas[i];
    const faltantes = vaga.listarFaltantes(candidato);

    analisarVaga(vaga, candidato, (resultado) => {
      const numeroAnalise = contarAnalises();

      console.log(`\n${numeroAnalise}. ${resultado.vaga}`);
      console.log(
        `Compatibilidade: ${resultado.percentual}% - ${resultado.classificacao}`
      );
    });

    if (faltantes.length > 0) {
      console.log(`Habilidades faltantes: ${faltantes.join(", ")}`);
    } else {
      console.log("Habilidades faltantes: nenhuma");
    }
  }

  const melhorVaga = encontrarMelhorVaga(candidato, vagas);
  const percentualMelhorVaga =
    melhorVaga.calcularCompatibilidade(candidato);

  console.log("\n===== MELHOR VAGA =====");
  console.log(melhorVaga.resumo());
  console.log(
    `Compatibilidade: ${percentualMelhorVaga}% - ${classificarCompatibilidade(percentualMelhorVaga)}`
  );

  const recomendacoes = gerarRecomendacaoEstudos(candidato, vagas);

  console.log("\n===== PRIORIDADE DE ESTUDO =====");

  for (let i = 0; i < recomendacoes.length; i++) {
    console.log(
      `${i + 1}. ${recomendacoes[i].habilidade} — falta em ${recomendacoes[i].quantidade} vaga(s)`
    );
  }

  console.log("\n===== FIM DO RELATÓRIO =====");
};

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

const iniciarSistema = async () => {
  try {
    console.log("Carregando vagas...");

    const vagasCarregadas = await carregarVagas();

    gerarRelatorio(candidato, vagasCarregadas);
  } catch (erro) {
    console.error("Erro ao carregar as vagas:", erro.message);
  }
};

iniciarSistema();