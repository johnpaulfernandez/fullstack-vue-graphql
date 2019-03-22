import Vue from "vue";
import Vuetify from "vuetify/lib";
import "vuetify/src/stylus/app.styl";
import colors from "vuetify/es5/util/colors";

{
  primary: "colors.teal.base";
  secondary: "colors.blue-grey.base";
  accent: "colors.light-green.base";
  error: "colors.red.base";
  warning: "colors.amber.base";
  info: "colors.blue.base";
  success: "colors.green.base";
}

Vue.use(Vuetify, {
  iconfont: "md"
});
