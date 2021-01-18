module.exports = {
    // Use only this configuration
    root: true,
    // File parser
    parser: 'vue-eslint-parser',
    "rules": {
        "indent": ["error", 4],
        "vue/html-indent": ["error", 4, { "baseIndent": 1 }] ,
        "vue/script-indent": ["error", 4, { "baseIndent": 1 }],
    },
    parserOptions: {
        // Use babel-eslint for JavaScript
        'parser': 'babel-eslint',
        emitWarning: true,
        'ecmaVersion': 2017,
        // With import/export syntax
        'sourceType': 'module'
    },
    // Environment global objects
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'plugin:vue/recommended',
    ],
    "overrides": [
        {
            "files": ["*.vue"],
            "rules": {
                "indent": "off"
            }
        }
    ]
}




