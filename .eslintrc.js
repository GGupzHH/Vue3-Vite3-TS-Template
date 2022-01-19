module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true
  },
  parser: 'vue-eslint-parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended'
  ],
  plugins: [
    '@typescript-eslint'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 1,
    'no-undef': 1,
    'no-var': 'error',
    'no-trailing-spaces': 2,
    'comma-style': ['error', 'last'],
    'comma-dangle': ['error', 'never'],
    'no-irregular-whitespace': 2,
    'no-multi-spaces': 1,
    'no-multiple-empty-lines': [
      2,
      {
        max: 1
      }
    ],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    camelcase: ['error', { properties: 'never' }],
    indent: ['error', 2, { SwitchCase: 1 }],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: false
        },
        singleline: {
          delimiter: 'semi',
          requireLast: true
        }
      }
    ],
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/semi': ['error', 'never'],
    'vue/no-v-html': 'off',
    'vue/multi-word-component-names': 0,
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-closing-bracket-spacing': 'error',
    'vue/no-mutating-props': 0,
    'vue/script-setup-uses-vars': 'error',
    'vue/html-self-closing': ['error', {
      html: {
        void: 'never',
        normal: 'never',
        component: 'always'
      },
      svg: 'always',
      math: 'always'
    }]
  }
}