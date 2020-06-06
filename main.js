new Vue({
  el: "#app",

  data: {
    isActive: true,
    color: "red",
    bg: "bg-blue",
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
