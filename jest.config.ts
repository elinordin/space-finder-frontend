import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
    roots: [
        '<rootDir>/test',
        '<rootDir>/src'
    ],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    setupFilesAfterEnv: [
        '@testing-library/jest-dom/extend-expect'
    ],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(jpg)$':'<rootDir>/test/mockfile.ts',
        '\\.(css)$':'<rootDir>/test/mockfile.ts'
    },
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{ts,tsx}',
        '!src/services/**',
        '!src/react-app-env.d.ts',
        '!src/index.tsx'
    ]
}

export default config