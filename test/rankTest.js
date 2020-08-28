const rankTest = require('ava');
const { voyageRisk } = require('../src/rank')
rankTest('foo', t => {
  t.pass();
});

rankTest('bar', async t => {
  const bar = Promise.resolve('bar');
  t.is(await bar, 'bar');
});

rankTest('voyage length is 4',t=>{
  const voyage = {
    zone: 'west-indies',
    length: 4,
  };
  const result = voyageRisk(voyage);
  t.is(result, 1)
});

rankTest('voyage length is 4',t=>{
  const voyage = {
    zone: 'west-indies',
    length: 5,
  };
  const result = voyageRisk(voyage);
  t.is(result, 3)
});

rankTest('voyage length is 4',t=>{
  const voyage = {
    zone: 'west-indies',
    length: 9,
  };
  const result = voyageRisk(voyage);
  t.is(result, 4)
});

rankTest('voyage length is 4',t=>{
  const voyage = {
    zone: 'china',
    length: 4,
  };
  const result = voyageRisk(voyage);
  t.is(result, 5)
});

rankTest('voyage length is 4',t=>{
  const voyage = {
    zone: 'china',
    length: 5,
  };
  const result = voyageRisk(voyage);
  t.is(result, 7)
});

rankTest('voyage length is 4',t=>{
  const voyage = {
    zone: 'china',
    length: 9,
  };
  const result = voyageRisk(voyage);
  t.is(result, 8)
});

rankTest('voyage length is 4',t=>{
  const voyage = {
    zone: 'east-indies',
    length: 4,
  };
  const result = voyageRisk(voyage);
  t.is(result, 5)
});

rankTest('voyage length is 4',t=>{
  const voyage = {
    zone: 'east-indies',
    length: 5,
  };
  const result = voyageRisk(voyage);
  t.is(result, 7)
});

rankTest('voyage length is 4',t=>{
  const voyage = {
    zone: 'east-indies',
    length: 9,
  };
  const result = voyageRisk(voyage);
  t.is(result, 8)
});


