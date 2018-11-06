const { DecoratedComponent } = require('../dist/decorated.min');
const { PlainComponent } = require('../dist/plain.min');
const Vue = require('vue');

const { Suite } = require('benchmark');


new Suite()
  .add('Decorated', () => {
    new DecoratedComponent().$mount();
  })
  .add('Plain', () => {
    new PlainComponent().$mount();
  })

  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })

  .run()