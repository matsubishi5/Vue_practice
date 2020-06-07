let data = {
  message: 'Hello',
};

let vm = new Vue({
  el: '#app1',

  data: data,

  methods: {},

  computed: {},
});

console.log(data === vm.$data);
