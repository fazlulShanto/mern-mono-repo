import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
  entryPoints: ["src/bot.ts"],
  clean: false,
  outDir: "../../dist/bot",
  format: ["cjs"],
  ...options,
}));
