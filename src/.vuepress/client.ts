// .vuepress/client.ts
import { defineClientConfig } from "vuepress/client";
import { SpeedInsights } from "@vercel/speed-insights/vue";

export default defineClientConfig({
  enhance({ app }) {
    app.component("SpeedInsights", SpeedInsights);
  },
});