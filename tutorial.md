## Coding

### git

-   [Git Commit Guidelines](https://github.com/angular/angular.js/blob/47bf11ee94664367a26ed8c91b9b586d3dd420f5/DEVELOPERS.md#-git-commit-guidelines)

    -   **feat**: A new feature
    -   **fix**: A bug fix
    -   **docs**: Documentation only changes
    -   **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing
        semi-colons, etc)
    -   **refactor**: A code change that neither fixes a bug nor adds a feature
    -   **perf**: A code change that improves performance
    -   **test**: Adding missing or correcting existing tests
    -   **chore**: Changes to the build process or auxiliary tools and libraries such as documentation
        generation

-   lint commit messages with [commitlint](https://github.com/conventional-changelog/commitlint)

-   git hook with [husky](https://typicode.github.io/husky/)

-   [lint-staged](https://github.com/lint-staged/lint-staged)

### spell checker

-   [CSpell](https://github.com/streetsidesoftware/cspell)

### formatter

-   [Prettier](https://prettier.io/docs/en/)
    > the `prettier.configPath` of [`esbenp.prettier-vscode`](https://github.com/prettier/prettier-vscode) does not accept `${workspaceFolder}`

### linter

-   [eslint](https://eslint.org/docs/)

    -   [typescript-eslint](https://typescript-eslint.io/)
    -   [eslint-plugin-vue](https://eslint.vuejs.org/)
        > `parserOptions.extraFileExtensions: ['.vue']` will not working in the `overrides`

-   [stylelint](https://github.com/stylelint/stylelint)

### Frontend

-   Vue
-   Vite
-   Vuetify

### Cloudflare

-   [hono](https://github.com/honojs/)

    > [Cloudflare Pages && Functions && react](https://github.com/honojs/examples/tree/cc93499076475b7138b499343b38ad6f34e52b00/pages-stack)

-   `wrangler pages` [does not](https://github.com/cloudflare/workers-sdk/issues/3757) use bindings in the `wrangler.toml`
