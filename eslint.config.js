import next from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import prettierConfig from "eslint-config-prettier";

const eslintConfig = [
  ...next,
  ...nextTypescript,
  prettierConfig,
  {
    ignores: [".next/**", "node_modules/**"]
  }
];

export default eslintConfig;
