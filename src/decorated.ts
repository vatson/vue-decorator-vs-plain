import Vue, { VNode, CreateElement } from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export class DecoratedComponent extends Vue {
  @Prop(String)
  public name: string;

  // @Prop(String)
  // public name2: string;

  // @Prop(String)
  // public name3: string;

  public get greeting(): string {
    return `Hello, ${this.name}`;
  }

  // public get greeting2(): string {
  //   return `Hello, ${this.name}`;
  // }

  // public get greeting3(): string {
  //   return `Hello, ${this.name}`;
  // }

  public cssStyles(): object {
    return { color: 'red' };
  }

  // public cssStyles2(): string[] {
  //   return ['smth'];
  // }

  // public cssStyle3(): string[] {
  //   return ['smth'];
  // }

  public render(h: CreateElement): VNode {
    return h('div', { style: this.cssStyles }, this.greeting);
  }
}