module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "standard-with-typescript",
    "plugin:react/recommended",
   "next/core-web-vitals"
  ],
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "@typescript-eslint/quotes": [
      "error",
      "double"
    ],
    "@typescript-eslint/semi": [
      "error",
      "always"
    ]
  },
  "overrides": [
    {
      // enable the rule specifically for TypeScript files
      "files": ["*.tsx"],
      "rules": {
        "@typescript-eslint/explicit-function-return-type": "off",
      },
    },
  ],
}
