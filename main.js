new Vue({
  el: "#app",

  data: {
    isActive: true,
  },

  methods: {},

  computed: {
    classObject: function() {
      return {
        red: this.isActive,
        "bg-blue": !this.isActive,
      };
    },
  },
});
