module.exports = {
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  setupFiles: ['<rootDir>/jest.setup.tsx'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)(spec|test).ts?(x)'],
  globals: {
    'ts-jest': {
      tsConfigFile: 'tsconfig.jest.json'
    }
  }
};
