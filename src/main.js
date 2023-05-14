import { createApp } from "vue";
import App from "./App.vue";
import components from "@/components/UI";
import router from "@/router/router";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/src/jquery.js";
import i18n from "@/i18n";
import moment from "moment";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import "popper.js";
import storage from "@/storage/main";
import { DDR } from "yoyoo-ddr";

const app = createApp(App);
app.use(VueSweetalert2);
app.component("DDR", DDR);

app.config.globalProperties.$moment = moment;
components.forEach((component) => {
  app.component(component.name, component);
});

app.use(router).use(i18n).use(storage).mount("#app");
