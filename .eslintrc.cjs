module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "eslint-config-prettier"
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json"
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "no-unused-vars": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "react/react-in-jsx-scope": 0,
    "react/jsx-props-no-spreading": 0,
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        trailingComma: "none"
      }
    ],
    "comma-dangle": ["error", "never"]
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [["@", "./src/"]],
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      },
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  }
};
