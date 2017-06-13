var eslint = {
  extends: [
    'airbnb',
  ],
  plugins: [
    'react',
    'mocha',
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
  },
  env: {
    browser: true,
    amd: true,
    es6: true,
    node: true,
    mocha: true
  },
  rules: {
    'complexity': ['error', 8 ],
    'import/no-unresolved': [2, { ignore:
      ['config']
    }],
    // Disabling the following rules until a solution can be sorted, will be to do with resolvers
    'import/no-extraneous-dependencies': 0,
    'import/extensions': 0,
    // Enabling rules from "eslint-plugin-import", which are disabled by default
    'import/default': 2,
    'import/no-commonjs': 2,
    'import/no-duplicates': 2,
    'mocha/no-exclusive-tests': 'error',
    'mocha/no-skipped-tests': 'error',
    'mocha/no-pending-tests': 'error',
    'mocha/handle-done-callback': 'error',
    'mocha/no-synchronous-tests': 'error',
    'mocha/no-global-tests': 'error',
    'mocha/no-return-and-callback': 'error',
    'mocha/valid-test-description': 'error',
    'mocha/valid-suite-description': 'error',
    'mocha/no-sibling-hooks': 'error',
    'mocha/no-mocha-arrows': 'error',
    'mocha/no-hooks': 'error',
    'mocha/no-hooks-for-single-case': 'error',
    'mocha/no-top-level-hooks': 'error',
    'mocha/no-identical-title': 'error',
    'mocha/max-top-level-suites': 'error',
    'mocha/no-nested-tests': 'error',
  }
}

module.exports = eslint;
