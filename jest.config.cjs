module.exports = {
    preset: 'ts-jest', // Используем пресет для TypeScript
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    moduleNameMapper: {
      '\\.(css|less|sass|scss)$': '<rootDir>/src/__tests__/style-mock.tsx',
    },
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest', // Трансформация TypeScript файлов
    },
    testMatch: [
      '<rootDir>/src/**/*.spec.{ts,tsx,js}', // Шаблон поиска тестовых файлов
    ],
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'], // Файл с настройками окружения
  };