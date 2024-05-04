import fs from "node:fs/promises";
import * as esbuild from "esbuild";

const modName = JSON.parse(await fs.readFile("./package.json", "utf-8")).name;

await fs.rm("./dist", { recursive: true, force: true });

await esbuild.build({
  entryPoints: ["./src/index.js"],
  bundle: true,
  minify: true,
  outfile: `./dist/${modName}/init.js`,
});
