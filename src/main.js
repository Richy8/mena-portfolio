import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import eventBus from "./plugins/event-bus";

// IMPORT APPLICATION STYLES
import "bootstrap/dist/css/bootstrap.css";
import "@/assets/scss/app.scss";

// MIXINS AND SERVICES
import { MixinAssets } from "@/mixins/mixin-assets";
import { $serviceColor as $color } from "@/services/service-color";
import VAnimateCss from "v-animate-css";

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
