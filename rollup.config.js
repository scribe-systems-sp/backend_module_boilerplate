import ts from "@wessberg/rollup-plugin-ts";

export default {
    input: 'src/index.ts',
    external: [
        'express',
        'express-async-handler',
        'express-validator',
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