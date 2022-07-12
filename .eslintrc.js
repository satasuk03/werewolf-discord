module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-typescript',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:storybook/recommended',
    'plugin:@next/next/recommended',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
    files: ['*.ts', '*.tsx'],
  },
  ignorePatterns: ['_error.js'],
  rules: {
    'import/order': ['warn'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/prefer-default-export': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/prop-types': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx'],
      },
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 'off',
    'import/no-absolute-path': 0,
    'global-require': 0,
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        controlComponents: ['Select'],
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './',
      },
    },
  },
  overrides: [
    {
      files: ['./**/*.test.ts', './**/*.test.tsx'],
      globals: {
        jest: true,
      },
    },
  ],
};
