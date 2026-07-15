import globals from 'globals';

/** @type {import('xo').FlatXoConfig} */
const config = [
  {
    space: 2,
    ignores: ['docker/**'],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    rules: {
      eqeqeq: 'off',
      'no-eq-null': 'off',
      'no-alert': 'warn',
      'xo/filename-case': 'off'
    }
  }
];

export default config;
