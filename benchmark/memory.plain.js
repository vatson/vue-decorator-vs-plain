const { PlainComponent } = require('../dist/plain.min');
const el = 10000;
const components = [...Array(el)].map((_,i) => new PlainComponent)

console.log(`\r\nPlain Component(x${el} elements):`);

const used = process.memoryUsage();
for (let key in used) {
  console.log(`${key} ${Math.round(used[key] / 1024  * 100) / 100} KB`);
}