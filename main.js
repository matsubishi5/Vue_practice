new Vue({
  el: '#app',

  data: {
    fruits: [
      { name: 'りんご', id: 1 },
      { name: 'りんご', id: 2 },
      { name: 'りんご', id: 3 },
    ],
  },

  methods: {
    remove: function() {
      this.fruits.shift();
    },
  },

  computed: {},
});
