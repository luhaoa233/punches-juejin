/* eslint-disable */
module.exports = {
    extends: ['eslint:recommended', 'plugin:vue/vue3-essential', 'plugin:@typescript-eslint/eslint-recommended'],
    parserOptions: {
        ecmaVersion: 12,
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: ['vue', '@typescript-eslint', 'require-jsdoc-except', 'import'],
    globals: {
        uni: 'readonly',
        Vue: 'readonly',
        process: 'writeable',
        my: 'readonly',
    },
    rules: {
        // 缩进
        indent: [
            2,
            4,
            {
                SwitchCase: 1,
            },
        ],
        // 要求使用分号而不是 ASI（这个才是控制行尾部分号的，）
        semi: [2, 'always'],
        // 禁止使用 var
        'no-var': [2],
        // 推荐使用 const ,除非会被重新赋值
        'prefer-const': [1],
        // 每一个变量都用一个 const 或者 let
        'one-var': [2, 'never'],
        // 禁止使用链式声明变量
        'no-multi-assign': [2],
        // 在赋值的时候禁止在 `=` 前后换行
        'operator-linebreak': [2],
        // 禁止出现未使用的变量
        // "no-unused-vars": [2, { "varsIgnorePattern": "Vue" }],
        '@typescript-eslint/no-unused-vars': [2],
        // 使用字面值创建对象，禁止使用 new Object()
        'no-new-object': [2],
        // 禁止在定义对象时将对象的key用引号包起来 除非必要的时候
        'quote-props': [2, 'as-needed', { numbers: true }],
        // 使用对象中的简写
        'object-shorthand': [2],
        // 禁止用obj['key'] 必须使用obj.key
        'dot-notation': [2],
        // 禁止在同一个对象中出现相同的key
        'no-dupe-class-members': [2],
        // 禁止object对象出现换行，或者换行后仅一行存在
        'object-curly-newline': [
            2,
            {
                ObjectExpression: { multiline: true },
                ObjectPattern: { multiline: true },
                ImportDeclaration: { multiline: true, minProperties: 6 },
                ExportDeclaration: { multiline: true, minProperties: 6 },
            },
        ],
        // 对象浅拷贝推荐使用拓展运算符
        'prefer-object-spread': [1],
        // 用字面量创建数组 禁止使用 new Array()
        'no-array-constructor': [2],
        // 推荐用对象、数组的解构来获取和使用对象的属性值
        'prefer-destructuring': [1],
        // 字符串推荐用单引号
        quotes: [1, 'single'],
        // 尽量使用模板字符串
        'prefer-template': [1],
        // 模板字符串不必要多余空格
        'template-curly-spacing': [1],
        // 不要使用 eval
        'no-eval': [2],
        // 不要使用不必要的转义字符
        'no-useless-escape': [2],
        // 推荐使用命名函数表达式而不是函数声明
        'func-style': [1, 'expression'],
        // 立即执行表达式必须用圆括号包裹
        'wrap-iife': [2],
        // 禁止使用 new Function
        'no-new-func': [2],
        // 不要使用 arguments 使用 ... 代替
        'prefer-rest-params': [2],
        // 函数定义部分要有空格
        'space-before-function-paren': [2, { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
        // 强制在块之前使用一致的空格
        'space-before-blocks': [2, 'always'],
        // 在回调函数中使用箭头函数
        'prefer-arrow-callback': [2],
        // 箭头函数需要在箭头前后有空格
        'arrow-spacing': [2, { before: true, after: true }],
        // 推荐箭头函数参数加上小括号
        'arrow-parens': [0, 'always'],
        // 箭头函数没有括号的情况下禁止出现 >= 和 <=
        'no-confusing-arrow': [2],
        // 在函数参数有多行时参数向前对齐
        'function-paren-newline': [1, 'multiline'],
        // 禁止有多个相同 module 的 import
        'import/no-duplicates': [2],
        // 禁止从一个 module 中导入多次
        'import/no-mutable-exports': [2],
        // 在一个单一导出模块里，用 export default 更好
        'import/prefer-default-export': [1],
        // import 需要在所有语句之前
        'import/first': [2],
        // import 中禁止出现 webpack loader 语法
        'import/no-webpack-loader-syntax': [2],
        // 不要使用迭代器 foreach for of 应该使用[].foreach 代替
        'no-iterator': [2],
        // 推荐在 case 和 default 分块用大括号
        'no-case-declarations': [1],
        // 三元表达式尽量不要嵌套
        'no-nested-ternary': [1],
        // 禁止不必要的三目表达式 如a?true:false
        'no-unneeded-ternary': [2],
        // 在非显而易见的时候，使用括号来组合操作符
        'no-mixed-operators': [2],
        // 多行代码块需要使用大括号包裹
        'nonblock-statement-body-position': [2],
        // if 表达式的 else 和 if 的右大括号在一行
        'brace-style': [2],
        // 在if中 return 后不要写 else
        'no-else-return': [2],
        // 强制在注释中 // 或 /* 使用一致的空格
        'spaced-comment': [
            2,
            'always',
            {
                line: {
                    markers: ['/', 'eslint-disable'],
                    exceptions: ['-', '+'],
                },
                block: {
                    markers: ['!'],
                    exceptions: ['*'],
                    balanced: true,
                },
            },
        ],
        // 在控制语句的圆括号前空一格，
        'keyword-spacing': [2],
        // 要求操作符周围有空格
        'space-infix-ops': 2,
        // 强制分号之前和之后使用一致的空格
        'semi-spacing': 1,
        // 在块作用域内上下禁止留空行
        'padded-blocks': [1, 'never'],
        // 文件末尾空一行
        'eol-last': [2],
        // 链式调用每行一个
        'newline-per-chained-call': [2, { ignoreChainWithDepth: 2 }],
        // 禁止连续的空行
        'no-multiple-empty-lines': [2],
        // 圆括号里不要加空格
        'space-in-parens': [2, 'never'],
        // 方括号里不要加空格
        'array-bracket-spacing': [2, 'never'],
        // 对象花括号附近需要有空格
        'object-curly-spacing': [2, 'always'],
        // 花括号里作为语句也需要有空格
        'block-spacing': [2, 'always'],
        // 逗号后面必须加上空格
        'comma-spacing': [2, { before: false, after: true }],
        // 调用函数时，函数名和小括号之间不需要空格
        'func-call-spacing': [2, 'never'],
        // 对象的字面量属性中，key 和 value 之间要有空格
        'key-spacing': [2],
        // 对象计算属性内禁止空格
        'computed-property-spacing': [2, 'never'],
        // 行末不要有空格
        'no-trailing-spaces': [2],
        // 不要前置逗号
        'comma-style': [2],
        // 要求多行数组/对象最后一个元素后面需要加上逗号 防止在下次修改添加元素时污染上一行的git log
        'comma-dangle': [
            2,
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'ignore',
                exports: 'ignore',
                functions: 'ignore',
            },
        ],
        // 用大驼峰命名法来命名类
        'new-cap': [2],
        // 强制在一元操作符前后使用一致的空格
        'space-unary-ops': [2, { words: true, nonwords: false }],
        // 不要使用 debugger
        'no-debugger': [2],
        // 要求或禁止 Unicode BOM
        'unicode-bom': 1,
        // 规定换行格式
        'linebreak-style': [2, 'unix'],
        // 要求使用3个等于号
        eqeqeq: 1,
        // 函数中的最大语句数量
        'max-statements': [1, 100],
        // 不要隐式创建全局变量
        // "no-undef": [2],
        // 注释要求
        'require-jsdoc-except/require-jsdoc': [
            'error',
            {
                require: {
                    FunctionDeclaration: true,
                    MethodDefinition: true,
                    //"ClassDeclaration": true,
                    //"ArrowFunctionExpression": true,
                    //"FunctionExpression": true
                },
                ignore: [
                    'constructor',
                    'onPullDownRefresh',
                    'onReachBottom',
                    'onPageScroll',
                    'onShareAppMessage',
                    'onTabItemTap',
                    'onResize',
                    '/.+Reducer/',
                    '/render.*/',
                ],
            },
        ],
        // VUE script缩进
        'vue/script-indent': [
            'error',
            4,
            {
                baseIndent: 1,
                switchCase: 0,
                ignores: [],
            },
        ],
        // 最大深度限制
        'max-depth': [2, 5],
        // 函数最大行数限制
        'max-lines-per-function': [
            2,
            {
                max: 120,
                skipComments: true,
            },
        ],
        // typescript 声明时候的行末分号
        '@typescript-eslint/member-delimiter-style': [
            2,
            {
                "multiline": {
                    "delimiter": "semi",
                    "requireLast": true
                },
                "singleline": {
                    "delimiter": "comma",
                    "requireLast": false
                }
            },
        ],
    },
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                indent: 'off',
            },
        },
        {
            files: ['*.ts'],
            rules: {
                'no-undef': 'off',
            },
        },
    ],
};
/**
 * update:
 * 2021-07-06
 * #add max-depth
 * #add max-lines-per-function
 * #add @typescript-eslint/member-delimiter-style
 * #update object-curly-newline
 */
