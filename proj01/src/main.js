import Vue from 'vue';
import { Time } from './time';

// require('style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css');
// require('bootstrap');

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

new Vue({
  el: '#app',
  data: {
      time: new Time("gremio", require('./assets/america_mg_60x60.png')),
      times: [
        new Time("gremio", require('./assets/america_mg_60x60.png')),
        new Time("gremio", require('./assets/america_mg_60x60.png')),
        new Time("gremio", require('./assets/america_mg_60x60.png')),
        new Time("gremio", require('./assets/america_mg_60x60.png')),
        new Time("gremio", require('./assets/america_mg_60x60.png')),
        new Time("gremio", require('./assets/america_mg_60x60.png')),
        new Time("gremio", require('./assets/america_mg_60x60.png')),
        new Time("gremio", require('./assets/america_mg_60x60.png')),
      ],
      timeff: {
        nome: 'Nome do time',
        escudo: 'escudo do time',
        mascote: 'mascote do time',
        hino: 'letra do hino do time,',
        estadio: 'estadio do time',
      },
    },
    
    linkTeste: "https://github.com/joaogoya/vuejs",
  }
)
