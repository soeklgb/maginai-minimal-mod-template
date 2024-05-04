import fs from "node:fs/promises";
import * as esbuild from "esbuild";

const modName = JSON.parse(await fs.readFile("./package.json", "utf-8")).name;

await fs.rm(`./game/game/js/mod/mods/${modName}`, {
  recursive: true,
  force: true,
});

await esbuild.build({
  entryPoints: ["./src/index.js"],
  bundle: true,
  minify: true,
  sourcemap: true,
  outfile: `./game/game/js/mod/mods/${modName}/init.js`,
});
