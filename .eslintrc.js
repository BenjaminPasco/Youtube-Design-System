module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2021,
        sourceType: 'module',
        project: './tsconfig.json'
    },      
    settings: {
        react: {
          version: 'detect', // Auto-detect the version of React
        },
    },
    plugins: ['@typescript-eslint', 'prettier', 'react'],
    extends: [
        'airbnb-typescript',                       // Airbnb's base configuration with TypeScript support
        'plugin:@typescript-eslint/recommended',   // TypeScript recommended rules
        'plugin:react/recommended',                // React recommended rules
        'prettier',                               // Prettier recommended configuration
      ],
    rules: {
      'prettier/prettier': 'error', // Ensure code is formatted according to Prettier rules
      // ... other ESLint rules you want
      'react/react-in-jsx-scope': 'off'
    }
  };
  