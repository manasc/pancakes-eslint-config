module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "globals": {},
  "parser": "/Users/manaschimpidi/Code/hotcakes-eslint-config/node_modules/@typescript-eslint/parser/dist/index.js",
  "parserOptions": {
    "warnOnUnsupportedTypeScriptVersion": false,
    "sourceType": "module",
    "project": "tsconfig.json",
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest"
  },
  "plugins": [
    "react-hooks",
    "react",
    "@typescript-eslint"
  ],
  "reportUnusedDisableDirectives": true,
  "rules": {
    "no-alert": [
      "off"
    ],
    "capitalized-comments": [
      "off",
      "always",
      {
        "ignorePattern": "pragma|ignore|prettier-ignore|webpack\\w+:|c8|type-coverage:",
        "ignoreInlineComments": true,
        "ignoreConsecutiveComments": true
      }
    ],
    "react/boolean-prop-naming": [
      "off",
      {
        "validateNested": true,
        "rule": "^(is|has)[A-Z]([A-Za-z0-9]?)+"
      }
    ],
    "react/prop-types": [
      "off"
    ],
    "react/react-in-jsx-scope": [
      "off"
    ],
    "react/function-component-definition": [
      "off",
      {
        "namedComponents": "function-declaration",
        "unnamedComponents": "arrow-function"
      }
    ],
    "react/jsx-no-constructed-context-values": [
      "off"
    ],
    "@typescript-eslint/naming-convention": [
      "off",
      {
        "selector": [
          "variable",
          "function",
          "classProperty",
          "objectLiteralProperty",
          "parameterProperty",
          "classMethod",
          "objectLiteralMethod",
          "typeMethod",
          "accessor"
        ],
        "format": [
          "strictCamelCase"
        ],
        "leadingUnderscore": "allowSingleOrDouble",
        "trailingUnderscore": "allow",
        "filter": {
          "regex": "[- ]",
          "match": false
        }
      },
      {
        "selector": "typeLike",
        "format": [
          "StrictPascalCase"
        ]
      },
      {
        "selector": "variable",
        "types": [
          "boolean"
        ],
        "format": [
          "StrictPascalCase"
        ],
        "prefix": [
          "is",
          "has",
          "can",
          "should",
          "will",
          "did"
        ]
      },
      {
        "selector": "interface",
        "filter": "^(?!I)[A-Z]",
        "format": [
          "StrictPascalCase"
        ]
      },
      {
        "selector": "typeParameter",
        "filter": "^T$|^[A-Z][a-zA-Z]+$",
        "format": [
          "StrictPascalCase"
        ]
      },
      {
        "selector": [
          "classProperty",
          "objectLiteralProperty"
        ],
        "format": null,
        "modifiers": [
          "requiresQuotes"
        ]
      }
    ],
    "@typescript-eslint/ban-types": [
      "off",
      {
        "extendDefaults": false,
        "types": {
          "String": {
            "message": "Use `string` instead.",
            "fixWith": "string"
          },
          "Number": {
            "message": "Use `number` instead.",
            "fixWith": "number"
          },
          "Boolean": {
            "message": "Use `boolean` instead.",
            "fixWith": "boolean"
          },
          "Symbol": {
            "message": "Use `symbol` instead.",
            "fixWith": "symbol"
          },
          "BigInt": {
            "message": "Use `bigint` instead.",
            "fixWith": "bigint"
          },
          "Object": {
            "message": "The `Object` type is mostly the same as `unknown`. You probably want `Record<string, unknown>` instead. See https://github.com/typescript-eslint/typescript-eslint/pull/848",
            "fixWith": "Record<string, unknown>"
          },
          "{}": {
            "message": "The `{}` type is mostly the same as `unknown`. You probably want `Record<string, unknown>` instead.",
            "fixWith": "Record<string, unknown>"
          },
          "object": {
            "message": "The `object` type is hard to use. Use `Record<string, unknown>` instead. See: https://github.com/typescript-eslint/typescript-eslint/pull/848",
            "fixWith": "Record<string, unknown>"
          },
          "Function": "Use a specific function type instead, like `() => void`.",
          "null": {
            "message": "Use `undefined` instead. See: https://github.com/sindresorhus/meta/issues/7",
            "fixWith": "undefined"
          },
          "Buffer": {
            "message": "Use Uint8Array instead. See: https://sindresorhus.com/blog/goodbye-nodejs-buffer",
            "suggest": [
              "Uint8Array"
            ]
          },
          "[]": "Don't use the empty array type `[]`. It only allows empty arrays. Use `SomeType[]` instead.",
          "[[]]": "Don't use `[[]]`. It only allows an array with a single element which is an empty array. Use `SomeType[][]` instead.",
          "[[[]]]": "Don't use `[[[]]]`. Use `SomeType[][][]` instead.",
          "[[[[]]]]": "ur drunk 🤡",
          "[[[[[]]]]]": "🦄💥"
        }
      }
    ],
    "react/no-unescaped-entities": [
      "off"
    ],
    "react/require-default-props": [
      "off",
      {
        "forbidDefaultForRequired": true,
        "ignoreFunctionalComponents": true
      }
    ],
    "@typescript-eslint/no-require-imports": [
      "off"
    ],
    "@typescript-eslint/no-var-requires": [
      "off"
    ],
    "@typescript-eslint/adjacent-overload-signatures": [
      "error"
    ],
    "@typescript-eslint/array-type": [
      "error",
      {
        "default": "array-simple"
      }
    ],
    "@typescript-eslint/await-thenable": [
      "error"
    ],
    "@typescript-eslint/ban-ts-comment": [
      "error",
      {
        "ts-expect-error": "allow-with-description",
        "minimumDescriptionLength": 4
      }
    ],
    "@typescript-eslint/ban-tslint-comment": [
      "error"
    ],
    "@typescript-eslint/class-literal-property-style": [
      "error",
      "getters"
    ],
    "@typescript-eslint/consistent-generic-constructors": [
      "error",
      "constructor"
    ],
    "@typescript-eslint/consistent-indexed-object-style": [
      "error"
    ],
    "brace-style": [
      "off",
      "1tbs",
      {
        "allowSingleLine": false
      }
    ],
    "@typescript-eslint/brace-style": [
      "error",
      "1tbs",
      {
        "allowSingleLine": false
      }
    ],
    "comma-dangle": [
      "off",
      "always-multiline"
    ],
    "@typescript-eslint/comma-dangle": [
      "error",
      "always-multiline"
    ],
    "comma-spacing": [
      "off",
      {
        "before": false,
        "after": true
      }
    ],
    "@typescript-eslint/comma-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ],
    "default-param-last": [
      "off"
    ],
    "@typescript-eslint/default-param-last": [
      "error"
    ],
    "dot-notation": [
      "off"
    ],
    "@typescript-eslint/dot-notation": [
      "error"
    ],
    "@typescript-eslint/consistent-type-assertions": [
      "error",
      {
        "assertionStyle": "as",
        "objectLiteralTypeAssertions": "allow-as-parameter"
      }
    ],
    "@typescript-eslint/consistent-type-definitions": [
      "error",
      "type"
    ],
    "@typescript-eslint/consistent-type-exports": [
      "error",
      {
        "fixMixedExportsWithInlineTypeSpecifier": true
      }
    ],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        "fixStyle": "inline-type-imports"
      }
    ],
    "func-call-spacing": [
      "off",
      "never"
    ],
    "@typescript-eslint/func-call-spacing": [
      "error",
      "never"
    ],
    "indent": [
      "off",
      "tab",
      {
        "SwitchCase": 1,
        "flatTernaryExpressions": false,
        "offsetTernaryExpressions": false,
        "ignoreComments": false
      }
    ],
    "@typescript-eslint/indent": [
      "error",
      "tab",
      {
        "SwitchCase": 1,
        "flatTernaryExpressions": false,
        "offsetTernaryExpressions": false,
        "ignoreComments": false
      }
    ],
    "keyword-spacing": [
      "off"
    ],
    "@typescript-eslint/keyword-spacing": [
      "error"
    ],
    "lines-between-class-members": [
      "off",
      "always",
      {
        "exceptAfterSingleLine": true
      }
    ],
    "@typescript-eslint/lines-between-class-members": [
      "error",
      "always",
      {
        "exceptAfterSingleLine": true,
        "exceptAfterOverload": true
      }
    ],
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        "multiline": {
          "delimiter": "semi",
          "requireLast": true
        },
        "singleline": {
          "delimiter": "semi",
          "requireLast": false
        }
      }
    ],
    "@typescript-eslint/member-ordering": [
      "error",
      {
        "default": [
          "signature",
          "public-static-field",
          "public-static-method",
          "protected-static-field",
          "protected-static-method",
          "private-static-field",
          "private-static-method",
          "static-field",
          "static-method",
          "public-decorated-field",
          "public-instance-field",
          "public-abstract-field",
          "public-field",
          "protected-decorated-field",
          "protected-instance-field",
          "protected-abstract-field",
          "protected-field",
          "private-decorated-field",
          "private-instance-field",
          "private-field",
          "instance-field",
          "abstract-field",
          "decorated-field",
          "field",
          "public-constructor",
          "protected-constructor",
          "private-constructor",
          "constructor",
          "public-decorated-method",
          "public-instance-method",
          "public-abstract-method",
          "public-method",
          "protected-decorated-method",
          "protected-instance-method",
          "protected-abstract-method",
          "protected-method",
          "private-decorated-method",
          "private-instance-method",
          "private-method",
          "instance-method",
          "abstract-method",
          "decorated-method",
          "method"
        ]
      }
    ],
    "camelcase": [
      "off",
      {
        "properties": "always",
        "ignoreDestructuring": false,
        "ignoreImports": false,
        "ignoreGlobals": false
      }
    ],
    "@typescript-eslint/no-base-to-string": [
      "error"
    ],
    "no-array-constructor": [
      "off"
    ],
    "@typescript-eslint/no-array-constructor": [
      "error"
    ],
    "@typescript-eslint/no-array-delete": [
      "error"
    ],
    "no-dupe-class-members": [
      "off"
    ],
    "@typescript-eslint/no-dupe-class-members": [
      "error"
    ],
    "@typescript-eslint/no-confusing-void-expression": [
      "error"
    ],
    "@typescript-eslint/no-duplicate-enum-values": [
      "error"
    ],
    "@typescript-eslint/no-duplicate-type-constituents": [
      "error"
    ],
    "@typescript-eslint/no-dynamic-delete": [
      "error"
    ],
    "no-empty-function": [
      "off"
    ],
    "@typescript-eslint/no-empty-function": [
      "error"
    ],
    "@typescript-eslint/no-empty-interface": [
      "error",
      {
        "allowSingleExtends": true
      }
    ],
    "@typescript-eslint/no-extra-non-null-assertion": [
      "error"
    ],
    "no-extra-parens": [
      "off"
    ],
    "no-extra-semi": [
      "off"
    ],
    "@typescript-eslint/no-extra-semi": [
      "error"
    ],
    "no-loop-func": [
      "off"
    ],
    "@typescript-eslint/no-loop-func": [
      "error"
    ],
    "no-loss-of-precision": [
      "off"
    ],
    "@typescript-eslint/no-loss-of-precision": [
      "error"
    ],
    "@typescript-eslint/no-extraneous-class": [
      "error",
      {
        "allowConstructorOnly": false,
        "allowEmpty": false,
        "allowStaticOnly": false,
        "allowWithDecorator": true
      }
    ],
    "no-void": [
      "error",
      {
        "allowAsStatement": true
      }
    ],
    "@typescript-eslint/no-floating-promises": [
      "error",
      {
        "ignoreVoid": true,
        "ignoreIIFE": true
      }
    ],
    "@typescript-eslint/no-for-in-array": [
      "error"
    ],
    "@typescript-eslint/no-inferrable-types": [
      "error"
    ],
    "@typescript-eslint/no-meaningless-void-operator": [
      "error"
    ],
    "@typescript-eslint/no-misused-new": [
      "error"
    ],
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        "checksConditionals": true,
        "checksVoidReturn": false
      }
    ],
    "@typescript-eslint/no-namespace": [
      "error"
    ],
    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": [
      "error"
    ],
    "@typescript-eslint/no-non-null-asserted-optional-chain": [
      "error"
    ],
    "no-redeclare": [
      "off"
    ],
    "@typescript-eslint/no-redeclare": [
      "error"
    ],
    "no-restricted-imports": [
      "off",
      "domain",
      "freelist",
      "smalloc",
      "punycode",
      "sys",
      "querystring",
      "colors"
    ],
    "@typescript-eslint/no-restricted-imports": [
      "error",
      {
        "paths": [
          "error",
          "domain",
          "freelist",
          "smalloc",
          "punycode",
          "sys",
          "querystring",
          "colors"
        ]
      }
    ],
    "@typescript-eslint/no-this-alias": [
      "error",
      {
        "allowDestructuring": true
      }
    ],
    "no-throw-literal": [
      "off"
    ],
    "@typescript-eslint/no-throw-literal": [
      "error",
      {
        "allowThrowingUnknown": true,
        "allowThrowingAny": false
      }
    ],
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": [
      "error"
    ],
    "no-constant-condition": [
      "error"
    ],
    "@typescript-eslint/no-unnecessary-qualifier": [
      "error"
    ],
    "@typescript-eslint/no-unnecessary-type-arguments": [
      "error"
    ],
    "@typescript-eslint/no-unnecessary-type-assertion": [
      "error"
    ],
    "@typescript-eslint/no-unnecessary-type-constraint": [
      "error"
    ],
    "@typescript-eslint/no-unsafe-argument": [
      "error"
    ],
    "@typescript-eslint/no-unsafe-assignment": [
      "error"
    ],
    "@typescript-eslint/no-unsafe-call": [
      "error"
    ],
    "@typescript-eslint/no-unsafe-declaration-merging": [
      "error"
    ],
    "@typescript-eslint/no-unsafe-enum-comparison": [
      "error"
    ],
    "@typescript-eslint/no-unsafe-return": [
      "error"
    ],
    "@typescript-eslint/no-useless-empty-export": [
      "error"
    ],
    "no-unused-expressions": [
      "off",
      {
        "enforceForJSX": true,
        "allowShortCircuit": false,
        "allowTernary": false,
        "allowTaggedTemplates": false
      }
    ],
    "@typescript-eslint/no-unused-expressions": [
      "error"
    ],
    "no-unused-vars": [
      "off",
      {
        "vars": "all",
        "args": "after-used",
        "ignoreRestSiblings": true,
        "argsIgnorePattern": "^_",
        "caughtErrors": "all",
        "caughtErrorsIgnorePattern": "^_$"
      }
    ],
    "no-useless-constructor": [
      "off"
    ],
    "@typescript-eslint/no-useless-constructor": [
      "error"
    ],
    "object-curly-spacing": [
      "off",
      "never"
    ],
    "@typescript-eslint/object-curly-spacing": [
      "error",
      "never"
    ],
    "padding-line-between-statements": [
      "off",
      {
        "blankLine": "always",
        "prev": "multiline-block-like",
        "next": "*"
      }
    ],
    "@typescript-eslint/padding-line-between-statements": [
      "error",
      {
        "blankLine": "always",
        "prev": "multiline-block-like",
        "next": "*"
      }
    ],
    "@typescript-eslint/non-nullable-type-assertion-style": [
      "error"
    ],
    "@typescript-eslint/parameter-properties": [
      "error",
      {
        "prefer": "parameter-property"
      }
    ],
    "@typescript-eslint/prefer-as-const": [
      "error"
    ],
    "@typescript-eslint/prefer-find": [
      "error"
    ],
    "@typescript-eslint/prefer-for-of": [
      "error"
    ],
    "@typescript-eslint/prefer-function-type": [
      "error"
    ],
    "@typescript-eslint/prefer-includes": [
      "error"
    ],
    "@typescript-eslint/prefer-literal-enum-member": [
      "error"
    ],
    "@typescript-eslint/prefer-namespace-keyword": [
      "error"
    ],
    "@typescript-eslint/prefer-nullish-coalescing": [
      "error",
      {
        "ignoreTernaryTests": false,
        "ignoreConditionalTests": false,
        "ignoreMixedLogicalExpressions": false
      }
    ],
    "@typescript-eslint/prefer-optional-chain": [
      "error"
    ],
    "prefer-promise-reject-errors": [
      "off",
      {
        "allowEmptyReject": true
      }
    ],
    "@typescript-eslint/prefer-promise-reject-errors": [
      "error"
    ],
    "@typescript-eslint/prefer-readonly": [
      "error"
    ],
    "@typescript-eslint/prefer-reduce-type-parameter": [
      "error"
    ],
    "@typescript-eslint/prefer-string-starts-ends-with": [
      "error"
    ],
    "@typescript-eslint/prefer-ts-expect-error": [
      "error"
    ],
    "@typescript-eslint/promise-function-async": [
      "error"
    ],
    "quotes": [
      "off",
      "single"
    ],
    "@typescript-eslint/quotes": [
      "error",
      "single"
    ],
    "@typescript-eslint/restrict-plus-operands": [
      "error",
      {
        "allowAny": false
      }
    ],
    "@typescript-eslint/restrict-template-expressions": [
      "error",
      {
        "allowNumber": true
      }
    ],
    "@typescript-eslint/return-await": [
      "error"
    ],
    "@typescript-eslint/require-array-sort-compare": [
      "error",
      {
        "ignoreStringArrays": true
      }
    ],
    "space-before-function-paren": [
      "off",
      {
        "anonymous": "always",
        "named": "never",
        "asyncArrow": "always"
      }
    ],
    "@typescript-eslint/space-before-function-paren": [
      "error",
      {
        "anonymous": "always",
        "named": "never",
        "asyncArrow": "always"
      }
    ],
    "space-infix-ops": [
      "off"
    ],
    "@typescript-eslint/space-infix-ops": [
      "error"
    ],
    "semi": [
      "off",
      "always"
    ],
    "@typescript-eslint/semi": [
      "error",
      "always"
    ],
    "space-before-blocks": [
      "off",
      "always"
    ],
    "@typescript-eslint/space-before-blocks": [
      "error",
      "always"
    ],
    "default-case": [
      "off"
    ],
    "@typescript-eslint/switch-exhaustiveness-check": [
      "error",
      {
        "allowDefaultCaseForExhaustiveSwitch": false,
        "requireDefaultForNonUnion": true
      }
    ],
    "@typescript-eslint/triple-slash-reference": [
      "error",
      {
        "path": "never",
        "types": "never",
        "lib": "never"
      }
    ],
    "@typescript-eslint/type-annotation-spacing": [
      "error"
    ],
    "@typescript-eslint/prefer-regexp-exec": [
      "error"
    ],
    "@typescript-eslint/prefer-return-this-type": [
      "error"
    ],
    "@typescript-eslint/unified-signatures": [
      "error",
      {
        "ignoreDifferentlyNamedParameters": true
      }
    ],
    "no-undef": [
      "off",
      {
        "typeof": true
      }
    ],
    "node/no-unsupported-features/es-syntax": [
      "off"
    ],
    "node/no-unsupported-features/es-builtins": [
      "off"
    ],
    "import/namespace": [
      "off"
    ],
    "import/named": [
      "off"
    ],
    "no-duplicate-imports": [
      "off"
    ],
    "react/button-has-type": [
      "error"
    ],
    "react/jsx-child-element-spacing": [
      "error"
    ],
    "react/default-props-match-prop-types": [
      "error"
    ],
    "react/hook-use-state": [
      "error"
    ],
    "react/iframe-missing-sandbox": [
      "error"
    ],
    "react/no-access-state-in-setstate": [
      "error"
    ],
    "react/no-array-index-key": [
      "error"
    ],
    "react/no-arrow-function-lifecycle": [
      "error"
    ],
    "react/no-children-prop": [
      "error"
    ],
    "react/no-danger": [
      "error"
    ],
    "react/no-danger-with-children": [
      "error"
    ],
    "react/no-deprecated": [
      "error"
    ],
    "react/no-did-update-set-state": [
      "error"
    ],
    "react/no-direct-mutation-state": [
      "error"
    ],
    "react/no-find-dom-node": [
      "error"
    ],
    "react/no-invalid-html-attribute": [
      "error"
    ],
    "react/no-is-mounted": [
      "error"
    ],
    "react/no-namespace": [
      "error"
    ],
    "react/no-redundant-should-component-update": [
      "error"
    ],
    "react/no-render-return-value": [
      "error"
    ],
    "react/no-typos": [
      "error"
    ],
    "react/no-string-refs": [
      "error",
      {
        "noTemplateLiterals": true
      }
    ],
    "react/no-this-in-sfc": [
      "error"
    ],
    "react/no-unknown-property": [
      "error"
    ],
    "react/no-unsafe": [
      "error"
    ],
    "react/no-unused-prop-types": [
      "error"
    ],
    "react/no-unused-state": [
      "error"
    ],
    "react/prefer-read-only-props": [
      "error"
    ],
    "react/self-closing-comp": [
      "error"
    ],
    "react/state-in-constructor": [
      "error",
      "never"
    ],
    "react/static-property-placement": [
      "error"
    ],
    "react/style-prop-object": [
      "error",
      {
        "allow": [
          "FormattedNumber"
        ]
      }
    ],
    "react/void-dom-elements-no-children": [
      "error"
    ],
    "react/jsx-boolean-value": [
      "error"
    ],
    "react/jsx-closing-bracket-location": [
      "error",
      {
        "nonEmpty": "tag-aligned",
        "selfClosing": false
      }
    ],
    "react/jsx-closing-tag-location": [
      "error"
    ],
    "react/jsx-curly-newline": [
      "error",
      {
        "multiline": "consistent",
        "singleline": "forbid"
      }
    ],
    "react/jsx-curly-spacing": [
      "error",
      "never"
    ],
    "react/jsx-equals-spacing": [
      "error",
      "never"
    ],
    "react/jsx-first-prop-new-line": [
      "error"
    ],
    "react/jsx-indent": [
      "error",
      "tab",
      {
        "checkAttributes": true,
        "indentLogicalExpressions": true
      }
    ],
    "react/jsx-indent-props": [
      "error",
      "tab"
    ],
    "react/jsx-key": [
      "error",
      {
        "checkFragmentShorthand": true,
        "checkKeyMustBeforeSpread": true,
        "warnOnDuplicates": true
      }
    ],
    "react/jsx-max-props-per-line": [
      "error",
      {
        "maximum": 3,
        "when": "multiline"
      }
    ],
    "react/jsx-no-bind": [
      "error",
      {
        "allowArrowFunctions": true,
        "allowBind": false,
        "allowFunctions": false,
        "ignoreRefs": false,
        "ignoreDOMComponents": false
      }
    ],
    "react/jsx-no-comment-textnodes": [
      "error"
    ],
    "react/jsx-no-duplicate-props": [
      "error",
      {
        "ignoreCase": true
      }
    ],
    "react/jsx-no-script-url": [
      "error"
    ],
    "react/jsx-no-target-blank": [
      "error",
      {
        "warnOnSpreadAttributes": true,
        "forms": true,
        "links": true
      }
    ],
    "react/jsx-no-undef": [
      "error"
    ],
    "react/jsx-no-useless-fragment": [
      "error"
    ],
    "react/jsx-curly-brace-presence": [
      "error",
      {
        "props": "never",
        "children": "never",
        "propElementValues": "always"
      }
    ],
    "react/jsx-fragments": [
      "error",
      "syntax"
    ],
    "react/jsx-pascal-case": [
      "error"
    ],
    "react/jsx-props-no-multi-spaces": [
      "error"
    ],
    "react/jsx-sort-props": [
      "error",
      {
        "callbacksLast": true,
        "shorthandFirst": true,
        "noSortAlphabetically": true,
        "reservedFirst": true,
        "multiline": "ignore",
        "locale": "auto"
      }
    ],
    "react/jsx-tag-spacing": [
      "error",
      {
        "closingSlash": "never",
        "beforeSelfClosing": "never",
        "afterOpening": "never",
        "beforeClosing": "never"
      }
    ],
    "react/jsx-uses-react": [
      "error"
    ],
    "react/jsx-uses-vars": [
      "error"
    ],
    "react/jsx-wrap-multilines": [
      "error",
      {
        "declaration": "parens-new-line",
        "assignment": "parens-new-line",
        "return": "parens-new-line",
        "arrow": "parens-new-line",
        "condition": "ignore",
        "logical": "ignore",
        "prop": "ignore"
      }
    ],
    "react-hooks/rules-of-hooks": [
      "error"
    ],
    "react-hooks/exhaustive-deps": [
      "warn"
    ],
    "for-direction": [
      "error"
    ],
    "getter-return": [
      "error"
    ],
    "no-async-promise-executor": [
      "error"
    ],
    "no-await-in-loop": [
      "error"
    ],
    "no-compare-neg-zero": [
      "error"
    ],
    "no-cond-assign": [
      "error"
    ],
    "no-control-regex": [
      "error"
    ],
    "no-debugger": [
      "error"
    ],
    "no-dupe-args": [
      "error"
    ],
    "no-dupe-else-if": [
      "error"
    ],
    "no-dupe-keys": [
      "error"
    ],
    "no-duplicate-case": [
      "error"
    ],
    "no-empty-character-class": [
      "error"
    ],
    "no-empty": [
      "error",
      {
        "allowEmptyCatch": true
      }
    ],
    "no-empty-static-block": [
      "error"
    ],
    "no-ex-assign": [
      "error"
    ],
    "no-extra-boolean-cast": [
      "error"
    ],
    "no-func-assign": [
      "error"
    ],
    "no-import-assign": [
      "error"
    ],
    "no-inner-declarations": [
      "error"
    ],
    "no-invalid-regexp": [
      "error"
    ],
    "no-irregular-whitespace": [
      "error"
    ],
    "no-misleading-character-class": [
      "error"
    ],
    "no-obj-calls": [
      "error"
    ],
    "no-promise-executor-return": [
      "error"
    ],
    "no-prototype-builtins": [
      "error"
    ],
    "no-regex-spaces": [
      "error"
    ],
    "no-setter-return": [
      "error"
    ],
    "no-sparse-arrays": [
      "error"
    ],
    "no-template-curly-in-string": [
      "error"
    ],
    "no-unreachable": [
      "error"
    ],
    "no-unreachable-loop": [
      "error"
    ],
    "no-unsafe-finally": [
      "error"
    ],
    "no-unsafe-negation": [
      "error",
      {
        "enforceForOrderingRelations": true
      }
    ],
    "no-unsafe-optional-chaining": [
      "error",
      {
        "disallowArithmeticOperators": true
      }
    ],
    "no-useless-backreference": [
      "error"
    ],
    "use-isnan": [
      "error"
    ],
    "valid-typeof": [
      "error",
      {
        "requireStringLiterals": false
      }
    ],
    "no-unexpected-multiline": [
      "error"
    ],
    "accessor-pairs": [
      "error",
      {
        "enforceForClassMembers": true,
        "getWithoutSet": false,
        "setWithoutGet": true
      }
    ],
    "array-callback-return": [
      "error",
      {
        "allowImplicit": true,
        "checkForEach": false,
        "allowVoid": false
      }
    ],
    "block-scoped-var": [
      "error"
    ],
    "complexity": [
      "warn"
    ],
    "curly": [
      "error"
    ],
    "default-case-last": [
      "error"
    ],
    "dot-location": [
      "error",
      "property"
    ],
    "eqeqeq": [
      "error"
    ],
    "grouped-accessor-pairs": [
      "error",
      "getBeforeSet"
    ],
    "guard-for-in": [
      "error"
    ],
    "no-caller": [
      "error"
    ],
    "no-case-declarations": [
      "error"
    ],
    "no-constructor-return": [
      "error"
    ],
    "no-else-return": [
      "error",
      {
        "allowElseIf": false
      }
    ],
    "no-empty-pattern": [
      "error"
    ],
    "no-eq-null": [
      "error"
    ],
    "no-eval": [
      "error"
    ],
    "no-extend-native": [
      "error"
    ],
    "no-extra-bind": [
      "error"
    ],
    "no-extra-label": [
      "error"
    ],
    "no-fallthrough": [
      "error"
    ],
    "no-floating-decimal": [
      "error"
    ],
    "no-global-assign": [
      "error"
    ],
    "no-implicit-coercion": [
      "error"
    ],
    "no-implicit-globals": [
      "error"
    ],
    "no-implied-eval": [
      "error"
    ],
    "no-iterator": [
      "error"
    ],
    "no-labels": [
      "error"
    ],
    "no-lone-blocks": [
      "error"
    ],
    "no-multi-spaces": [
      "error"
    ],
    "no-multi-str": [
      "error"
    ],
    "no-new-func": [
      "error"
    ],
    "no-new-wrappers": [
      "error"
    ],
    "no-nonoctal-decimal-escape": [
      "error"
    ],
    "no-new": [
      "error"
    ],
    "no-octal-escape": [
      "error"
    ],
    "no-octal": [
      "error"
    ],
    "no-proto": [
      "error"
    ],
    "no-return-assign": [
      "error",
      "always"
    ],
    "no-return-await": [
      "error"
    ],
    "no-script-url": [
      "error"
    ],
    "no-self-assign": [
      "error",
      {
        "props": true
      }
    ],
    "no-self-compare": [
      "error"
    ],
    "no-sequences": [
      "error"
    ],
    "no-unmodified-loop-condition": [
      "error"
    ],
    "no-unused-labels": [
      "error"
    ],
    "no-useless-call": [
      "error"
    ],
    "no-useless-catch": [
      "error"
    ],
    "no-useless-concat": [
      "error"
    ],
    "no-useless-escape": [
      "error"
    ],
    "no-useless-return": [
      "error"
    ],
    "no-warning-comments": [
      "warn"
    ],
    "no-with": [
      "error"
    ],
    "prefer-regex-literals": [
      "error",
      {
        "disallowRedundantWrapping": true
      }
    ],
    "radix": [
      "error"
    ],
    "wrap-iife": [
      "error",
      "inside",
      {
        "functionPrototypeMethods": true
      }
    ],
    "yoda": [
      "error"
    ],
    "no-delete-var": [
      "error"
    ],
    "no-label-var": [
      "error"
    ],
    "no-restricted-globals": [
      "error",
      "event"
    ],
    "no-shadow-restricted-names": [
      "error"
    ],
    "no-undef-init": [
      "error"
    ],
    "no-buffer-constructor": [
      "error"
    ],
    "array-bracket-newline": [
      "error",
      "consistent"
    ],
    "array-bracket-spacing": [
      "error",
      "never"
    ],
    "array-element-newline": [
      "error",
      "consistent"
    ],
    "comma-style": [
      "error",
      "last"
    ],
    "computed-property-spacing": [
      "error",
      "never",
      {
        "enforceForClassMembers": true
      }
    ],
    "eol-last": [
      "error"
    ],
    "func-name-matching": [
      "error",
      {
        "considerPropertyDescriptor": true
      }
    ],
    "func-names": [
      "error",
      "never"
    ],
    "function-call-argument-newline": [
      "error",
      "consistent"
    ],
    "jsx-quotes": [
      "error",
      "prefer-single"
    ],
    "key-spacing": [
      "error",
      {
        "beforeColon": false,
        "afterColon": true
      }
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "max-depth": [
      "warn"
    ],
    "max-nested-callbacks": [
      "warn",
      4
    ],
    "max-params": [
      "warn",
      {
        "max": 4
      }
    ],
    "max-statements-per-line": [
      "error"
    ],
    "new-cap": [
      "error",
      {
        "newIsCap": true,
        "capIsNew": true,
        "properties": true
      }
    ],
    "new-parens": [
      "error"
    ],
    "no-bitwise": [
      "error"
    ],
    "no-lonely-if": [
      "error"
    ],
    "no-mixed-operators": [
      "error"
    ],
    "no-mixed-spaces-and-tabs": [
      "error"
    ],
    "no-multi-assign": [
      "error"
    ],
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1
      }
    ],
    "no-negated-condition": [
      "error"
    ],
    "no-new-object": [
      "error"
    ],
    "no-whitespace-before-property": [
      "error"
    ],
    "no-trailing-spaces": [
      "error"
    ],
    "no-unneeded-ternary": [
      "error"
    ],
    "one-var": [
      "error",
      "never"
    ],
    "one-var-declaration-per-line": [
      "error"
    ],
    "operator-assignment": [
      "error",
      "always"
    ],
    "operator-linebreak": [
      "error",
      "before"
    ],
    "padded-blocks": [
      "error",
      "never",
      {
        "allowSingleLineBlocks": false
      }
    ],
    "prefer-exponentiation-operator": [
      "error"
    ],
    "prefer-object-spread": [
      "error"
    ],
    "quote-props": [
      "error",
      "as-needed"
    ],
    "semi-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ],
    "semi-style": [
      "error",
      "last"
    ],
    "space-in-parens": [
      "error",
      "never"
    ],
    "space-unary-ops": [
      "error"
    ],
    "spaced-comment": [
      "error",
      "always",
      {
        "line": {
          "exceptions": [
            "-",
            "+",
            "*"
          ],
          "markers": [
            "!",
            "/",
            "=>"
          ]
        },
        "block": {
          "exceptions": [
            "-",
            "+",
            "*"
          ],
          "markers": [
            "!",
            "*"
          ],
          "balanced": true
        }
      }
    ],
    "switch-colon-spacing": [
      "error",
      {
        "after": true,
        "before": false
      }
    ],
    "template-tag-spacing": [
      "error",
      "never"
    ],
    "unicode-bom": [
      "error",
      "never"
    ],
    "arrow-body-style": [
      "error"
    ],
    "arrow-parens": [
      "error",
      "as-needed"
    ],
    "arrow-spacing": [
      "error",
      {
        "before": true,
        "after": true
      }
    ],
    "constructor-super": [
      "error"
    ],
    "generator-star-spacing": [
      "error",
      "both"
    ],
    "no-class-assign": [
      "error"
    ],
    "no-const-assign": [
      "error"
    ],
    "no-constant-binary-expression": [
      "error"
    ],
    "no-new-native-nonconstructor": [
      "error"
    ],
    "no-this-before-super": [
      "error"
    ],
    "no-useless-computed-key": [
      "error",
      {
        "enforceForClassMembers": true
      }
    ],
    "no-useless-rename": [
      "error"
    ],
    "no-var": [
      "error"
    ],
    "object-shorthand": [
      "error",
      "always",
      {
        "avoidExplicitReturnArrows": true
      }
    ],
    "prefer-arrow-callback": [
      "error",
      {
        "allowNamedFunctions": true,
        "allowUnboundThis": true
      }
    ],
    "prefer-const": [
      "error",
      {
        "destructuring": "all",
        "ignoreReadBeforeAssign": false
      }
    ],
    "prefer-destructuring": [
      "error",
      {
        "VariableDeclarator": {
          "array": false,
          "object": true
        },
        "AssignmentExpression": {
          "array": false,
          "object": false
        }
      },
      {
        "enforceForRenamedProperties": false
      }
    ],
    "prefer-numeric-literals": [
      "error"
    ],
    "prefer-rest-params": [
      "error"
    ],
    "prefer-spread": [
      "error"
    ],
    "require-yield": [
      "error"
    ],
    "rest-spread-spacing": [
      "error",
      "never"
    ],
    "symbol-description": [
      "error"
    ],
    "template-curly-spacing": [
      "error"
    ],
    "yield-star-spacing": [
      "error",
      "both"
    ]
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx"
        ]
      }
    },
    "import/parsers": {
      "/Users/manaschimpidi/Code/hotcakes-eslint-config/node_modules/@typescript-eslint/parser/dist/index.js": [
        ".ts",
        ".tsx"
      ]
    },
    "react": {
      "version": "detect"
    }
  },
  "ignorePatterns": [
    "node_modules",
    "dist"
  ]
}
