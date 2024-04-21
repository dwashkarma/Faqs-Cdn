import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";

export default [
  {
    input: "src/Accordian.tsx",
    output: [
      {
        file: "dist/index.js",
        format: "umd",
        sourcemap: true,
        name: "accordian",
      },
      {
        file: "dist/index.esm.js",
        format: "esm",
      },
      {
        file: "dist/index.js",
        format: "cjs",
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
