import Vue from 'vue';
import { Time } from './time';
new Vue({
  el: '#app',
  data: {
      time: new Time("gremio", "img_src")
    },
    linkTeste: "https://github.com/joaogoya/vuejs",
  }
)
