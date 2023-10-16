module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'standard-with-typescript',
        'plugin:vue/vue3-essential',
        'prettier',
        'plugin:prettier/recommended',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
        {
            files: ['*.ts', '*.tsx'],
            parser: '@typescript-eslint/parser',
            // extends: ['@vue/typescript/recommended', '@vue/prettier'],
            parserOptions: {
                project: './tsconfig.json',
            },
            rules: {
                '@typescript-eslint/consistent-type-definitions': ['off'],
                '@typescript-eslint/space-before-function-paren': 'off',
            },
        },
        {
            files: ['*.vue'],
            parser: 'vue-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser',
                ecmaVersion: 2021,
                extraFileExtensions: ['.vue'],
            },
            rules: {
                'no-console': 'off',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['vue'],
    rules: {},
};
