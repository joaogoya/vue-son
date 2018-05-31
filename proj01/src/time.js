export class Time {
  constructor(nome, escudo) {
    this.nome = nome;
    this.escudo = escudo;
    this.pontos = 0;
    this.gm = 0; // gols marcados
    this.gs = 0; // gols sofrifdos
  }

  updateInfo(pontos, golsMarcados, golsSofridos) {
    this.pontos += pontos;
    this.gm += golsMarcados;
    this.gs += golsSofridos;
  }

  fimJogo(timeFora, golsTimeCasa, golsTimeFora) {
    if (golsTimeCasa == golsTimeFora) {
      this.updateInfo(1, golsTimeCasa, golsTimeFora);
      timeFora.updateInfo(1, golsTimeFora, golsTimeCasa);
    } else {
      if (golsTimeCasa > golsTimeFora) {
        this.updateInfo(3, golsTimeCasa, golsTimeFora);
        timeFora.updateInfo(0, golsTimeFora, golsTimeCasa);
      } else {
        this.updateInfo(0, golsTimeCasa, golsTimeFora);
        timeFora.updateInfo(3, golsTimeFora, golsTimeCasa);
      }
    }
  }

}
