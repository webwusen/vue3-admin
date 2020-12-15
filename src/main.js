import { createApp } from "vue";
import Antd from "ant-design-vue";
import App from "./App.vue";
import router from "./router";
import "ant-design-vue/dist/antd.css";
import "./styles/normalize.css";
import "./styles/index.scss";
import "./permission";
console.log(Antd);
const app = createApp(App);
app.config.productionTip = false;

app.use(router);

app.use(Antd);

app.mount("#app");
