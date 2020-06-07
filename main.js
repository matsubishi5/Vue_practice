let data = {
  message: 'Hello',
};

let vm = new Vue({
  // el: '#app',

  data: data,

  methods: {},

  computed: {
    myData: function() {
      return this.$data;
    },
  },
});
vm.$mount('#app');
