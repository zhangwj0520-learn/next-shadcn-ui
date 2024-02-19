'use strict'

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['@zhangwj0520/eslint-config-ts', 'next/core-web-vitals'],
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
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'consistent-return': 'off',
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
  },
}
