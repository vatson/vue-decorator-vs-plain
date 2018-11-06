'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var vue = _interopDefault(require('vue'));

var PlainComponent = vue.extend({
    props: {
        name: String,
    },
    computed: {
        greeting: function () {
            return "Hello, " + this.name;
        },
    },
    methods: {
        cssStyles: function () {
            return { color: 'red' };
        },
    },
    render: function (h) {
        return h('div', { style: this.cssStyles }, this.greeting);
    },
});

exports.PlainComponent = PlainComponent;
