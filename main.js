let vm = new Vue({
  data: {
    message: 'Hello',
    name: 'takumi',
  },

  methods: {},

  computed: {},

  render: function(createElement) {
    return createElement('h1', 'Hello' + this.name);
  },
}).$mount('#app');
