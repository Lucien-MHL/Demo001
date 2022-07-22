module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    semi: ['off'],
    'import/extensions': ['off'],
    'react/destructuring-assignment': ['off'],
    'react/prop-types': ['off'],
    radix: ['off'],
    'max-len': ['off'],
    'import/prefer-default-export': ['off'],
    'linebreak-style': ['error', 'windows'],
    'jsx-quotes': ['error', 'prefer-single'],
    'no-param-reassign': ['error', { props: false }],
    'comma-dangle': ['error', 'never']
  }
}
