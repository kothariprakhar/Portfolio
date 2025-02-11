import eslint from '@eslint/js';
import nextJs from '@next/eslint-plugin-next';

export default [
  {
    ignores: ['node_modules/**', '.next/**', 'out/**'],
  },
  eslint.configs.recommended,
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    plugins: {
      '@next/next': nextJs,
    },
    rules: {
      'react/no-unescaped-entities': 'off',
      '@next/next/no-img-element': 'off',
      'react/display-name': 'off',
    },
  },
];