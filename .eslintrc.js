module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': 'off',
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'no-restricted-globals': 'off',
    'no-underscore-dangle': 'off',
    'consistent-return': 'off',
    'no-useless-constructor': 'off',
    'no-empty-function': 'off',
    'class-methods-use-this': 'off',
    'import/first': 'off',
    'vue/html-indent': ['error', 2]
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
