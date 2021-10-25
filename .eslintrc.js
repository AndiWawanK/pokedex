module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          assets: './src/assets',
          components: './src/components',
          constants: './src/constants',
          navigation: './src/navigation',
          scenes: './src/scenes',
          styles: './src/styles',
          utils: './src/utils',
        },
      },
    },
  },
};
