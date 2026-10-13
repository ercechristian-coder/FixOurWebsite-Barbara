import { rm } from "node:fs/promises";

const excludedFiles = ["dist/contact.php", "dist/.htaccess"];

await Promise.all(excludedFiles.map((file) => rm(file, { force: true })));

console.log(`Cloudflare static artifact prepared; excluded ${excludedFiles.length} server-only files.`);
