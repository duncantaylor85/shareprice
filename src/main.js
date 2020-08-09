import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Amplify, * as AmplifyModules from "aws-amplify";
import { AmplifyPlugin } from "aws-amplify-vue";
import awsconfig from "./aws-exports";
import axios from "axios";
import vuetify from "./plugins/vuetify";

Amplify.configure(awsconfig);

Vue.use(AmplifyPlugin, AmplifyModules);

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
