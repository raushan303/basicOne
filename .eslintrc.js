module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  "parser": "babel-eslint",

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading":"off",
    "react/prop-types":"off",
    "jsx-a11y/alt-text":"off",
    "max-len":["error", { "code": 120 }],
    "jsx-a11y/anchor-is-valid": ["error", {
      "components": ["Link"],
      "specialLink": ["hrefLeft", "hrefRight"],
      "aspects": ["invalidHref", "preferButton"]
    }],
    "template-curly-spacing" : "off",
  },
};
