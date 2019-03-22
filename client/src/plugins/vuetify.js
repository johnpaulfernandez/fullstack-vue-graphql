import Vue from "vue";
import Vuetify from "vuetify/lib";
import "vuetify/src/stylus/app.styl";
import colors from "vuetify/es5/util/colors";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify, {
  theme: {
    primary: colors.teal.base,
    secondary: "#607d8b", //colors.blue - grey.base,
    accent: "#8bc34a", //colors.light - green.base,
    error: colors.red.base,
    warning: colors.amber.base,
    info: colors.blue.base,
    success: colors.green.base
  },
  iconfont: "md"
});
