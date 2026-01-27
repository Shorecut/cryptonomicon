module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    // отключаем все ошибки prettier
    'prettier/prettier': 'off',

    // отключаем ошибки по v-for и неиспользуемым переменным
    'vue/no-unused-vars': 'off',
    'vue/require-v-for-key': 'off',
  },
}
