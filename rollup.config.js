import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";

export default [
  {
    input: "src/Accordian.ts",
    output: [
      {
        file: "dist/index.umd.js",
        format: "umd",
        sourcemap: true,
        name: "accordian",
      },
      {
        file: "dist/index.esm.js",
        format: "esm",
        sourcemap: true,
      },
      {
        file: "dist/index.js",
        format: "cjs",
        sourcemap: true,
      },
    ],
    plugins: [
      typescript(),
      postcss({
        plugins: [autoprefixer()],
        extract: true,
      }),
    ],

    external: ["react", "react-dom"],
  },
];
