class Candidato {
  constructor(nome, areaInteresse, experienciaAnos, habilidades, emAprendizado) {
    this.nome = nome;
    this.areaInteresse = areaInteresse;
    this.experienciaAnos = experienciaAnos;
    this.habilidades = habilidades;
    this.emAprendizado = emAprendizado; // não entra no cálculo
  }

  possuiHabilidade(habilidade) {
    return this.habilidades.includes(habilidade);
  }
}

const candidato = new Candidato(
  "Gabriel Freitas",
  "Front-end",
  2, // provisório: ajuste para o tempo real
  ["HTML", "CSS", "Bootstrap", "JavaScript", "Git", "Lógica de programação", "Testes de software"],
  ["Angular", "TypeScript", "SQL"]
);