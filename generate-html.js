import fs from "node:fs";
import path from "node:path";

const dir = path.join(process.cwd(), "dist/client/assets");
if (!fs.existsSync(dir)) {
  console.error("Assets directory not found:", dir);
  process.exit(1);
}

const files = fs.readdirSync(dir);
const jsFile = files.find(f => f.startsWith("index-") && f.endsWith(".js")) || files.find(f => f.endsWith(".js"));
const cssFile = files.find(f => f.startsWith("styles-") && f.endsWith(".css")) || files.find(f => f.endsWith(".css"));

const cssLink = cssFile ? `<link rel="stylesheet" href="/assets/${cssFile}">` : "";
const jsScript = jsFile ? `<script type="module" src="/assets/${jsFile}"></script>` : "";

const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Little Ladle Hotpot</title>
    ${cssLink}
  </head>
  <body>
    <div id="root"></div>
    ${jsScript}
  </body>
</html>`;

fs.writeFileSync(path.join(process.cwd(), "dist/client/index.html"), html, "utf8");
console.log("✅ Successfully injected bundles into dist/client/index.html");
