import globals from 'globals';
import js from '@eslint/js';
import noUnsanitized from 'eslint-plugin-no-unsanitized';

export const baseConfiguration = {

    'languageOptions': {
        'ecmaVersion': 2023
    },

    'rules': {
        'array-bracket-newline': 'error',
        'array-bracket-spacing': 'error',
        'arrow-parens': 'error',
        'arrow-spacing': 'error',
        'block-spacing': 'error',
        'brace-style': 'error',
        'camelcase': 'error',
        'comma-dangle': ['error', 'never'],
        'comma-spacing': 'error',
        'comma-style': 'error',
        'computed-property-spacing': 'error',
        'consistent-this': 'error',
        'curly': 'error',
        'eol-last': 'error',
        'eqeqeq': 'error',
        'func-call-spacing': 'error',
        'function-paren-newline': 'error',
        'generator-star-spacing': 'error',
        'indent': ['error', 4],
        'key-spacing': 'error',
        'keyword-spacing': 'error',
        'linebreak-style': ['error', 'unix'],
        'new-cap': 'error',
        'new-parens': 'error',
        'no-array-constructor': 'error',
        'no-bitwise': 'error',
        'no-confusing-arrow': 'error',
        'no-continue': 'error',
        'no-duplicate-imports': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-implicit-coercion': 'error',
        'no-implied-eval': 'error',
        'no-invalid-this': 'error',
        'no-iterator': 'error',
        'no-label-var': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-loop-func': 'error',
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',

        'no-multiple-empty-lines': [
            'error', {
                'max': 1,
                'maxEOF': 1,
                'maxBOF': 0
            }
        ],

        'max-len': [
            'error', {
                'code': 120
            }
        ],

        'no-negated-condition': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-object': 'error',
        'no-new-wrappers': 'error',
        'no-octal-escape': 'error',
        'no-proto': 'error',
        'no-return-assign': 'error',
        'no-return-await': 'error',
        'no-script-url': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-shadow-restricted-names': 'error',
        'no-tabs': 'error',
        'no-ternary': 'error',
        'no-throw-literal': 'error',
        'no-trailing-spaces': 'error',
        'no-undef-init': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unused-expressions': 'error',
        'no-use-before-define': 'error',
        'no-useless-call': 'error',
        'no-useless-concat': 'error',
        'no-useless-constructor': 'error',
        'no-useless-rename': 'error',
        'no-useless-return': 'error',
        'no-void': 'error',
        'no-warning-comments': 'warn',
        'no-whitespace-before-property': 'error',
        'no-with': 'error',
        'object-curly-spacing': 'error',
        'object-shorthand': ['error', 'consistent-as-needed'],
        'operator-assignment': 'error',
        'operator-linebreak': 'error',
        'prefer-numeric-literals': 'error',
        'prefer-promise-reject-errors': 'error',
        'quote-props': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'quotes': ['error', 'single'],
        'rest-spread-spacing': 'error',
        'require-await': 'error',
        'semi': 'error',
        'semi-spacing': 'error',
        'semi-style': 'error',
        'space-before-blocks': 'error',
        'space-before-function-paren': 'error',
        'space-in-parens': 'error',
        'space-infix-ops': 'error',

        'space-unary-ops': [
            2, {
                'words': false,
                'nonwords': false,
                'overrides': {
                    '!': true
                }
            }
        ],

        'spaced-comment': 'error',
        'strict': ['error', 'global'],
        'switch-colon-spacing': 'error',
        'symbol-description': 'error',
        'template-curly-spacing': 'error',
        'template-tag-spacing': 'error',
        'unicode-bom': 'error',
        'vars-on-top': 'error',
        'wrap-regex': 'error',
        'yield-star-spacing': 'error',
        'yoda': 'error'
    }
};

export default [

    js.configs.recommended,
    baseConfiguration,

    {
        'ignores': [
            '_locales',
            'images',
            'pages/shared/resources',
            'resources'
        ]
    },

    {
        'plugins': {
            'no-unsanitized': noUnsanitized
        },

        'languageOptions': {
            'globals': {
                ...globals.browser,
                ...globals.webextensions
            }
        },

        'rules': {
            'no-unsanitized/method': 'error',
            'no-unsanitized/property': 'error'
        }
    }
];
