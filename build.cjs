const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const { loadMacros, expand } = require("./preprocess.cjs");

const SRC = "src";
const DIST = "dist";
const TMP = ".tmp";
const TEMPLATE = fs.existsSync("template.html") ? "--template=template.html" : "";
const WATCH_MODE = process.argv.includes("--watch");

const macros = loadMacros("macros.json");
console.log(`📦 Macro caricate: ${Object.keys(macros).join(", ") || "nessuna"}`);

for (const dir of [DIST, TMP]) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
}

function buildFile(filePath) {
  const filename = path.basename(filePath, ".md");
  const tmpPath = path.join(TMP, filename + ".md");
  const outPath = path.join(DIST, filename + ".html");

  try {
    // Step 1: preprocessa le macro
    const source = fs.readFileSync(filePath, "utf-8");
    const expanded = expand(source, macros);
    fs.writeFileSync(tmpPath, expanded, "utf-8");
    console.log(`✓ ${filePath} → ${tmpPath}`);

    const css = fs.existsSync(`dist/${filename}.css`)? `--css ${filename}.css` : "";
    // Step 2: pandoc sul file espanso
    pandocCommand = `pandoc "${tmpPath}" -o "${outPath}" ${TEMPLATE} ${css} --standalone`
    console.log("Executing: " + pandocCommand);
    execSync(pandocCommand);
    console.log(`✓ ${tmpPath} → ${outPath}`);
  } catch (err) {
    console.error(`✗ Errore su ${filePath}:`, err.message);
  }
}

function buildAll() {
  const files = fs.readdirSync(SRC).filter((f) => f.endsWith(".md"));
  if (files.length === 0) return console.log("Nessun file .md trovato in src/");
  files.forEach((f) => buildFile(path.join(SRC, f)));
}

buildAll();

if (WATCH_MODE) {
  const chokidar = require("chokidar");
  console.log("\n👁  Watch attivo — Ctrl+C per uscire\n");

chokidar.watch(`${SRC}/**/*.md`, {
  usePolling: true,
  interval: 300,
}).on("change", (filePath) => {
  console.log(`\nModificato: ${filePath}`);
  buildFile(filePath);
});

chokidar.watch("macros.json", {
  usePolling: true,
  interval: 300,
}).on("change", () => {
  console.log("\nMacro aggiornate, rebuild completo...");
  Object.assign(macros, loadMacros("macros.json"));
  buildAll();
});

}