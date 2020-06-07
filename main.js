Vue.component('hello', {
  template: '<p>こんにちは</p>',
});

let vm = new Vue({
  el: '#app',

  data: {
    name: 'takumi',
  },

  methods: {},

  computed: {},
});
