import ts from "@wessberg/rollup-plugin-ts";

export default {
    input: 'src/index.ts',
    external: [
        'express',
        'sequelize',
        'axios'
    ],
    plugins: [
        ts({})
    ],
    output: {
        compact: true,
        file: 'dist/module.min.js',
        format: 'cjs',
    },
}