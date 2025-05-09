import { $ } from "bun";

await $`rm -rf ./dist`;
console.log("Cleaned dist folder");

await $`rm -rf ./.astro`;
console.log("Cleaned .astro folder");

await $`rm -rf ./node_modules`;
console.log("Cleaned node modules");
