module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'react-hooks/exhaustive-deps': 'off',
    curly: 'off',
    'prettier/prettier': ['off', { singleQuote: true }],
    'react/react-in-jsx-scope': 'off',
  },
};
