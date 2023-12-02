import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import eventBus from "./plugins/event-bus";
import AOS from "aos";

// IMPORT APPLICATION STYLES
import "bootstrap/dist/css/bootstrap.css";
import "@/assets/scss/app.scss";
import VAnimateCss from "v-animate-css";
import "aos/dist/aos.css";

// MIXINS AND SERVICES
import { MixinAssets } from "@/mixins/mixin-assets";
import { $serviceColor as $color } from "@/services/service-color";

AOS.init({
  once: false,
  startEvent: "load",
});

let app = createApp(App);

app.use(eventBus);
app.mixin(MixinAssets);
app.mixin({
  computed: {
    $color: () => $color,
  },
});

app.use(store);
app.use(router);
app.use(VAnimateCss);
app.mount("#app");
