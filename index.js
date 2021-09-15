module.exports = {
    "env": {
      "es6": true,
      "node": true
    },
    "globals": {},
    "parser": null,
    "parserOptions": {
      "sourceType": "script",
      "ecmaVersion": "2018"
    },
    "rules": {
      "prefer-const": [
        "error",
        {
          "destructuring": "any",
          "ignoreReadBeforeAssign": true
        }
      ],
      "no-const-assign": [
        "error"
      ],
      "no-var": [
        "error"
      ],
      "object-shorthand": [
        "error",
        "always",
        {
          "ignoreConstructors": false,
          "avoidQuotes": true
        }
      ],
      "quote-props": [
        "error",
        "as-needed",
        {
          "keywords": false,
          "unnecessary": true,
          "numbers": false
        }
      ],
      "prefer-destructuring": [
        "error",
        {
          "VariableDeclarator": {
            "array": true,
            "object": true
          },
          "AssignmentExpression": {
            "array": true,
            "object": false
          }
        },
        {
          "enforceForRenamedProperties": true
        }
      ],
      "quotes": [
        "error",
        "single",
        {
          "avoidEscape": true
        }
      ],
      "prefer-template": [
        "error"
      ],
      "template-curly-spacing": [
        "error"
      ],
      "no-eval": [
        "error"
      ],
      "func-style": [
        "error",
        "expression"
      ],
      "space-before-function-paren": [
        "error",
        {
          "anonymous": "always",
          "named": "never",
          "asyncArrow": "always"
        }
      ],
      "space-before-blocks": [
        "error"
      ],
      "arrow-parens": [
        "error",
        "as-needed"
      ],
      "implicit-arrow-linebreak": [
        "error",
        "beside"
      ],
      "no-iterator": [
        "warn"
      ],
      "dot-notation": [
        "error",
        {
          "allowKeywords": true,
          "allowPattern": ""
        }
      ],
      "no-undef": [
        "error"
      ],
      "no-multi-assign": [
        "error"
      ],
      "no-unused-vars": [
        "error",
        {
          "vars": "all",
          "args": "after-used",
          "ignoreRestSiblings": true
        }
      ],
      "eqeqeq": [
        "error",
        "always"
      ],
      "no-case-declarations": [
        "error"
      ],
      "no-nested-ternary": [
        "error"
      ],
      "no-mixed-operators": [
        "error",
        {
          "groups": [
            [
              "%",
              "**"
            ],
            [
              "%",
              "+"
            ],
            [
              "%",
              "-"
            ],
            [
              "%",
              "*"
            ],
            [
              "%",
              "/"
            ],
            [
              "/",
              "*"
            ],
            [
              "&",
              "|",
              "<<",
              ">>",
              ">>>"
            ],
            [
              "==",
              "!=",
              "===",
              "!=="
            ],
            [
              "&&",
              "||"
            ]
          ],
          "allowSamePrecedence": false
        }
      ],
      "nonblock-statement-body-position": [
        "error",
        "beside",
        {
          "overrides": {}
        }
      ],
      "brace-style": [
        "error",
        "1tbs",
        {
          "allowSingleLine": true
        }
      ],
      "no-else-return": [
        "error",
        {
          "allowElseIf": false
        }
      ],
      "spaced-comment": [
        "error",
        "always",
        {
          "line": {
            "exceptions": [
              "-",
              "+"
            ],
            "markers": [
              "=",
              "!"
            ]
          },
          "block": {
            "exceptions": [
              "-",
              "+"
            ],
            "markers": [
              "=",
              "!",
              ":",
              "::"
            ],
            "balanced": true
          }
        }
      ],
      "indent": [
        "error",
        4
      ],
      "keyword-spacing": [
        "error",
        {
          "before": true,
          "after": true,
          "overrides": {
            "return": {
              "after": true,
              "before": true
            },
            "throw": {
              "after": true,
              "before": true
            },
            "case": {
              "after": true,
              "before": true
            }
          }
        }
      ],
      "space-infix-ops": [
        "error"
      ],
      "eol-last": [
        "error",
        "always"
      ],
      "newline-per-chained-call": [
        "error",
        {
          "ignoreChainWithDepth": 4
        }
      ],
      "no-whitespace-before-property": [
        "error"
      ],
      "padded-blocks": [
        "error",
        {
          "blocks": "never",
          "classes": "never",
          "switches": "never"
        },
        {
          "allowSingleLineBlocks": true
        }
      ],
      "no-multiple-empty-lines": [
        "error",
        {
          "max": 2,
          "maxBOF": 1,
          "maxEOF": 0
        }
      ],
      "space-in-parens": [
        "error",
        "never"
      ],
      "array-bracket-spacing": [
        "error",
        "never"
      ],
      "object-curly-spacing": [
        "error",
        "always"
      ],
      "max-len": [
        "error",
        100,
        4,
        {
          "ignoreUrls": true,
          "ignoreComments": false,
          "ignoreRegExpLiterals": true,
          "ignoreStrings": true,
          "ignoreTemplateLiterals": true
        }
      ],      
      "block-spacing": [
        "error",
        "always"
      ],
      "comma-spacing": [
        "error",
        {
          "before": false,
          "after": true
        }
      ],
      "func-call-spacing": [
        "error",
        "never"
      ],  
      "key-spacing": [
        "error",
        {
          "beforeColon": false,
          "afterColon": true
        }
      ],
      "no-trailing-spaces": [
        "error",
        {
          "skipBlankLines": false,
          "ignoreComments": false
        }
      ],
      "no-multi-spaces": [
        "error",
        {
          "ignoreEOLComments": false
        }
      ],
      "comma-style": [
        "error",
        "last",
        {
          "exceptions": {
            "ArrayExpression": false,
            "ArrayPattern": false,
            "ArrowFunctionExpression": false,
            "CallExpression": false,
            "FunctionDeclaration": false,
            "FunctionExpression": false,
            "ImportDeclaration": false,
            "ObjectExpression": false,
            "ObjectPattern": false,
            "VariableDeclaration": false,
            "NewExpression": false
          }
        }
      ],
      "comma-dangle": [
        "error",
        {
          "arrays": "always-multiline",
          "objects": "always-multiline",
          "exports": "always-multiline",
          "functions": "always-multiline"
        }
      ],
      "semi": [
        "error",
        "always"
      ],
      "no-new-wrappers": [
        "error"
      ],
      "id-length": [
        "error",
        {
          "min": 2,
          "exceptions": [ "i", "j" ]
        }
      ],
      "camelcase": [
        "error",
        {
          "properties": "never",
          "ignoreDestructuring": false
        }
      ],
      "new-cap": [
        "error",
        {
          "newIsCap": true,
          "newIsCapExceptions": [],
          "capIsNew": false,
          "capIsNewExceptions": [
            "Immutable.Map",
            "Immutable.Set",
            "Immutable.List"
          ],
          "properties": true
        }
      ],
      "no-restricted-syntax": [
        "warn",
        {
          "selector": "WithStatement",
          "message": "`with` is disallowed in strict mode because it makes code impossible to predict and optimize."
        }
      ],
      "one-var": [
        "error",
        "never"
      ],
    }
}
