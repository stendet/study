import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import svgicon from "vue-svgicon";

library.add(fas);
library.add(faCoffee);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(svgicon, { tagName: "svgicon" });

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
