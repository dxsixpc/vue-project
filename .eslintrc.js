/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  root: true,
  extends: require.resolve('@dxsixpc/configs/eslint-config/vue'),
  parserOptions: {
    project: ['./tsconfig.app.json'],
  },
  rules: {
    '@typescript-eslint/promise-function-async': 'off',
  },
};
