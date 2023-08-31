module.exports = {
  root: true,
  env: {
    browser: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 'latest',
    ecmaFeatures: { jsx: true }
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    'import/order': [ 'off' ],
    semi: [ 'error', 'always' ],
    quotes: [ 'error', 'single' ],
    'object-curly-spacing': [ 'error', 'always' ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'comma-dangle': [ 'error', 'always-multiline' ],
    curly: [ 'error', 'multi-line' ],
    camelcase: [ 'off' ],
    'no-use-before-define': [ 'off' ],
    'no-console': [ 'off' ],
    'no-new': [ 'off' ],
    'vue/multi-word-component-names': [ 'off' ],
    'keyword-spacing': [ 'error' ],
  },
};
