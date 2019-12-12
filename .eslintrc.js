module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "google",
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier/@typescript-eslint",
    "prettier/react",
    "plugin:prettier/recommended" // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array
  ],
  plugins: ["@typescript-eslint", "prettier", "react"],
  parserOptions: {
    "ecmaVersion": 2018, // Allows for the parsing of modern ECMAScript features
    "sourceType": "module", // Allows for the use of imports
    "ecmaFeatures": {
      "jsx": true
    }
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  settings: {
    "react": {
      "version": "detected"
    },
    "import/parsers": {
      "@typescript-eslint/parser": [ ".ts", ".tsx"]
    },
    "import/resolver": {
      "typescript": {},
      "node": { "extensions": [".js", ".jsx", ".ts", ".tsx"] }
    }
  },
  rules: {
    "arrow-body-style": [
      "error",
      "as-needed",
      {"requireReturnForObjectLiteral": true}
    ],
    "no-unused-expressions": [
      "error",
      {
        "allowTaggedTemplates": true
      }
    ],
    "consistent-return": ["error"],
    "no-console": "off",
    "no-inner-declarations": "off",
    "prettier/prettier": "error",
    "quotes": ["error", "backtick"],
    "react/display-name": "off",
    "react/jsx-key": "warn",
    "react/no-unescaped-entities": "off",
    "react/prop-types": "off",
    "react/jsx-filename-extension": [1, { "extensions": ["ts", "tsx"] }],
    "require-jsdoc": "off",
    "valid-jsdoc": "off"
  }
}
