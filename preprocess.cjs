const fs = require("fs");

function loadMacros(macroPath = "macros.json") {
  if (!fs.existsSync(macroPath)) return {};
  return JSON.parse(fs.readFileSync(macroPath, "utf-8"));
}

function expand(content, macros) {
  return content.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    if (key in macros) return macros[key];
    console.warn(`  ⚠ Macro non definita: {{${key}}}`);
    return match; // lascia il placeholder se non trovato
  });
}

module.exports = { loadMacros, expand };