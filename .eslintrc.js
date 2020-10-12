module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'error',
    "react/jsx-filename-extension":
    [1, { "extensions": [".js", ".jsx"] }],
    'import/prefer-default-export': 'off',
    'react/static-property-placement': 'off',
    'react/jsx-props-no-spreading': "off"
  },
};
