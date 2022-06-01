import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// IMPORT APPLICATION STYLES
import "bootstrap/dist/css/bootstrap.css";
import "../public/css/app.css";

// MIXINS AND SERVICES
import { MixinAssets } from "@/mixins/mixin-assets";
import { $serviceColor as $color } from "@/services/service-color";
import VAnimateCss from "v-animate-css";

let app = createApp(App);

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
