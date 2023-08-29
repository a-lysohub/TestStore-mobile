module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@app/components': './app/components',
          '@app/screens': './app/screens',
          '@app/navigation': './app/navigation',
          '@app/theme': './app/theme',
          '@app/services': './app/services',
          '@app/assets/icons': './app/assets/icons',
        },
      },
    ],
  ],
};
