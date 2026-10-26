
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
    "HTML", "CSS", "JavaScript", "Git", "React"
  ]),
  new VagaRemota("New Era", "Desenvolvedor(a) Web Júnior", [
    "HTML", "CSS", "JavaScript",
    "Lógica de programação", "Consumo de APIs", "Acessibilidade"
  ], 3000),
  new Vaga("Inova Brasil", "Desenvolvedor(a) Front-End Júnior", [
    "JavaScript", "React", "TypeScript",
    "Git", "Componentes reutilizáveis", "Testes automatizados"
  ]),
  new Vaga("New Nexus", "Desenvolvedor Front-End Júnior", [
    "HTML", "CSS", "JavaScript", "Git", "Bootstrap"
  ]),
  new VagaRemota("Tech Plus", "Desenvolvedor Front-End Júnior (React)", [
    "HTML", "CSS", "JavaScript", "React", "Git", "TypeScript"
  ], 4000),
  new Vaga("Astro Soluções", "Desenvolvedor Front-End Júnior", [
    "JavaScript", "React", "TypeScript",
    "Testes automatizados", "Consumo de APIs", "Node.js"
  ])
];
