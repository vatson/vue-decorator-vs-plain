import vue, { VNode, CreateElement } from 'vue';

export const PlainComponent = vue.extend({
  props: {
    name: String,
    // name2: String,
    // name3: String,
  },
  computed: {
    greeting(): string {
      return `Hello, ${this.name}`;
    },
    // greeting2(): string {
    //   return `Hello, ${this.name}`;
    // },
    // greeting3(): string {
    //   return `Hello, ${this.name}`;
    // },
  },
  methods: {
    cssStyles(): object {
      return { color: 'red' };
    },
    // cssStyles2(): string[] {
    //   return ['smth'];
    // },
    // cssStyles3(): string[] {
    //   return ['smth'];
    // },

  },
  render: function (h: CreateElement): VNode {
    return h('div', { style: this.cssStyles }, this.greeting);
  },
})