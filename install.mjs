import { execSync } from "child_process";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const pkg = require("./package.json");

const deps = Object.entries(pkg.peerDependencies)
  .map(([name, version]) => `${name}@${version}`)
  .join(" ");

const userAgent = process.env.npm_config_user_agent || "";
let installCmd = "";

if (userAgent.includes("yarn")) {
  installCmd = `yarn add -D ${deps}`;
} else if (userAgent.includes("pnpm")) {
  installCmd = `pnpm add -D ${deps}`;
} else {
  installCmd = `npm install -D ${deps}`;
}

console.log(`\n🧩 Installing peerDependencies via: ${installCmd}\n`);
execSync(installCmd, { stdio: "inherit" });
