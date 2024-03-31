/* eslint-disable prettier/prettier */
if (!/pnpm/.test(process.env.npm_execpath || "")) {
  console.warn(
    `\u001b[33m Warning ====> This repository must using pnpm as the package manager  for scripts to work properly. \n ` +
      `your need use pnpm ! pnpm version ==> 8.15.6 && node version ==> 18.16.1\u001b[39m`,
  );
  process.exit(1);
}
