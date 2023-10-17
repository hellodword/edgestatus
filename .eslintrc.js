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
        },
        {
            files: ['*.vue'],
            parser: 'vue-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser',
                ecmaVersion: 2021,
                project: './tsconfig.json',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
    },
    plugins: ['vue'],
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/consistent-type-definitions': ['off'],
        '@typescript-eslint/space-before-function-paren': 'off',
        'vue/multi-word-component-names': 'off',
        'no-console': 'off',
    },
};
