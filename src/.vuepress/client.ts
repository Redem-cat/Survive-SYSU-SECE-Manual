import { defineClientConfig } from "vuepress";
import { SpeedInsights } from "@vercel/speed-insights/vue";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("SpeedInsights", SpeedInsights);
  },
  setup: () => {},
  rootComponents: [SpeedInsights],
});
