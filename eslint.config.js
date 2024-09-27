import path from 'path';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';

import vue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import prettier from 'eslint-plugin-prettier';
import babelParser from '@babel/eslint-parser';

const __dirname = path.resolve();

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
});

export default [
    // Top-level ignores
    {
        ignores: ['node_modules', 'vendor'],
    },
    // Include configurations from 'extends' first
    ...compat.extends('plugin:vue/vue3-essential', '@vue/eslint-config-prettier'),
    // Your custom configuration
    {
        files: ['**/*.vue'], // Only include .vue files
        languageOptions: {
            parser: vueParser,
            parserOptions: {
                parser: babelParser,
                ecmaVersion: 'latest',
                sourceType: 'module',
                requireConfigFile: false,
            },
            globals: {
                route: 'readonly', // Declare 'route' as a global variable
            },
        },
        plugins: {
            vue,
            prettier,
        },
        settings: {
            vue: {
                version: 'detect', // Auto-detect Vue version
            },
        },
        rules: {
            // Custom rules to override any previous ones
            'vue/multi-word-component-names': 'off',
            'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
            'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
            'no-undef': 'off',
            'prettier/prettier': 'error',
        },
    },
];
