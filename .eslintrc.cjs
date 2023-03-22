module.exports = {
  root: true,
  env: {
    browser: true,
  },
  parserOptions: {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  extends: [
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    'import/order': [ 'off' ],
    semi: [ 'error', 'always' ],
    'object-curly-spacing': [ 'error', 'always' ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'comma-dangle': [ 'error', 'always-multiline' ],
    curly: [ 'error', 'multi-line' ],
    camelcase: [ 'off' ],
    'no-use-before-define': [ 'off' ],
    'no-console': [ 'off' ],
    'no-new': [ 'off' ],
  },
};
