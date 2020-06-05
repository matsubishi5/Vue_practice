Vue.component("paragraph", {
  data: function () {
    return {
      counter: 0,
    };
  },

  template: "<button @click='countUp'>{{ counter }}</button>",

  methods: {
    countUp: function () {
      this.counter++;
    },
  },
});

new Vue({
  el: "#app",

  data: {},

  mehods: {},
});
