module.exports = {
  extends: [
    'eslint:recommended',
    'xo-space',
    'plugin:node/recommended',
    'plugin:unicorn/recommended',
  ],
  plugins: [
    'node',
    'unicorn',
  ],
  rules: {
    'capitalized-comments': 0,
    'comma-dangle': ['error', 'always-multiline'],
    'node/shebang': 0,
    curly: 0,
    quotes: ['error', 'single', {avoidEscape: true}],
    semi: ['error', 'never'],
  },
  globals: {
    describe: true,
    it: true,
  },
}
